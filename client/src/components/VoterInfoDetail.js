import React, { useState, useEffect } from "react";
import { Row, Col, Card, Layout, Menu, Anchor } from "antd";
import "antd/dist/antd.css";
import { Router, Link } from "@reach/router";
import SideBar from "./SideBar";
import RegCheckForm from './RegCheckForm'
import VoterId from './VoterID'
import PollMap from './PollMap'


const { Meta } = Card;
const { Header, Footer, Sider, Content } = Layout;

const cardStyle = {
  width: "100%",
  height: "100%",
  margin: "auto"
};

const imageStyle = {
  objectFit: "scale-down",
  height: "100px",
  borderBottom: "solid 1px lightgray",
  paddingBottom: "8px",
  paddingTop: "8px"
};

let VoterInfoDetail = () => {
  return (
    <Layout>
      <Layout>
        < SideBar />
        <Content style={{ height: "99vh" }}>
          <NavRoutes />
        </Content>
      </Layout>
    </Layout>
  );
};

//side bar implementation
let NavRoutes = () => {
  return (
    <Router primary={false}>
      <VoterInfo path="/" />
      <WhatToBring path="what-to-bring" />
      <HowAndWhere path="how-and-where" />
      <Register path="am-i-registered" />
    </Router>
  );
};

// /home render path
let VoterInfo = () => {
  return (
    <>
      <Row
        gutter={32}
        style={{ height: "1fr", marginBottom: "10%", marginTop: "10%" }}>
        <Col span={8}>
          <WhatToBringCard bordered={false} />
        </Col>
        <Col span={8}>
          <HowAndWhereCard bordered={false} />
        </Col>
        <Col span={8}>
          <RegisterCard bordered={false} />
        </Col>
      </Row>
    </>
  );
};

//what to bring card
const WhatToBringCard = () => {
  return (
    <>
      <div style={{ marginLeft: "22%", marginRight: "22%" }}>
        <Link to={"what-to-bring"}>
          <Card
            hoverable
            style={cardStyle}
            cover={
              <img
                style={imageStyle}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1F0y8WGcS29t6PQVfkmLwmLgsPEV75XYYoHEurNNQawnKIUas"
              />
            }>
            <Meta description="What to bring on Voting Day" />
          </Card>
        </Link>
      </div>
    </>
  );
};

//how and where card
const HowAndWhereCard = () => {
  return (
    <>
      <div style={{ marginLeft: "22%", marginRight: "22%" }}>
        <Link to="how-and-where">
          <Card
            hoverable
            style={cardStyle}
            cover={
              <img
                style={imageStyle}
                width="100%"
                height="100%"
                alt="example"
                src="https://northendwaterfront.com/wp-content/uploads/2018/10/unnamed-7.jpg"
              />
            }>
            <Meta description="How and Where to vote" />
          </Card>
        </Link>
      </div>
    </>
  );
};

//register card
const RegisterCard = () => {
  return (
    <>
      <div style={{ marginLeft: "22%", marginRight: "22%" }}>
        <Link to="am-i-registered">
          <Card
            hoverable
            style={cardStyle}
            cover={
              <img
                style={imageStyle}
                width="100%"
                height="100%"
                alt="example"
                src="http://p1cdn4static.civiclive.com/UserFiles/Servers/Server_178285/Image/Am%20I%20registered%20to%20vote-.jpg"
              />
            }>
            <Meta description="Register to Vote" />
          </Card>
        </Link>
      </div>
    </>
  );
};

// end-route placeholders
const WhatToBring = () => {
  return (
    <Content>
      <div id="what-to-bring">
        <VoterId />
      </div>
    </Content>
  );
};

const HowAndWhere = () => {
  return (
    <Content>
      <div id="how-and-where-placeholder" style={{ width: "80vw", height: '80vh' }}>
        <PollMap />
      </div>
    </Content>
  );
};

const Register = () => {
  return (
    <Content>
      <div id="register-placeholder">
        <RegCheckForm />>
      </div>
    </Content>
  );
};

export default VoterInfoDetail;
