import React, { useState, useEffect } from "react";
import "./AboutUs.css";
import HomeBox2 from "../Cart/HomeBox2";
import Icon4 from "../Icon/gps.png";
import Icon5 from "../Icon/icon2.png";
import Icon6 from "../Icon/icon3.png";
import Icon7 from "../Icon/icon4.png";
import Icon8 from "../Icon/icon5.png";
import Icon9 from "../Icon/icon6.png";
import Icon10 from "../Icon/icon7.png";
import Icon11 from "../Icon/icon8.png";
import Icon12 from "../Icon/icon9.png";
import Icon13 from "../Icon/icon10.png";
import Icon14 from "../Icon/icon11.png";
import Icon15 from "../Icon/icon12.png";
import Icon16 from "../Icon/icon13.png";
import Icon17 from "../Icon/icon14.png";
import Icon18 from "../Icon/icon15.png";
import Icon19 from "../Icon/icon16.png";

export default function AboutUs() {
  const [page, setPage] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPage((prevPage) => (prevPage === 0 ? 1 : 0));
    }, 10000); // Change page after 10 seconds

    return () => clearTimeout(timeout);
  }, [page]);

  return (
    <div>
      AboutUs
    </div>
  );
}
