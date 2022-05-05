import React from "react";
import Link from "next/link";
import './Cards.css'

const CardItem = (props) => {
  let { path, src, text, label } = props;
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={path}>
          <figure className="cards__item__pic_wrap" data-category={label}>
            <img src={src} className="cards__item__img" alt={label} />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
};

export default CardItem;
