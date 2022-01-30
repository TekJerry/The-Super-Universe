import React from "react";
import Layout from "../../components/Layout/Layout";
import "./Home.css";

export default function Home() {
  return (
    <Layout>
      <div className="home-big">
        <div className="hero-villain">
          <div className="pic-1">
            <img
              className="batman"
              src="https://i.imgur.com/kwhutKl.jpg"
              alt="batman"
            />
          </div>
          <div className="pic-2">
            <img
              className="joker"
              src="https://i.imgur.com/z48GwCu.jpg"
              alt="joker"
            />
          </div>
        </div>
        <div className="desc-container">
          <div className="desc">
            <p className="hello">
              Check out our database on Super Heroes and Super Villains!
              If that is not enough you have the power to create your own Super Hero or Super Villain!
              What side are you on?
            </p>
          </div>
          <div className="are-you"></div>
        </div>
        <div className="desc2-container">
          <div className="desc2"></div>
          <div className="create-your-own"></div>
        </div>
      </div>
    </Layout>
  );
}
