import React from 'react';
import { Layout, Menu } from 'antd';
import "antd/dist/antd.css";
import { Router, Link } from "@reach/router"

// import Home from './pathToHome'
// import VoterInfo from './pathToVoterInfo'
// import CandidateList from './pathToCandidate'

const { Header } = Layout;

const Home = () => <div>Home placeholder</div>
const Candidates = () => <div>Candidates placeholder</div>
const VoterInfo = () => <div>Voter Info placeholder</div>

const HeadRoutes = (props) => (
  <>
    <Router style={{ color: 'blue' }}>
      <Home path="/" />
      <Candidates path="candidates/*" />
      <VoterInfo path="voter-info/*" />
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
          <Link to="/candidates/*">
            Candidates
        </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/voter-info/*">
            Voter Info
        </Link>
        </Menu.Item>
      </Menu>
    </Header>
  </>
)

export { Head, HeadRoutes };