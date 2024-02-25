import React, { useState, useEffect } from "react";
import "./Header.css";

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
      <HeaderCart onScroll={handleScroll}/>

      {scrollPosition > 120 && (
        <div className="header-fixed" >
         <HeaderCart/>
        </div>
      )}
    </div>
  );
}


const HeaderCart = () => (
  <div className="header-Body">
    {/* Box1 */}
    <div className="header-Box1">
      <button>Icon & Name</button>
    </div>

    {/* Box2 */}
    <div className="header-Box2">
      <button>Home</button>
      <button>Charges</button>
      <button>Services</button>
      <button>Contact</button>
    </div>

    {/* Box3 */}
    <div className="header-Box3">
      <p>English or Bangla</p>
    </div>
  </div>
);
