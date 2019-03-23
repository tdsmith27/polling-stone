import React from "react";
import { Link } from "@reach/router";
import { Card } from "antd";
import "antd/dist/antd.css";
import "./LandingPage.css";
const polls = require("../lib/polls.jpg");
const voting = require("../lib/voting.jpg");
const { Meta } = Card;

const LandingPage = props => (
  <div className="card-container">
    <Link to="candidates">
      <Card
        hoverable
        style={{ width: 400, height: 500 }}
        cover={<img alt="example" src={voting} />}>
        <Meta
          title="Candidates"
          description="Click here to get info on your 2020 presidential candidates"
        />
      </Card>
    </Link>
    <Link to="voterInfo">
      <Card
        hoverable
        style={{ width: 400, height: 500 }}
        cover={<img alt="example" src={polls} />}>
        <Meta
          title="Voter Info"
          description="Click here to get info on where to vote, what to bring, and if you are registered"
        />
      </Card>
    </Link>
  </div>
);

export default LandingPage;
