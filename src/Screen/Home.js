import React, { useState, useEffect } from "react";
import "./Home.css";

import HomeBox2 from "../Cart/HomeBox2";

import box1Img1 from "../Img/delivery-man.jpeg";
import box1Img2 from "../Img/delivery-man2.avif";
import box1Img3 from "../Img/delivery-man3.jpeg";
import box1Img4 from "../Img/delivery-man4.webp";
import box1Img5 from "../Img/delivery-man5.jpeg";

import Icon1 from "../Icon/online-shopping.png";
import Icon2 from "../Icon/courier-service.png";
import Icon3 from "../Icon/delivery-courier.png";
import Icon4 from "../Icon/gps.png";

import { Input, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  const onSearch = (value, _e, info) => {
    if (!value) {
      alert("Please enter an Order ID");
    } else {
      // Navigate to with the provided Order ID
      navigate(`/trackOrder?orderId=${value}`);
    }
  };

  // Box-2
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
            <Link to="/register">
              <Button
                type="primary"
                icon={<ShoppingCartOutlined />}
                size="large"
              >
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/* Box-2 */}
      <div className="homeBox2">
        <div className="homeBox2-div">
        <HomeBox2 icon={Icon4} text1='Realtime Tracking' text2='International standard tracking via online'/>
        <HomeBox2 icon={''} text1='Dedicated Relationship Team' text2='Team that takes care of your orders, day in day out'/>
        <HomeBox2 icon={''} text1='Return OTP' text2='Full control of returns through return OTP'/>
        <HomeBox2 icon={''} text1='Free In App Call' text2='Reach out to us for any queries for free with {name} GO App'/>
        </div>
        
        <div className="homeBox2-div">
        <HomeBox2 icon={''} text1='Cashless Pay' text2='Pay with Bkash, Nagad, Debit and Credit cards during doorstep delivery'/>
        <HomeBox2 icon={''} text1='Smart log' text2='Detail visibility on return orders & correspondence between {name} and customers'/>
        <HomeBox2 icon={''} text1='Automated billing' text2='Hassle free automated billing system'/>
        <HomeBox2 icon={''} text1='Smart Check' text2='Access to customers’ previous delivery records to determine possible delivery or return'/>
        </div>

        <div className="homeBox2-div">
         <HomeBox2 icon={''} text1='Strongest Doorstep Delivery' text2='Reaching out to the doorsteps of 4554 unions of Bangladesh'/>
         <HomeBox2 icon={''} text1='Cash on Delivery Service' text2='Payment collection after successful delivery'/>
         <HomeBox2 icon={''} text1='Merchant Payment within 1 Day' text2='Guaranteed merchant payment within 24 hours of the delivery'/>
         <HomeBox2 icon={''} text1='Nationwide Doorstep Pick-up' text2='Doorstep pickup from anywhere around the country'/>
        </div>

        <div className="homeBox2-div">
         <HomeBox2 icon={''} text1='Fastest Doorstep Delivery' text2='Next Day doorstep Delivery inside Dhaka. 24- 72 hours Delivery for rest of Bangladesh'/>
         <HomeBox2 icon={''} text1='Dedicated Call Center' text2='A team of well trained professionals to listen and solve your queries'/>
         <HomeBox2 icon={''} text1='Fulfillment and Warehousing' text2='Spacious warehousing and convenient fulfillment facilities'/>
         <HomeBox2 icon={''} text1='Completely Own Setup' text2='a fleet of own vehicles and people'/>
        </div>
      </div>

      <div style={{ height: "1000px" }}></div>
    </div>
  );
}
