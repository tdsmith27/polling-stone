import React from "react";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import { Link } from "@reach/router";

//some local styling
const { Sider } = Layout;

let SideBar = () => {
  return (
    <Sider width={200} style={{ background: "#fff" }}>
      <Menu mode="inline" style={{ height: "100%" }}>
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

export default SideBar;
