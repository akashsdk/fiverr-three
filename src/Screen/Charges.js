import React, { useState } from "react";
import "./Charges.css";

import { Table, Form, InputNumber, Button, Select } from "antd";
const columns = [
  {
    title: "Package Weight",
    dataIndex: "weight",
    key: "weight",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Same City Delivery Charge",
    dataIndex: "Charge1",
    key: "Charge1",
  },
  {
    title: "Periphery/Suburb Area Delivery Charge",
    dataIndex: "charge2",
    key: "charge2",
  },
  {
    title: "Rest of Bangladesh Delivery Charge",
    key: "charge3",
    dataIndex: "charge3",
  },
];
const data = [
  {
    key: "1",
    weight: "Standard up to 1 KG",
    Charge1: "70",
    charge2: "110",
    charge3: "130",
  },
  {
    key: "2",
    weight: "Per Additional KG",
    Charge1: "15",
    charge2: "15",
    charge3: "30",
  },
];

const { Option } = Select;

const divisions = [
  "Dhaka",
  "Chittagong",
  "Rajshahi",
  "Khulna",
  "Barisal",
  "Sylhet",
  "Rangpur",
  "Mymensingh",
];

const districts = {
  Dhaka: ["Dhaka", "Gazipur", "Narayanganj"],
  Chittagong: ["Chittagong", "Cox's Bazar", "Comilla"],
  Rajshahi: ["Rajshahi"],
  // Add districts for other divisions
};

export default function Charges() {
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const handleDivisionChange = (value) => {
    setSelectedDivision(value);
    setSelectedDistrict(""); // Reset district when division changes
  };

  const handleDistrictChange = (value) => {
    setSelectedDistrict(value);
  };

  return (
    <div className="Charges-Body">
      <p className="Charges-Text">Delivery Charges</p>

      <div className="Charges-Box">
        <div className="Charges-Left">
          <p className="Charges-Text2">Charges List</p>
          <div>
            <div className="Charges-Div">
              <p>Doorstep Delivery Service Charges</p>
            </div>
            <Table columns={columns} dataSource={data} />
            <div className="Charges-Div">
              <p>Cash-On-Delivery</p>
            </div>
            <p className="Charges-Text3">
              0.5% COD charge for the Same City delivery and 1% COD charge for
              Periphery, Suburb and Other district delivery will be applicable
              on the collected amount.
            </p>

            <div className="Charges-Div">
              <p>Doorstep Delivery Service Charges</p>
            </div>
            <p className="Charges-Text3">
              For Exchange and Partial delivery, an additional 50% of the
              delivery charge will apply to cover the inbound cost, in addition
              to one forward delivery charge.
            </p>
          </div>
        </div>

        <div className="Charges-Right">
          <p className="Charges-Text2">Exchange & Partial Delivery Service</p>
          <div className="Charges-Right-Div">
            <div className="Charges-Right-Div2">
              <div className="Charges-Right-InputDiv">
                <p className="Charges-Right-InputText">Weight ( Upto 10kg )</p>
                <input placeholder="Weight" className="Charges-Right-Input" />
              </div>

              <div className="Charges-Right-InputDiv">
                <p className="Charges-Right-InputText">
                  Selling price of the product
                </p>
                <input
                type="number"
                  placeholder="Price"
                  className="Charges-Right-Input"
                />
              </div>
            </div>
            <Select
              style={{ width: "50%", marginTop: "10px" }}
              placeholder="Select Division"
              onChange={handleDivisionChange}
            >
              {divisions.map((division) => (
                <Option key={division} value={division}>
                  {division}
                </Option>
              ))}
            </Select>

            {selectedDivision && (
              <Select
                style={{ width: "50%", marginTop: "10px" }}
                placeholder="Select District"
                onChange={handleDistrictChange}
              >
                {districts[selectedDivision].map((district) => (
                  <Option key={district} value={district}>
                    {district}
                  </Option>
                ))}
              </Select>
            )}
            <Button type="primary">Calculate price</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
