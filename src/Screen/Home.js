import React, { useState, useEffect } from "react";
import "./Home.css";

import box1Img1 from "../Img/delivery-man.jpeg";
import box1Img2 from "../Img/delivery-man2.avif";
import box1Img3 from "../Img/delivery-man3.jpeg";
import box1Img4 from "../Img/delivery-man4.webp";
import box1Img5 from "../Img/delivery-man5.jpeg";

import Icon1 from "../Icon/online-shopping.png";
import Icon2 from "../Icon/courier-service.png";
import Icon3 from "../Icon/delivery-courier.png";

import { Input, Button } from "antd";
import { ShoppingCartOutlined } from '@ant-design/icons';
const { Search } = Input;

export default function Home() {
  // Box-1
  const images = [box1Img1, box1Img2, box1Img3, box1Img4, box1Img5];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <div className="home-body">
      {/* Box-1 */}
      <div className="homeBox1">
        <div className="homeBox1-left">
          <img className="homeBox1-left-img" src={images[activeIndex]} alt="" />
          <div className="homeBox1-left-Div">
            {images.map((image, index) => (
              <button
                key={index}
                className={`homeBox1-left-button ${
                  index === activeIndex ? "active" : ""
                }`}
                onClick={() => handleButtonClick(index)}
              />
            ))}
          </div>
        </div>
        <div className="homeBox1-right">
          <div className="homeBox1-right-div2">
            <div className="homeBox1-right-div">
              <img className="homeBox1-right-Icon" src={Icon1} alt="icon" />
              <img className="homeBox1-right-Icon" src={Icon2} alt="icon" />
              <img className="homeBox1-right-Icon" src={Icon3} alt="icon" />
            </div>
            <div className="homeBox1-right-div">
              <p className="homeBox1-right-Text">Merchant </p>
              <p className="homeBox1-right-Text">Our Service</p>
              <p className="homeBox1-right-Text">costumer</p>
            </div>
          </div>

          <div className="homeBox1-right-div3">
            <p className="homeBox1-right-Text">Track a parcel with Order ID</p>
            <Search
              placeholder="Order Id"
              allowClear
              enterButton="Track Now"
              size="large"
              onSearch={onSearch}
            />
          </div>

          <div className="homeBox1-right-div4">
          <Button type="primary" icon={<ShoppingCartOutlined />} size='large'>
            Register Now
          </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
