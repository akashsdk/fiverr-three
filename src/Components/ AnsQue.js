import React, { useState } from "react";

import "./AnsQue.css";

import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";

export default function AnsQue() {
  const [isTextVisible, setIsTextVisible] = useState(true);
  const toggleTextVisibility = () => {
    setIsTextVisible(!isTextVisible);
    setIsTextVisible2 (false);
    setIsTextVisible3 (false);
    setIsTextVisible4 (false);
  };

  const [isTextVisible2, setIsTextVisible2] = useState(false);
  const toggleTextVisibility2 = () => {
    setIsTextVisible2(!isTextVisible2);
    setIsTextVisible (false);
    setIsTextVisible3 (false);
    setIsTextVisible4 (false);
  };

  const [isTextVisible3, setIsTextVisible3] = useState(false);
  const toggleTextVisibility3 = () => {
    setIsTextVisible3(!isTextVisible3);
    setIsTextVisible2 (false);
    setIsTextVisible (false);
    setIsTextVisible4 (false);
  };

  const [isTextVisible4, setIsTextVisible4] = useState(false);
  const toggleTextVisibility4 = () => {
    setIsTextVisible4(!isTextVisible4);
    setIsTextVisible2 (false);
    setIsTextVisible3 (false);
    setIsTextVisible (false);
  };
  return (
    <div className="AnsQue-Body">
      <p className="AnsQue-Text"> Still have questions? We have answers!</p>
      <p className="AnsQue-Text2">
        Take a look at the most commonly asked questions. We are here to help.
      </p>

      <div className="AnsQue-Box">
        <div className="AnsQue-Box2">
          <div className="AnsQue-Div">
            <button onClick={toggleTextVisibility} className="AnsQue-Button">
              {isTextVisible ? (
                <MinusCircleOutlined className="AnsQue-Icon" />
              ) : (
                <PlusCircleOutlined className="AnsQue-Icon" />
              )}
            
            <p className="AnsQue-Text3">What is REDX?</p>
            </button>
          </div>
          {isTextVisible && (
            <p className="AnsQue-Text4">
              REDX is a tech-based logistics company operating nationwide and
              offering end-to-end services like parcel deliveries for SMEs,
              documents and parcel couriers for individuals and enterprise
              logistics solutions for corporate companies
            </p>
          )}
          <div className="AnsQue-Line" />

          <div className="AnsQue-Div">
            <button onClick={toggleTextVisibility2} className="AnsQue-Button">
              {isTextVisible2 ? (
                <MinusCircleOutlined className="AnsQue-Icon" />
              ) : (
                <PlusCircleOutlined className="AnsQue-Icon" />
              )}
            <p className="AnsQue-Text3">
              What kind of services does REDX offer?
            </p>
            </button>
          </div>
          {isTextVisible2 && (
            <p className="AnsQue-Text4">
              REDX is a complete platform for end-to-end delivery and logistics
              services for any business or personal needs. The services include
              parcel delivery, bulk shipment, line hall, truck rental,
              loading-unloading, warehouse, logistics services and customized
              solutions as required.
            </p>
          )}
          <div className="AnsQue-Line" />

          <div className="AnsQue-Div">
            <button onClick={toggleTextVisibility3} className="AnsQue-Button">
              {isTextVisible3 ? (
                <MinusCircleOutlined className="AnsQue-Icon" />
              ) : (
                <PlusCircleOutlined className="AnsQue-Icon" />
              )}
            <p className="AnsQue-Text3">
              What is the coverage area of ​​REDX Delivery?
            </p>
            </button>
          </div>
          {isTextVisible3 && (
            <p className="AnsQue-Text4">
              REDX delivers to all 64 districts of Bangladesh. Click the link to
              see the full list of REDX delivery areas. Contact your nearest
              REDX Hub to book delivery today. Click here to see the full list
              of REDX Hubs.
            </p>
          )}
          <div className="AnsQue-Line" />

          <div className="AnsQue-Div">
            <button onClick={toggleTextVisibility4} className="AnsQue-Button">
              {isTextVisible4 ? (
                <MinusCircleOutlined className="AnsQue-Icon" />
              ) : (
                <PlusCircleOutlined className="AnsQue-Icon" />
              )}
            <p className="AnsQue-Text3">
              Want to know about your delivery and logistics charges?
            </p>
            </button>
          </div>
          {isTextVisible4 && (
            <p className="AnsQue-Text4">
              Our delivery charge is designed according to the weight of the
              parcel. Charges start from Tk 69 per kg inside Dhaka, Tk 115
              around Dhaka and Tk 150 outside Dhaka. 1% cash on delivery charge
              is applicable for every delivery near and outside Dhaka.
              <br />
              <br />
              See our Home Delivery and Hub Delivery Price Chart for personal
              parcel shipping charges. For enterprise logistics, contact our
              sales team. You can also call at 0910006339 for more information.
              <br />
              <br />
              Please note that delivery charges may vary depending on weight and
              location. Click on the link to know more about this and learn more
              about our price
            </p>
          )}
          <div className="AnsQue-Line" />
        </div>
      </div>
    </div>
  );
}
