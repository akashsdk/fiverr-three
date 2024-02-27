import React from "react";
import "./HomeChooseCart.css";

export default function HomeChooseCart({ icon, text1, text2 }) {
  return (
    <div className="ChooseCart-Body">
      <img className="ChooseCart-Img" src={icon} alt="Icon" />
      <div className="ChooseCart-Div">
        <p className="ChooseCart-Text1">{text1}</p>
        <p className="ChooseCart-Text2">{text2}</p>
      </div>
    </div>
  );
}
