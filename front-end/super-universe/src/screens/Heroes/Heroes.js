import React from "react";
import Layout from "../../components/Layout/Layout";
import "./Heroes.css";
import { useEffect, useState } from "react";
import { grabCharacters } from "../../services/index";
import { Link } from "react-router-dom";
import Delete from "../../components/Delete/Delete";

export default function Heroes() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [codeName, setCodeName] = useState({});

  useEffect(() => {
    const getApi = async () => {
      const res = await grabCharacters();
      console.log(res);
      setCharacters(res);
    };
    getApi();
  }, []);

  const handleClick = (e, codes) => {
    e.preventDefault();
    setCodeName(codes);
  };
console.log(codeName)
  return (
    <Layout>
      <div className="big-container-hero">
        <div className="left-container-hero">
          <div className="search-hero">
            {" "}
            <input
              className="search-bar-hero"
              type="text"
              placeholder="Search..."
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
          </div>

          <div className="results-maybe">
            <div className="container-search-hero">
              {characters
                .filter((val) => {
                  if (val.is_hero === "true" || val.is_hero === "True") {
                    return val.code_name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase());
                  }
                })
                .map((val, key) => {
                  return (
                    <div className="relative-search" key={key}>
                      <div className="result-links" key={val.id}>
                        <button className="results-search" onClick={(e) => handleClick(e, val)}>
                          {val.code_name}
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="suggestions"></div>
        </div>
        { 
          codeName.img_url ?
        
        <div className="hero-details">
          <div className="hero-img">
            <img src={codeName.img_url} alt="hero" />
              </div>
              <div className="please-work">
          <div className="facts">
            <div className="name"><p className="question">Hero Code Name: <span className="answer">{codeName.code_name}</span></p></div>
            <div className="weapon"><p className="question">Favorite Weapon: <span className="answer">{codeName.weapon}</span></p></div>
            <div className="fight-ability"><p className="question">Fighting Ability: <span className="answer">{codeName.fight_ability}</span></p></div>
            <div className="real-name"><p className="question">Real Name: <span className="answer">{codeName.real_name}</span></p></div>
            <div className="dob"><p className="question">Date of Birth: <span className="answer">{codeName.dob}</span></p></div>
            <div className="background"><p className="question">Background Story: <span className="answer">{codeName.background}</span></p></div>
            <div className="origin"><p className="question">Origin Story: <span className="answer">{codeName.origin}</span></p></div>
                </div>
                <div className="multiple-btn">
              <Link to={`/character/edit/${codeName.id}`}>
                <button className="edit-character">Edit Character</button>
              </Link>
                </div>
                </div>
              
            </div>
            : <div className="hero-details"></div>}
      </div>
    </Layout>
  );
}
