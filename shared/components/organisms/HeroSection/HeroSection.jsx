import React from "react";
import { Button } from "../atoms";
import "../../../App/App.css";
import "./HeroSection.css";

const HeroSection = (props) => {
  const { height } = props;
  return (
    <div style={{ maxHeight: height - 230 }} className="hero-container">
      <img
        src={require("../../../assets/images/HomepageSolar.webp")}
        alt="homepage"
        style={{ maxHeight: height - 230 }}
        className="bigimage"
      />
      <h1>Sell and Buy Energy Right Now!</h1>
      <p>What Are You Waiting For?</p>
      <div className="hero-btns">
        <Button
          condition="link"
          link="/"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          condition="link"
          link="/"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          GET TO KNOW HOW WE WORK
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
