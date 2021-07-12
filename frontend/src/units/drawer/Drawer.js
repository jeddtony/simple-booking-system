import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './drawer.css';
import { Layout, Menu, message, Alert, Avatar } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  SettingOutlined,
  UnorderedListOutlined,
  LoadingOutlined,
  GroupOutlined ,
  InsertRowBelowOutlined,
  PhoneOutlined,
  UserDeleteOutlined,
  UsergroupAddOutlined,
  LogoutOutlined
} from '@ant-design/icons';

import { NavLink } from "react-router-dom";
import { usePageValue } from "../../context";

import {Loading} from '../../units';
import { getRole, getName, setToken } from '../../helpers/localStorageHelper';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

export default function SiderDemo (props) {
 
  const [collapse, setcollapse] = useState(false);
  const roleId = getRole();

  const logoutAction = () => {
    setToken("");
    let publicUrl = process.env.PUBLIC_URL;
              let loginPageUrl = publicUrl + '/login';
              let origin = window.location.origin;
              if (window.location.origin === origin + loginPageUrl) return;
              window.location.href = loginPageUrl;
  }

  let {
    isPageLoading,
    isPageError,
    isPageSuccess,
    messageContent,
    setMessage,
    setPageSuccess,
    setPageError
  } = usePageValue();

  const toggle = () => {
    setcollapse(!collapse)
  };

  setPageSuccess(false);
  setPageError(false);

    return (
      <Layout style={{height: "inherit"}}>
        {isPageLoading && <Loading /> }
        {isPageSuccess && message.success({ content: messageContent, key: 'success', duration: 2 })}

        <Sider trigger={null} collapsible collapsed={collapse}>
          <div className="logo" />

          <Menu theme="dark" mode="inline" defaultSelectedKeys={props.selectedKey}>
         
            <SubMenu key="sub2" icon={<GroupOutlined />} title="Booking">
              <Menu.Item key="20"> <NavLink to="/booking/create">Create Booking</NavLink></Menu.Item>
              <Menu.Item key="21"> <NavLink to="/booking">View Booking</NavLink></Menu.Item>
            </SubMenu>

            <Menu.Item key="03" icon={<UserOutlined />}>
              <NavLink to="/vehicles">Vehicles</NavLink>
            </Menu.Item>

            <Menu.Item key="04" icon={<UserOutlined />}>
              <NavLink to="/locations">Location</NavLink>
            </Menu.Item>

            <Menu.Item key="05" icon={<UserOutlined />}>
              <NavLink to="/trips">Trips</NavLink>
            </Menu.Item>

</Menu>

          </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapse ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
            <div style={{float: "right", marginRight: "20px"}}>
            <Avatar size={30} style={{backgroundColor: "blue"}}> {getName().substring(0,1)}</Avatar>
            &nbsp; &nbsp;
            <span style={{cursor: "pointer"}} title="Logout" onClick={()=> logoutAction()}>
            <Avatar size={30} style={{backgroundColor: "#f56a00"}} icon={<LogoutOutlined />}/>
            </span>
            </div>
          </Header>
          <Content
            className=""
            style={{
              margin: '24px 16px',
              padding: 24,
            //   height: "100%",
            }}
          >
           {props.children}
          </Content>

          
        </Layout>
      </Layout>
    );
  }


// ReactDOM.render(<SiderDemo />, document.getElementById('container'));