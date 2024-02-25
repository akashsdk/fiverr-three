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

  return (
    <div style={{ height: "auto", width: "100%" }}>
      <HeaderCart onScroll={handleScroll} />

      {scrollPosition > 120 && (
        <div className="header-fixed">
          <HeaderCart />
        </div>
      )}
    </div>
  );
}

const HeaderCart = () => (
  <div className="header-Body">
    {/* Box1 */}
    <div className="header-Box1">
      <Link to="/">
        <button>Icon & Name</button>
      </Link>
    </div>

    {/* Box2 */}
    <div className="header-Box2">
      <Link to="/"  className="header-Link">
        <p className="header-text">Home</p>
      </Link>

      <Link to="/charges"  className="header-Link">
        <p className="header-text">Charges</p>
      </Link>

      <Link to="/services-customer"  className="header-Link">
        <p className="header-text">Services</p>
      </Link>

      <Link to="/contact"  className="header-Link">
        <p className="header-text">Contact</p>
      </Link>
    </div>

    {/* Box3 */}
    <div className="header-Box3">
      <p >English or Bangla</p>
    </div>
  </div>
);
