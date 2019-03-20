import React from 'react';
import { Layout, Menu } from 'antd';
import "antd/dist/antd.css";
import { Router, Link } from "@reach/router"
import LandingPage from "./LandingPage";
import VoterInfoDetail from './VoterInfoDetail.js';

// import CandidateList from './pathToCandidate'

const { Header } = Layout;

const Candidates = () => <div>Candidates placeholder</div>

const MainRoutes = (props) => (
  <>
    <Router primary={false}>
      <LandingPage path="/" />
      <Candidates path="candidates/*" />
      <VoterInfoDetail path="voterInfo/*" />
    </Router>
  </>
)

const Head = (props) => (
  <>
    <Header test-id='header' className="header">
      {/* <div className="logo" /> */}
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">
          <Link to="/">
            Home
        </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="candidates">
            Candidates
        </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="voterInfo">
            Voter Info
        </Link>
        </Menu.Item>
      </Menu>
    </Header>
  </>
)

export { Head, MainRoutes };