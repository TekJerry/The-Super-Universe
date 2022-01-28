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
          <div className="search">
            {" "}
            <input
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
                      <div key={val.id}>
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
        <div className="hero-details">
          <div className="hero-img">
            <img src={codeName.img_url} alt="hero" />
          </div>
          <div className="facts">
            <div className="name">{codeName.code_name}</div>
            <div className="weapon">{codeName.weapon}</div>
            <div className="fight-ability">{codeName.fight_ability}</div>
            <div className="real-name">{codeName.real_name}</div>
            <div className="dob">{codeName.dob}</div>
            <div className="background">{codeName.background}</div>
            <div className="origin">{codeName.origin}</div>
            <div className="multiple-btn">
              <Link to={`/character/edit/${codeName.id}`}>
                <button className="edit-character">Edit Character</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
