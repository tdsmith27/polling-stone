import React from "react";
import { Card, Layout } from "antd";
import { Router, Link } from "@reach/router";
import SideBar from "./SideBar";
import RegCheckForm from "./regCheckForm";
import VoterId from "./voterId";
import PollMap from "./PollMap";
import "antd/dist/antd.css";
import "./LandingPage.css";

const { Meta } = Card;
const { Content } = Layout;
const polls = require("../lib/polls.jpg");
const voting = require("../lib/voting.jpg");
const registration = require("../lib/registration.jpeg");

let VoterInfoDetail = () => {
  return (
    <Layout>
      <SideBar />
      <Content style={{ height: "100vh", backgroundColor: "#ededed" }}>
        <Router primary={false}>
          <VoterInfo path="/" />
          <VoterId path="what-to-bring" />
          <PollLocations path="how-and-where" />
          <RegCheckForm path="am-i-registered" />
        </Router>
      </Content>
    </Layout>
  );
};

let VoterInfo = () => {
  return (
    <>
      <div className="card-container">
        <Link to={"what-to-bring"}>
          <Card
            hoverable
            className="info-card"
            cover={<img alt="voting-requirements" src={voting} />}>
            <Meta
              title="Voting Requirements"
              description="Find out what you need to bring with you on voting day"
            />
          </Card>
        </Link>

        <Link to="how-and-where">
          <Card
            hoverable
            className="info-card"
            cover={<img alt="polling-locations" src={polls} />}>
            <Meta
              title="Polling Locations"
              description="Find your nearest polling locations"
            />
          </Card>
        </Link>

        <Link to="am-i-registered">
          <Card
            hoverable
            className="info-card"
            cover={<img alt="register-to-vote" src={registration} />}>
            <Meta
              title="Register to Vote"
              description="Find out if you are registered to vote in 30 seconds."
            />
          </Card>
        </Link>
      </div>
    </>
  );
};

const PollLocations = () => {
  return (
    <div style={{ width: "80vw", height: "80vh" }}>
      <PollMap />
    </div>
  );
};

export default VoterInfoDetail;
