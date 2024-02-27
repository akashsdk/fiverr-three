import React from "react";
import "./HomeBox2.css";

export default function HomeBox2({ icon, text1, text2 }) {
  return (
    <div className="HomeBox2-cart-Body">
      <div className="HomeBox2-cart-div">
        <img alt="icon" src={icon} className="HomeBox2-cart-icon" />
        <div className="HomeBox2-cart-div2">
          <p className="HomeBox2-cart-text1">{text1}</p>
          <p className="HomeBox2-cart-text2">{text2}</p>
        </div>
      </div>
    </div>
  );
}
