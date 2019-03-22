import React from "react";
import { Link } from "@reach/router";
import { Card } from "antd";
import "antd/dist/antd.css";
const polls = require("../lib/polls.jpg");
const voting = require("../lib/voting.jpg");
const { Meta } = Card;

const LandingPage = props => (
  <div style={landingPageDivStyle}>
    <Link to="candidates">
      <Card
        hoverable
        bordered
        style={candidatesCardStyle} 
        cover={<img alt="example" src={voting} />}>
        <Meta
          title={<span style={cardTitleStyle}>Candidates</span>}
          description="Click here to get info on your 2020 presidential candidates"
          />
      </Card>
    </Link>
    <Link to="voterInfo">
      <Card
        hoverable
        style={voterInfoCardStyle}
        cover={<img alt="example" src={polls} />}>
        <Meta
          title={<span style={cardTitleStyle}>Voter Info</span>}
          description="Click here to get info on where to vote, what to bring, and if you are registered"
          />
      </Card>
    </Link>
  </div>
);

const cardTitleStyle = {
  fontSize: "24px",
  display: "flex",
  justifyContent: "center"
};

const voterInfoCardStyle = {
  width: 400, 
  height: 500, 
  color: "red"
};

const candidatesCardStyle = {
  width: 400, 
  height: 500
};

const landingPageDivStyle = {
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  height: "800px"
};

export default LandingPage;
