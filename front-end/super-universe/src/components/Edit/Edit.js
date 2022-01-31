import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCharacter, updateCharacter } from "../../services/index";
import Delete from "../Delete/Delete";
import Layout from "../Layout/Layout";
import "./Edit.css";

export default function Edit() {
  const [character, setCharacter] = useState({
    code_name: "",
    weapon: "",
    fight_ability: "",
    real_name: "",
    dob: "",
    img_url: "",
    is_villain: "",
    is_hero: "",
    background: "",
    origin: "",
  });

  const params = useParams()
  const navigate = useNavigate()
  
  useEffect(() => {
    const findCharacter = async () => {
      const foundCharacter = await getCharacter(params.id)
      setCharacter(foundCharacter)
    }
    findCharacter()
  }, [])
  
  // console.log(character)

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(params.id, character)
    await updateCharacter(params.id, character)
    navigate("/");
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setCharacter({
      ...character,
      [name]: value
    })
  }

  return (
    <Layout>
      <div className="edit-container">
      <form className="edit-characters" onSubmit={handleSubmit}>
        <h1 className='edit-character-title'>Edit Character</h1>
        <h5 className="fill-character-data">Fill in the form below to make changes to a character.</h5>
        <input
        type="text"
          className="input"
          placeholder="Update Code Name"
          value={character.code_name}
          name="code_name"
          onChange={(e) => handleChange(e)}
        />
        <input
        type="text"
          className="input"
          placeholder="Update weapon"
          value={character.weapon}
          name="weapon"
          onChange={(e) => handleChange(e)}
        />
        <input
        type="text"
          className="input"
          placeholder="Update fight ability"
          value={character.fight_ability}
          name="fight_ability"
          onChange={(e) => handleChange(e)}
        />
        <input
        type="text"
          className="input"
          placeholder="Update Real Name"
          value={character.real_name}
          name="real_name"
          onChange={(e) => handleChange(e)}
        />
        <input
        type="text"
          className="input"
          placeholder="Update Date of birth"
          value={character.dob}
          name="dob"
          onChange={(e) => handleChange(e)}
        />  
        <input
        type="text"
          className="input"
          placeholder="Update Character Image"
          value={character.img_url}
          name="img_url"
          onChange={(e) => handleChange(e)}
          />  
          <input
          type="text"
          className="input"
          placeholder="Update Is Character A Villain"
          value={character.is_villain}
          name="is_villain"
          onChange={(e) => handleChange(e)}
          />  
          <input
          type="text"
          className="input"
          placeholder="Update Is Character A Villain"
          value={character.is_hero}
          name="is_hero"
          onChange={(e) => handleChange(e)}
          />  
          <input
          type="text"
          className="input"
          placeholder="Update Character Background"
          value={character.background}
          name="background"
          onChange={(e) => handleChange(e)}
          />  
          <input
          type="text"
          className="input"
          placeholder="Update Item Origin"
          value={character.origin}
          name="origin"
          onChange={(e) => handleChange(e)}
          /> 
        <button className="edit-btn" type="submit">edit</button>  
        </form>
        <Delete/>

      </div>
    </Layout>
  );
}
