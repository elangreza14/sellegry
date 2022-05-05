import React, { Suspense } from "react";
import { CardItem } from ".";
import "./Cards.css";

const Cards = (props) => {
  // const { height } = props;
  return (
    <div className="cards">
      <h1>Check out these epic Offers</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <Suspense fallback={<div>Loading...</div>}>
              <CardItem
                src={require("../../../assets/images/Satu.webp")}
                text="Explore New Investment in Energy"
                label="News"
                path="/"
              />
              <CardItem
                src={require("../../../assets/images/Dua.webp")}
                text="New 500KW Power you can Buy in Jawa"
                label="Sell"
                path="/"
              />
            </Suspense>
          </ul>
          <ul className="cards__items">
            <Suspense fallback={<div>Loading...</div>}>
              <CardItem
                src={require("../../../assets/images/Empat.webp")}
                text="Explore New Investment in Energy"
                label="News"
                path="/"
              />
              <CardItem
                src={require("../../../assets/images/Tiga.webp")}
                text="New 500KW Power you can Buy in Jawa"
                label="Sell"
                path="/tokosatu"
              />
              <CardItem
                src={require("../../../assets/images/Dua.webp")}
                text="New 500KW Power you can Buy in Jawa"
                label="Sell"
                path="/"
              />
            </Suspense>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
