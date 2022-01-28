import React from "react";
import "./Create.css";
import Layout from "../../components/Layout/Layout";
import { postCharacter } from "../../services/index";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [code_name, setCodeName] = useState("");
  const [weapon, setWeapon] = useState("");
  const [fight_ability, setFightAbility] = useState("");
  const [real_name, setRealName] = useState("");
  const [dob, setDob] = useState("");
  const [img_url, setImgUrl] = useState("");
  const [is_hero, setIsHero] = useState("");
  const [is_villain, setIsVillain] = useState("");
  const [background, setBackground] = useState("");
  const [origin, setOrigin] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCharacter = {
      code_name,
      weapon,
      fight_ability,
      real_name,
      dob,
      img_url,
      is_hero,
      is_villain,
      background,
      origin,
    };
    await postCharacter(newCharacter);
    navigate("/");
  };

  return (
    <Layout>
      <div className="main-create-container">
        <div className="big-title"></div>
        <div className="fer-container">
          <div className="create-info"></div>
          <div className="form">
            <form
              onSubmit={handleSubmit}
              className="input-form"
              id="character-form"
            >
              <input
                type="text"
                value={code_name}
                placeholder="Type Code name here..."
                onChange={(e) => setCodeName(e.target.value)}
              />
              <input
                type="text"
                value={weapon}
                placeholder="Type special/favorite weapon here..."
                onChange={(e) => setWeapon(e.target.value)}
              />
              <input
                type="text"
                value={fight_ability}
                placeholder="Type fight ability here..."
                onChange={(e) => setFightAbility(e.target.value)}
              />
              <input
                type="text"
                value={real_name}
                placeholder="Type real name here..."
                onChange={(e) => setRealName(e.target.value)}
              />
              <input
                type="text"
                value={dob}
                placeholder="Type date of birth here..."
                onChange={(e) => setDob(e.target.value)}
              />
              <input
                type="text"
                value={img_url}
                placeholder="Type image url here..."
                onChange={(e) => setImgUrl(e.target.value)}
              />
              <input
                type="text"
                value={is_hero}
                placeholder="If character is a Hero type 'true' here..."
                onChange={(e) => setIsHero(e.target.value)}
              />
              <input
                type="text"
                value={is_villain}
                placeholder="If character is a Villain type 'true' here..."
                onChange={(e) => setIsVillain(e.target.value)}
              />
              <input
                type="text"
                value={background}
                placeholder="Type their background here..."
                onChange={(e) => setBackground(e.target.value)}
              />
              <input
                type="text"
                value={origin}
                placeholder="Type their origin here..."
                onChange={(e) => setOrigin(e.target.value)}
              />
              <button>Add My Character</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
