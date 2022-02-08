import React from "react";
import { Link } from "react-router-dom";
import "../styles/MainShow.css";

const Mainshow = () => {
  return (
    <section className="mainshow">
      <img className="bg" src={require("../assets/images/eg_crop.jpg")} alt="" />
      <img
        className="head"
        src={require("../assets/images/eg_head_crop.png")}
        alt=""
      />
      <h1>NATURE</h1>
      <div className="tab">
        <h2>Series 1</h2>
        <p>National Geographic is launching a state of new series that will showcase the natural world exotic wildlife.</p>
        <Link className="watch button" to="/"><i className="fas fa-play"></i>Watch Now</Link>
        <Link className="more button"to="/">More Episodes</Link>
      </div>
    </section>
  );
};

export default Mainshow;
