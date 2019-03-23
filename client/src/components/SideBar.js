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
          <Link to="what-to-bring" style={textStyle}>What to Bring</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="how-and-where" style={textStyle}>Where and How to Vote</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="am-i-registered" style={textStyle}>Am I Registered?</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

const siderStyle = {
  backgroundColor: "#DEE5E5",
  width: "200px"
};

const menuStyle = {
  height: "100%",
  backgroundColor: "#DEE5E5",
};

const textStyle = {
  color: '#000'
}

export default SideBar;
