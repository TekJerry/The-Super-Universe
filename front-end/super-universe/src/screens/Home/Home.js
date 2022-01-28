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
            <img src="https://i.imgur.com/CQ7UKwy.png" alt="comic boom" />
            <p>
              Hello can you all see this correctly? if not this text would not
              be visible and unreadable.
            </p>
          </div>
          <div className="are-you"><img src="https://i.imgur.com/Ick1jpG.png" alt="comic wow" /></div>
        </div>
        <div className="desc2-container">
          <div className="desc2"></div>
          <div className="create-your-own"></div>
        </div>
      </div>
    </Layout>
  );
}
