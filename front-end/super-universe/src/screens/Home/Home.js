import React from "react";
import Layout from "../../components/Layout/Layout";
import "./Home.css";

export default function Home() {
  return (
    <Layout>
      <div className="home-big">
        <div className="hero-villain">
          <img />
          <img />
        </div>
        <div className="desc-container">
          <div className="desc"></div>
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
