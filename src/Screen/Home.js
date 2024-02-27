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

import Icon20 from "../Icon/monitoring.png";
import Icon21 from "../Icon/location.png";
import Icon22 from "../Icon/time.png";
import Icon23 from "../Icon/payment-method.png";
import Icon24 from "../Icon/cash-money.png";
import Icon25 from "../Icon/insurance.png";

import { Input, Button } from "antd";
import {
  ShoppingCartOutlined,
  LeftCircleOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import HomeChooseCart from "../Cart/HomeChooseCart";
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
  const [page, setPage] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPage((prevPage) => (prevPage === 0 ? 1 : 0));
    }, 10000); // Change page after 10 seconds

    return () => clearTimeout(timeout);
  }, [page]);
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
        <p className="home-Text">Why Name</p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              flex: 1,
              backgroundColor: "rgb(216, 251, 251)",
              height: "3px",
            }}
          />

          <p style={{ margin: "0 10px" }}>...</p>

          <div
            style={{
              flex: 1,
              backgroundColor: "rgb(216, 251, 251)",
              height: "3px",
            }}
          />
        </div>

        <div className="homeBox2-div">
          {(page === 0
            ? [
                {
                  icon: Icon4,
                  text1: "Realtime Tracking",
                  text2: "International standard tracking via online",
                },
                {
                  icon: Icon5,
                  text1: "Dedicated Relationship Team",
                  text2: "Team that takes care of your orders, day in day out",
                },
                {
                  icon: Icon6,
                  text1: "Return OTP",
                  text2: "Full control of returns through return OTP",
                },
                {
                  icon: Icon7,
                  text1: "Free In App Call",
                  text2:
                    "Reach out to us for any queries for free with {name} GO App",
                },
              ]
            : [
                {
                  icon: Icon12,
                  text1: "Strongest Doorstep Delivery",
                  text2:
                    "Reaching out to the doorsteps of 4554 unions of Bangladesh",
                },
                {
                  icon: Icon13,
                  text1: "Cash on Delivery Service",
                  text2: "Payment collection after successful delivery",
                },
                {
                  icon: Icon14,
                  text1: "Merchant Payment within 1 Day",
                  text2:
                    "Guaranteed merchant payment within 24 hours of the delivery",
                },
                {
                  icon: Icon15,
                  text1: "Nationwide Doorstep Pick-up",
                  text2: "Doorstep pickup from anywhere around the country",
                },
              ]
          ).map((item, index) => (
            <HomeBox2
              key={index}
              icon={item.icon}
              text1={item.text1}
              text2={item.text2}
            />
          ))}
        </div>

        <div className="homeBox2-button-div">
          <button
            className="homeBox2-button"
            onClick={() => {
              setPage((prevPage) => (prevPage === 0 ? 1 : 0));
            }}
          >
            <LeftCircleOutlined className="homeBox2-button-Icon" />
          </button>

          <button
            className="homeBox2-button"
            onClick={() => {
              setPage((prevPage) => (prevPage === 0 ? 1 : 0));
            }}
          >
            <RightCircleOutlined className="homeBox2-button-Icon" />
          </button>
        </div>

        <div className="homeBox2-div">
          {(page === 0
            ? [
                {
                  icon: Icon8,
                  text1: "Cashless Pay",
                  text2:
                    "Pay with Bkash, Nagad, Debit and Credit cards during doorstep delivery",
                },
                {
                  icon: Icon9,
                  text1: "Smart log",
                  text2:
                    "Detail visibility on return orders & correspondence between {name} and customers",
                },
                {
                  icon: Icon10,
                  text1: "Automated billing",
                  text2: "Hassle free automated billing system",
                },
                {
                  icon: Icon11,
                  text1: "Smart Check",
                  text2:
                    "Access to customers’ previous delivery records to determine possible delivery or return",
                },
              ]
            : [
                {
                  icon: Icon16,
                  text1: "Fastest Doorstep Delivery",
                  text2:
                    "Next Day doorstep Delivery inside Dhaka. 24- 72 hours Delivery for rest of Bangladesh",
                },
                {
                  icon: Icon17,
                  text1: "Dedicated Call Center",
                  text2:
                    "A team of well trained professionals to listen and solve your queries",
                },
                {
                  icon: Icon18,
                  text1: "Fulfillment and Warehousing",
                  text2:
                    "Spacious warehousing and convenient fulfillment facilities",
                },
                {
                  icon: Icon19,
                  text1: "Completely Own Setup",
                  text2: "a fleet of own vehicles and people",
                },
              ]
          ).map((item, index) => (
            <HomeBox2
              key={index}
              icon={item.icon}
              text1={item.text1}
              text2={item.text2}
            />
          ))}
        </div>
      </div>

      {/* Box-Img */}
      <div>
        fff
      </div>

      {/* Box-3 */}
      <div className="homeBox3">
        <div style={{ height: "30px" }} />
        <p className="home-Text">Choose name as your logistics partner</p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              flex: 1,
              backgroundColor: "#fff",
              height: "3px",
            }}
          />

          <p style={{ margin: "0 10px" }}>...</p>

          <div
            style={{
              flex: 1,
              backgroundColor: "#fff",
              height: "3px",
            }}
          />
        </div>

        <div className="homeBox3-div">
          <HomeChooseCart
            icon={Icon20}
            text1="Industry-leading tech"
            text2="With a brilliant team of engineers driving everything we do, NAME offers the best possible service experience powered by superior technology"
          />
          <HomeChooseCart
            icon={Icon21}
            text1="Nationwide coverage"
            text2="NAME offers the widest logistics network, covering 64 districts and 490+ sub districts across Bangladesh"
          />
          <HomeChooseCart
            icon={Icon22}
            text1="Fastest solutions"
            text2="Backed by an agile team and dynamic operations, we promise to find the fastest solutions for your needs"
          />
        </div>

        <div className="homeBox3-div">
          <HomeChooseCart
            icon={Icon23}
            text1="Next day payment"
            text2="Once the delivery is complete you will receive payment the very next day."
          />
          <HomeChooseCart
            icon={Icon24}
            text1="Best COD rates"
            text2="COD charge inside Dhaka 0%, outside Dhaka 1%."
          />
          <HomeChooseCart
            icon={Icon25}
            text1="Secure handling"
            text2="Compensation policy guarantees safety of your shipment"
          />
        </div>
      </div>
      <div style={{ height: "1000px" }}></div>
    </div>
  );
}
