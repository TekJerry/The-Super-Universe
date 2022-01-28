import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCharacter, updateCharacter } from "../../services/index";
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
  useEffect(() => {
    const findCharacter = async () => {
      const foundCharacter = await getCharacter(params.id)
      setCharacter(foundCharacter)
    }
    findCharacter()
  }, [])
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    await updateCharacter(params.id, character)
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
      <div>
      <form className="edit-characters">
        <h1 className='edit-character-title'>Edit Character</h1>
        <h5>Fill in the form below to make changes to a character.</h5>
        <input
          className="code-name-input"
          placeholder="Update Code Name"
          value={character.code_name}
          name="code_name"
          onChange={(e) => handleChange(e)}
        />
        <input
          className="weapon-input"
          placeholder="Update weapon"
          value={character.weapon}
          name="weapon"
          onChange={(e) => handleChange(e)}
        />
        <input
          className="fight-ability-input"
          placeholder="Update fight ability"
          value={character.fight_ability}
          name="fight_ability"
          onChange={(e) => handleChange(e)}
        />
        <input
          className="real-name-input"
          placeholder="Update Real Name"
          value={character.real_name}
          name="real_name"
          onChange={(e) => handleChange(e)}
        />
        <input
          className="dob-input"
          placeholder="Update Date of birth"
          value={character.dob}
          name="dob"
          onChange={(e) => handleChange(e)}
        />  
        <input
          className="img-url-input"
          placeholder="Update Character Image"
          value={character.img_url}
          name="img_url"
          onChange={(e) => handleChange(e)}
          />  
          <input
          className="is-villan-input"
          placeholder="Update Is Character A Villain"
          value={character.is_villain}
          name="is_villan"
          onChange={(e) => handleChange(e)}
          />  
          <input
          className="is-hero-input"
          placeholder="Update Is Character A Villain"
          value={character.is_hero}
          name="is_hero"
          onChange={(e) => handleChange(e)}
          />  
          <input
          className="background-input"
          placeholder="Update Character Background"
          value={character.background}
          name="background"
          onChange={(e) => handleChange(e)}
          />  
          <input
          className="origin-input"
          placeholder="Update Item Origin"
          value={character.origin}
          name="origin"
          onChange={(e) => handleChange(e)}
        />  
          
      <div className='multiple-btn'>
      <button className='edit-character-btn' onClick={(e) => handleSubmit(e)}>Edit</button>
      </div>
        </form>
        

      </div>
    </Layout>
  );
}
