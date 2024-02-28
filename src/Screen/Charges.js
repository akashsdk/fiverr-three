import React from "react";
import "./Charges.css";

import { Space, Table, Tag } from "antd";
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

export default function Charges() {
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
          <div>
            ggg
          </div>
        </div>
      </div>
    </div>
  );
}
