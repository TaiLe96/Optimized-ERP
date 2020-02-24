import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Register from "./Register"

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

function Navbar(){
    return(
        <Layout>
            <Content style={{ padding: "0 50px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Human Resource</Breadcrumb.Item>
        <Breadcrumb.Item>Register</Breadcrumb.Item>
      </Breadcrumb>
      <Layout style={{ padding: "24px 0", background: "#fff" }}>
        <Sider width={200} style={{ background: "#fff" }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%" }}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  subnav 1
                </span>
              }
            >
              <Menu.Item key="1">Human Resource</Menu.Item>
              <Menu.Item key="2">Sales</Menu.Item>
              <Menu.Item key="3">Inventory</Menu.Item>
            </SubMenu>
            
          </Menu>
        </Sider>
        <Content style={{ padding: "0 24px", minHeight: 280 }}>
            <Register/>
        </Content>
      </Layout>
    </Content>
        </Layout>
    )
}

export default Navbar;