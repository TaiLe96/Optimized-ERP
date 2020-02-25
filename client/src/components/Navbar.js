import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Register from "./Register";
import Employee from './Employee';


const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

function Navbar(){

return(
<BrowserRouter>
<Layout>
    <Content style={{ padding: "0 50px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link to="/HR">Human Resource</Link></Breadcrumb.Item>
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
                  Human Resource
                </span>
              }
            >
              <Menu.Item key="1"><Link className="nav-link" to="/register">Register</Link></Menu.Item>
              <Menu.Item key="2"><Link className="nav-link" to="/employee">Employee</Link></Menu.Item>
              {/* <Menu.Item key="3">Inventory</Menu.Item> */}
              
            </SubMenu>
          </Menu>
         
        </Sider>
        <Content style={{ padding: "0 24px", minHeight: 280 }}>
            {/* <Register/> */}
            {/* <Employee/> */}
            
            
            <BrowserRouter>
            <Switch>
              <Route
                exact path='/register'
                exact component={Register}
              />
              {/* <Register/> */}
              <Route
                exact path="/employee"
                exact component={Employee}
              />
              {/* <Employee/> */}
              </Switch>
            </BrowserRouter>

            
        </Content>
      </Layout>
    </Content>
</Layout>
</BrowserRouter>
    )
}

export default Navbar;
