import React from "react";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import { Router, Link } from "@reach/router";
import LandingPage from "./LandingPage";
import VoterInfoDetail from "./VoterInfoDetail.js";
import CandidateRouter from "./CandidateCards";

const { Header } = Layout;
const NotFound = () => <div>404 -- Oh no, something broke!<img src='http://66.media.tumblr.com/f4f3553d1bbef33713b3af38d3598436/tumblr_mnu1bxAXC11rf5vsao1_500.gif' alt="penguin-falling" /></div>

const MainRoutes = props => (
  <>
    <Router primary={false}>
      <LandingPage path="/" />
      <CandidateRouter path="candidates/*" />
      <VoterInfoDetail path="voterInfo/*" />
      <NotFound default={true} />
    </Router>
  </>
);

const Head = props => (
  <>
    <Header test-id='header' className="header" >
      <Menu
        theme="dark"
        mode="horizontal"
        selectable={false}
        style={menuStyle}
      >
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="candidates">Candidates</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="voterInfo">Voter Info</Link>
        </Menu.Item>
      </Menu>
    </Header>
  </>
);


const menuStyle = {
  lineHeight: '64px'
};

export { Head, MainRoutes };
