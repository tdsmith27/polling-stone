import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Layout, Menu, Anchor } from 'antd';
import "antd/dist/antd.css";
import { Router, Link } from "@reach/router"

//some local styling
const { Meta } = Card;
const {
  Header, Footer, Sider, Content,
} = Layout;

const cardStyle = {
  width: "100%",
  height: "100%",
  margin: "auto"
}

const imageStyle = {
  objectFit: "scale-down",
  height: "100px",
  borderBottom: 'solid 1px lightgray',
  paddingBottom: '8px',
  paddingTop: '8px'
}

let SideBar = () => {
  return (
    <Sider width={200} style={{ background: '#fff' }}>
      <Menu mode="inline" style={{ height: '100%' }}>
        <Menu.Item key="1">
          <Link to='/what-to-bring'>
            What to Bring
            </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to='how-and-where'>
            Where and How to Vote
            </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to='am-i-registered'>
            Am I Registered?
            </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default SideBar