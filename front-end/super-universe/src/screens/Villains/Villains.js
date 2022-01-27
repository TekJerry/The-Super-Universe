import React from "react";
import Layout from "../../components/Layout/Layout";
import "./Villains.css";
import { useEffect, useState } from "react";
import { grabCharacters } from "../../services/index";

export default function Villains() {
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

  return (
    <Layout>
      <div className="big-container-villain">
        <div className="left-container-villain">
          <div className="search-villain">
            {" "}
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
          </div>

          <div className="results-maybe-villain">
            <div className="container-search-hero">
              {characters
                .filter((val) => {
                  if (val.is_villain) {
                    return val.code_name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase());
                  }
                })
                .map((val, key) => {
                  return (
                    <div className="relative-search" key={key}>
                      <div key={val.id}>
                        <button onClick={(e) => handleClick(e, val)}>
                          {val.code_name}
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="suggestions-villain"></div>
        </div>
        <div className="villain-details">
          {" "}
          <div className="hero-img">
            <img src={codeName.img_url} alt="villain goes here" />
          </div>
          <div className="facts">
            <div className="name">{codeName.code_name}</div>
            <div className="weapon">{codeName.weapon}</div>
            <div className="fight-ability">{codeName.fight_ability}</div>
            <div className="real-name">{codeName.real_name}</div>
            <div className="dob">{codeName.dob}</div>
            <div className="background">{codeName.background}</div>
            <div className="origin">{codeName.origin}</div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
