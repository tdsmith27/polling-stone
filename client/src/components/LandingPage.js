import React from "react";
import { Link } from "@reach/router";
import { Card } from "antd";
import "antd/dist/antd.css";
const iVoted = require("../lib/iVoted.png");
const candidates = require("../lib/candidates.jpg");
const { Meta } = Card;

const LandingPage = props => (
  <div style={cardContainerStyle}>
    <Link to="candidates">
      <Card
        hoverable
        style={cardStyle}
        cover={<img alt="example" src={candidates} />}>
        <Meta
          title={<span style={cardTitleStyle}>Candidates</span>}
          description={
            <span style={cardDescriptionStyle}>
              Click here to get info on your 2020 presidential candidates
            </span>
          }
        />
      </Card>
    </Link>
    <Link to="voterInfo">
      <Card
        hoverable
        style={cardStyle}
        cover={<img alt="example" src={iVoted} />}>
        <Meta
          title={<span style={cardTitleStyle}>Voter Info</span>}
          description={
            <span style={cardDescriptionStyle}>
              Click here to get info on where to vote, what to bring, and if you
              are registered
            </span>
          }
        />
      </Card>
    </Link>
  </div>
);

const cardContainerStyle = {
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  height: "700px"
};

const cardDescriptionStyle = {
  textAlign: "center",
  marginTop: "15px"
};

const cardTitleStyle = {
  fontSize: "24px",
  display: "flex",
  justifyContent: "center"
};

const cardStyle = {
  width: 400,
  height: 500
};

export default LandingPage;
