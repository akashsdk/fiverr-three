import React, { useState, useEffect } from "react";
import "./Header.css";

import { Link } from "react-router-dom";
import { Button, Drawer, Menu } from "antd";

import {
  MenuOutlined,
  HomeOutlined,
  DesktopOutlined,
  CarryOutOutlined,
  AppstoreOutlined,
  CustomerServiceOutlined,
  CaretDownOutlined,
  CaretUpOutlined,
} from "@ant-design/icons";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

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
    setOpen(false);
  };

  const items = [
    getItem(
      <Link onClick={onClose} to="/">
        Home
      </Link>,
      "1",
      <HomeOutlined />
    ),
    getItem(
      <Link onClick={onClose} to="/charges">
        Charges
      </Link>,
      "6",
      <CarryOutOutlined />
    ),
    getItem("Services", "sub1", <AppstoreOutlined />, [
      getItem(
        <Link onClick={onClose} to="/services-customer">
          Customer
        </Link>,
        "2"
      ),
      getItem(
        <Link onClick={onClose} to="/services-merchant">
          Merchant
        </Link>,
        "3"
      ),
      getItem(
        <Link onClick={onClose} to="/mvp-services">
          Our Rider
        </Link>,
        "4"
      ),
    ]),

    getItem(
      <Link onClick={onClose} to="/about-us">
        About Us
      </Link>,
      "8",
      <DesktopOutlined />
    ),
    getItem(
      <Link onClick={onClose} to="/contact">
        Contact
      </Link>,
      "9",
      <CustomerServiceOutlined />
    ),
  ];
  return (
    <div style={{ height: "auto", width: "100%" }}>
      <HeaderCart
        textColors={textColors}
        handleTextClick={handleTextClick}
        onScroll={handleScroll}
        showDrawer={showDrawer}
      />

      {scrollPosition > 150 && (
        <div className="header-fixed">
          <HeaderCart
            textColors={textColors}
            handleTextClick={handleTextClick}
            showDrawer={showDrawer}
          />
        </div>
      )}
      <Drawer
        placement="left"
        width={500}
        onClose={onClose}
        open={open}
        extra={
          <div className="header-DrawerHeader">
            <Link style={{ textDecoration: "none" }} to="/Check-Out">
              <button
                className={`headerBox-3-Button2 ${textColors[0]}`}
                onClick={() => handleTextClick(0)}
              >
                <p className="headerBox-3-BText2">Track Now</p>
              </button>
            </Link>
          </div>
        }
      >
        <div>
          <Menu
            style={{
              width: "100%",
            }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="light"
            items={items}
          />
        </div>
      </Drawer>
    </div>
  );
}

const HeaderCart = ({ textColors, handleTextClick, showDrawer }) => (
  <div style={{ height: "auto", width: "100%" }}>
    <div className="header-desktop-vew">
      <div className="header-Body">
        {/* Box1 */}
        <div className="header-Box1">
          <Link to="/" onClick={() => handleTextClick(0)}>
            <button>Icon & Name</button>
          </Link>
        </div>

        {/* Box2 */}
        <div className="header-Box2">
          <Link
            to="/charges"
            className="header-Link"
            onClick={() => handleTextClick(1)}
          >
            <p className={`header-text ${textColors[1]}`}>Charges</p>
          </Link>

          <div className="dropdown">
            <p className={`header-text ${textColors[2]}`}>Services</p>
            <CaretUpOutlined className="headerBox-2-Icon" />
            <CaretDownOutlined className="headerBox-2-Icon2" />
            <div className="dropdown-content">
              <Link
                onClick={() => handleTextClick(2)}
                to="/services-customer"
                className="dropdown-content-Link"
              >
                <p className="dropdown-content-Text">Customer</p>
              </Link>
              <Link
                onClick={() => handleTextClick(2)}
                to="/services-merchant"
                className="dropdown-content-Link"
              >
                <p className="dropdown-content-Text">Merchant</p>
              </Link>

              <Link
                onClick={() => handleTextClick(2)}
                to="/services-merchant"
                className="dropdown-content-Link"
              >
                <p className="dropdown-content-Text">Our Rider</p>
              </Link>
            </div>
          </div>

          <Link
            to="/aboutUs"
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
    </div>

    <div className="header-mobile-vew">
      <div className="header-Body">
        <div className="header-MenuBox1">
          <Button
            className="headerBox-Menu"
            shape="circle"
            onClick={showDrawer}
            icon={<MenuOutlined />}
          />
        </div>
        <div className="header-MenuBox2"></div>
        <div className="header-MenuBox">
          <Link to="/">
            <p>Name & Logo</p>
          </Link>
        </div>
      </div>
    </div>
  </div>
);
