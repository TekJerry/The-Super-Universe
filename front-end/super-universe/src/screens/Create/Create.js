import React from "react";
import "./Create.css";
import Layout from "../../components/Layout/Layout";
import { postCharacter } from "../../services/index";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Create() {


  const [codeName, setCodeName] = useState("");
  const [weapon, setWeapon] = useState("");
  const [fightAbility, setFightAbility] = useState("");
  const [realName, setRealName] = useState("");
  const [dob, setDob] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [isHero, setIsHero] = useState("");
  const [isVillain, setIsVillain] = useState("");
  const [background, setBackground] = useState("");
  const [origin, setOrigin] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newCharacter = {
      codeName,
      weapon,
      fightAbility,
      realName,
      dob,
      imgUrl,
      isHero,
      isVillain,
      background,
      origin,

    }

    const response = await postCharacter(newCharacter)
    if (response) {
      navigate('/')
    }
  }
  return (
    <Layout>
      <div className="main-create-container">
        <div className="big-title"></div>
        <div className="fer-container">
          <div className="create-info"></div>
          <div className="form">
            <form onSubmit={handleSubmit} className="input-form" id="character-form">
              <input type="text" placeholder="Type Code name here..." onChange={(e) => setCodeName(e.target.value) }/>
              <input type="text" placeholder="Type special/favorite weapon here..." onChange={(e) => setWeapon(e.target.value) }/>
              <input type="text" placeholder="Type fight ability here..." onChange={(e) => setFightAbility(e.target.value)}/>
              <input type="text" placeholder="Type real name here..." onChange={(e) => setRealName(e.target.value) }/>
              <input type="text" placeholder="Type date of birth here..." onChange={(e) => setDob(e.target.value) }/>
              <input type="text" placeholder="Type image url here..." onChange={(e) => setImgUrl(e.target.value)}/>
              <input type="text" placeholder="If character is a Hero type 'true' here..." onChange={(e) => setIsHero(e.target.value)}/>
              <input type="text" placeholder="If character is a Villain type 'true' here..." onChange={(e) => setIsVillain(e.target.value)}/>
              <input type="text" placeholder="Type their background here..." onChange={(e) => setBackground(e.target.value)}/>
              <input type="text" placeholder="Type their origin here..." onChange={(e) => setOrigin(e.target.value)} />
              <button>Add My Character</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
