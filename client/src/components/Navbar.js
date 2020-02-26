import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { withRouter, Route, Link, Switch } from 'react-router-dom';
import Register from "../pages/Register/Register";
import Employee from '../pages/Employee/Employee';

import classNames from 'classnames/bind';
import appStyle from '../App.css'

// const cx = classNames.bind(appStyle)
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


class Navbar extends Component {
render() {
return(
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
            onClick={this.onClickSideMune}
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
              <Menu.Item key="/register"><Link className="nav-link" to="/register">Register</Link></Menu.Item>
              <Menu.Item key="2"><Link className="nav-link" to="/employee">Employee</Link></Menu.Item>
              {/* <Menu.Item key="3">Inventory</Menu.Item> */}
            </SubMenu>

          </Menu>
        </Sider>
        {/* <Layout className={cx('Content')}></Layout> */}
        <Content style={{ padding: "0 24px", minHeight: 280 }}>
            
            {/* <BrowserRouter> */}
            <div>
            <Switch>
              <Route
                exact path='/register'
                exact component={Register}
              />
              <Route
                exact path="/employee"
                exact component={Employee}
              />
              {/* <Route
                exact path="/quotation"
                exact component={Quotation}
              >
              </Route> */}
              </Switch>
              </div>
            {/* </BrowserRouter> */}
              {this.props.children}
            
        </Content>
      </Layout>
    </Content>
</Layout>

)
            }
  onClickSideMenu = ({ item, key }) => {
  if (key.includes('/')) {
    this.props.history.push(key)
  }
}
    
}

export default withRouter(Navbar);


// import React, { Component } from 'react'
// import { withRouter } from 'react-router-dom'
// import classNames from 'classnames/bind'
// import { Layout, Menu, Icon } from 'antd'
// import 'antd/dist/antd.css'
// import appStyle from '../App.css'

// const cx = classNames.bind(appStyle)

// const { SubMenu } = Menu
// const { Header, Content, Sider } = Layout

// class App extends Component {
//   render() {
//     return (
//       <Layout>
//         <Header>
//           <div className={cx('Logo')} />
//           <Menu
//             theme='dark'
//             mode='horizontal'
//             defaultSelectedKeys={['1']}
//             className={cx('Menu')}
//           >
//             <Menu.Item key='1'>Nav 1</Menu.Item>
//             <Menu.Item key='2'>Nav 2</Menu.Item>
//             <Menu.Item key='3'>Nav 3</Menu.Item>
//           </Menu>
//         </Header>
//         <Layout>
//           <Sider width={200} className={cx('Sider')}>
//             <Menu
//               mode='inline'
//               defaultSelectedKeys={['1']}
//               defaultOpenKeys={['sub1']}
//               className={cx('Sider__Menu')}
//               onClick={this.onClickSideMenu}
//             >
//               <SubMenu
//                 key='sub1'
//                 title={
//                   <span>
//                     <Icon type='user' />
//                     subnav 1
//                   </span>
//                 }
//               >
//                 <Menu.Item key='/'>option1</Menu.Item>
//                 <Menu.Item key='/menu1'>option2</Menu.Item>
//                 <Menu.Item key='3'>option3</Menu.Item>
//                 <Menu.Item key='4'>option4</Menu.Item>
//               </SubMenu>
              
              
//             </Menu>
//           </Sider>
//           <Layout className={cx('Content')}>
//             <Content>{this.props.children}</Content>
//           </Layout>
//         </Layout>
//       </Layout>
//     )
//   }

//   onClickSideMenu = ({ item, key }) => {
//     if (key.includes('/')) {
//       this.props.history.push(key)
//     }
//   }
// }

// export default withRouter(App)
