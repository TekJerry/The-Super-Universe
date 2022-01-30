import { useState } from "react";
import "./SignIn.css";
import { logIn } from '../../services/services';
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

export default function SignIn({ setLoggedIn }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await logIn(form);
      if (user) {
        setLoggedIn(true);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      setForm({
        username: "",
        password: "",
      });
    }
  };

  const { username, password } = form;

  return (
    <Layout>
    <div className="sign-container">
    <div className="sign-in">
      <h3 className="log-in">Log In</h3>
          <form className="something-cool" onSubmit={handleLogin}>
            <div className="input-1">
        <label>Username</label>
        <input
        className="create-input"
          required
          type="text"
          name="username"
          value={username}
          placeholder="Enter Username"
          onChange={handleChange}
              />
            </div>
            <div className="input-1">
        <label>Password</label>
        <input
        className="create-input"
          required
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          onChange={handleChange}
              />
            </div>
        <button className="last" type='submit'>Submit</button>
      </form>
      </div>
      </div>
    </Layout>
  );
}