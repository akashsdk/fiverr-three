import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const storedColors = localStorage.getItem("selectedTextColors");
  const [textColors, setTextColors] = useState(
    storedColors
      ? JSON.parse(storedColors)
      : ["black", "black", "black", "black", "black", "black", "black"]
  );

  const handleTextClick = (index) => {
    const updatedColors = textColors.map((_, i) =>
      i === index ? "red" : "black"
    );
    setTextColors(updatedColors);
    localStorage.setItem("selectedTextColors", JSON.stringify(updatedColors));
  };

  return (
    <div style={{ height: "auto", width: "100%" }}>
      <HeaderCart
        textColors={textColors}
        handleTextClick={handleTextClick}
        onScroll={handleScroll}
      />

      {scrollPosition > 120 && (
        <div className="header-fixed">
          <HeaderCart
            textColors={textColors}
            handleTextClick={handleTextClick}
          />
        </div>
      )}
    </div>
  );
}

const HeaderCart = ({ textColors, handleTextClick }) => (
  <div className="header-Body">
    {/* Box1 */}
    <div className="header-Box1">
      <Link to="/" onClick={() => handleTextClick(0)}>
        <button>Icon & Name</button>
      </Link>
    </div>

    {/* Box2 */}
    <div className="header-Box2">
      <Link to="/" className="header-Link" onClick={() => handleTextClick(0)}>
        <p className={`header-text ${textColors[0]}`}>Home</p>
      </Link>

      <Link
        to="/charges"
        className="header-Link"
        onClick={() => handleTextClick(1)}
      >
        <p className={`header-text ${textColors[1]}`}>Charges</p>
      </Link>

      <Link
        to="/services-customer"
        className="header-Link"
        onClick={() => handleTextClick(2)}
      >
        <p className={`header-text ${textColors[2]}`}>Services</p>
      </Link>

      <Link
        to="/about us"
        className="header-Link"
        onClick={() => handleTextClick(3)}
      >
        <p className={`header-text ${textColors[3]}`}>About Us</p>
      </Link>

      <Link
        to="/contact"
        className="header-Link"
        onClick={() => handleTextClick(4)}
      >
        <p className={`header-text ${textColors[4]}`}>Contact</p>
      </Link>
    </div>

    {/* Box3 */}
    <div className="header-Box3">
      <p>English or Bangla</p>
    </div>
  </div>
);
