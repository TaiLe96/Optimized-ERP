import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
<<<<<<< HEAD
import Register from "./Register";
import Employee from './Employee';
=======
import Register from './Register';
// import Employee from "./Employee";
>>>>>>> e0f3a75174ff1535f86d85c1adf234e0d8693995

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

<<<<<<< HEAD
function Navbar(){

return(
<Router>
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
            <Router>
              <Route
                path='/register'
                render={() => <Register />}
              />
              <Route
                path="/employee"
                render={() => <Employee />}
              />
            </Router>
        </Content>
      </Layout>
    </Content>
</Layout>
</Router>
    )
=======
function Navbar() {
  return (
    <Layout>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Human Resource</Breadcrumb.Item>
          <Breadcrumb.Item>Register</Breadcrumb.Item>
        </Breadcrumb>
        <Layout style={{ padding: '24px 0', background: '#fff' }}>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode='inline'
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
            >
              <SubMenu
                key='sub1'
                title={
                  <span>
                    <Icon type='user' />
                    Human Resource
                  </span>
                }
              >
                <Menu.Item key='1'>Register</Menu.Item>
                <Menu.Item key='2'>Employee</Menu.Item>
                <Menu.Item key='3'>Inventory</Menu.Item>
              </SubMenu>
            </Menu>
            {/* <Route path="/register" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} /> */}
            <Router>
              <Route
                path='/register'
                render={() => <Register title={this.state.about.title} />}
              />
              {/* <Route path="/employee" render={() => <Employee title={this.state.about.title} />} /> */}
            </Router>
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <Register />
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
>>>>>>> e0f3a75174ff1535f86d85c1adf234e0d8693995
}

export default Navbar;
