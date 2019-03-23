import React from "react";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import { Link } from "@reach/router";
const { Sider } = Layout;

let SideBar = () => {
  return (
    <Sider style={siderStyle}>
      <Menu mode="inline" style={menuStyle}>
        <Menu.Item key="1">
          <Link to="what-to-bring">What to Bring</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="how-and-where">Where and How to Vote</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="am-i-registered">Am I Registered?</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

const siderStyle = {
  background: "#fff",
  width: "200px"
};

const menuStyle = {
  height: "100%"
};

export default SideBar;
