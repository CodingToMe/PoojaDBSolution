
// import React, { useState } from 'react';
// import {
//   DesktopOutlined,
//   FileOutlined,
//   PieChartOutlined,
//   TeamOutlined,
//   UserOutlined,
//   MenuUnfoldOutlined,
//   MenuFoldOutlined 
// } from '@ant-design/icons';
// import { Breadcrumb, Layout, Menu, theme,Button } from 'antd';
// // import { Link } from 'react-router-dom';
// import { Link, Routes, Route } from 'react-router-dom';
// import Navbar from '../../comman/header/Navbar';
// import Category from '../category/Category';

// const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;

// function getItem(label, key, icon, path, children) {
//   return {
//     key,
//     icon,
//     path,
//     children,
//     label,
//   };
// }

// const items = [
//   getItem('Add Category', '1', <PieChartOutlined />, '/adminHome/dashboard/AddCategory'),
//   getItem('Option 2', '2', <DesktopOutlined />, '/option2'),
//   getItem('User', 'sub1', <UserOutlined />, null, [
//     getItem('Tom', '3', null, '/user/tom'),
//     getItem('Bill', '4', null, '/user/bill'),
//     getItem('Alex', '5', null, '/user/alex'),
//   ]),
//   getItem('Team', 'sub2', <TeamOutlined />, null, [
//     getItem('Team 1', '6', null, '/team/1'),
//     getItem('Team 2', '8', null, '/team/2'),
//   ]),
//   getItem('Files', '9', <FileOutlined />, '/files'),
// ];

// const Sidebar = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();

//   return (
//     <Layout hasSider>
//       <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
//       style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }}
//       >

//         <div className="demo-logo-vertical text-white pt-3 pb-3" style={{fontSize:"20px"}}>POOJA DB Solution</div>
//         <Menu theme="dark" defaultSelectedKeys={['2']} mode="inline">
//           {items.map((item) => {
//             if (item.children) {
//               return (
//                 <SubMenu key={item.key} icon={item.icon} title={item.label}>
//                   {item.children.map((child) => (
//                     <Menu.Item key={child.key}>
//                       <Link to={child.path}>{child.label}</Link>
//                     </Menu.Item>
//                   ))}
//                 </SubMenu>
//               );
//             } else {
//               return (
//                 <Menu.Item key={item.key} icon={item.icon}>
//                   <Link to={item.path}>{item.label}</Link>
//                 </Menu.Item>
//               );
//             }
//           })}
//         </Menu>
        
//       </Sider>
//       <Layout>
        
//         {/* <Navbar></Navbar> */}
//       <Header
//           style={{
//             padding: 0,
//             background: colorBgContainer,
//           }}
//         >
//           <Button
//             type="text"
//             icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//             onClick={() => setCollapsed(!collapsed)}
//             style={{
//               fontSize: '16px',
//               width: 64,
//               height: 64,
//             }}
//           />
//         </Header>
        
//         <Content style={{ margin: '16px 16px' }}>
//         <Routes>
//             <Route path="/adminHome/dashboard/AddCategory" component={<Category/>} />
//         </Routes>
//           {/* <Breadcrumb style={{ margin: '16px 0' }}>
//             <Breadcrumb.Item>User</Breadcrumb.Item>
//             <Breadcrumb.Item>Bill</Breadcrumb.Item>
//           </Breadcrumb> */}
//           {/* <Category></Category> */}
//         </Content>
//         <Footer style={{ textAlign: 'center' }}>
//           Ant Design ©{new Date().getFullYear()} Created by Ant UED
//         </Footer>
//       </Layout>
//     </Layout>
//   );
// };

// export default Sidebar;

// import React, { useState } from 'react';
// import {
//   DesktopOutlined,
//   FileOutlined,
//   PieChartOutlined,
//   TeamOutlined,
//   UserOutlined,
//   MenuUnfoldOutlined,
//   MenuFoldOutlined 
// } from '@ant-design/icons';
// import { Layout, Menu, theme, Button } from 'antd';
// import { Link, Route } from 'react-router-dom';
// import Navbar from '../../comman/header/Navbar';
// import Category from '../category/Category';

// const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;

// function getItem(label, key, icon, path, children) {
//   return {
//     key,
//     icon,
//     path,
//     children,
//     label,
//   };
// }

// const items = [
//   getItem('Add Category', '1', <PieChartOutlined />, '/adminHome/dashboard/AddCategory'),
//   getItem('Option 2', '2', <DesktopOutlined />, '/option2'),
//   getItem('User', 'sub1', <UserOutlined />, null, [
//     getItem('Tom', '3', null, '/user/tom'),
//     getItem('Bill', '4', null, '/user/bill'),
//     getItem('Alex', '5', null, '/user/alex'),
//   ]),
//   getItem('Team', 'sub2', <TeamOutlined />, null, [
//     getItem('Team 1', '6', null, '/team/1'),
//     getItem('Team 2', '8', null, '/team/2'),
//   ]),
//   getItem('Files', '9', <FileOutlined />, '/files'),
// ];

// const Sidebar = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();

//   return (
//     <Layout hasSider>
//       <Sider
//         collapsible
//         collapsed={collapsed}
//         onCollapse={(value) => setCollapsed(value)}
//         style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }}
//       >
//         <div className="demo-logo-vertical text-white pt-3 pb-3" style={{fontSize:"20px"}}>POOJA DB Solution</div>
//         <Menu theme="dark" defaultSelectedKeys={['2']} mode="inline">
//           {items.map((item) => {
//             if (item.children) {
//               return (
//                 <SubMenu key={item.key} icon={item.icon} title={item.label}>
//                   {item.children.map((child) => (
//                     <Menu.Item key={child.key}>
//                       <Link to={child.path}>{child.label}</Link>
//                     </Menu.Item>
//                   ))}
//                 </SubMenu>
//               );
//             } else {
//               return (
//                 <Menu.Item key={item.key} icon={item.icon}>
//                   <Link to={item.path}>{item.label}</Link>
//                 </Menu.Item>
//               );
//             }
//           })}
//         </Menu>
//       </Sider>
//       <Layout>
//         <Header
//           style={{
//             padding: 0,
//             background: colorBgContainer,
//           }}
//         >
//           <Button
//             type="text"
//             icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//             onClick={() => setCollapsed(!collapsed)}
//             style={{
//               fontSize: '16px',
//               width: 64,
//               height: 64,
//             }}
//           />
//         </Header>
//         <Content style={{ margin: '16px 16px' }}>
//           <Route path="/adminHome/dashboard/AddCategory" element={<Category />} />
//         </Content>
//         <Footer style={{ textAlign: 'center' }}>
//           Ant Design ©{new Date().getFullYear()} Created by Ant UED
//         </Footer>
//       </Layout>
//     </Layout>
//   );
// };

// export default Sidebar;

import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined 
} from '@ant-design/icons';
import { Layout, Menu, theme, Button } from 'antd';
import { Link, Routes, Route } from 'react-router-dom'; // Import Routes instead of Route
import Navbar from '../../comman/header/Navbar';
import Category from '../category/Category';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function getItem(label, key, icon, path, children) {
  return {
    key,
    icon,
    path,
    children,
    label,
  };
}

const items = [
  getItem('Add Category', '1', <PieChartOutlined />, '/adminHome/AddCategory'),
  getItem('Option 2', '2', <DesktopOutlined />, '/option2'),
  getItem('User', 'sub1', <UserOutlined />, null, [
    getItem('Tom', '3', null, '/user/tom'),
    getItem('Bill', '4', null, '/user/bill'),
    getItem('Alex', '5', null, '/user/alex'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, null, [
    getItem('Team 1', '6', null, '/team/1'),
    getItem('Team 2', '8', null, '/team/2'),
  ]),
  getItem('Files', '9', <FileOutlined />, '/files'),
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const setKeyItem =(key)=>{
    console.log(key,"keyitem")
  }

  return (
    <Layout hasSider>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }}
      >
        <div className="demo-logo-vertical text-white pt-3 pb-3" style={{fontSize:"20px"}}>POOJA DB Solution</div>
        <Menu theme="dark" defaultSelectedKeys={['2']} mode="inline">
          {items.map((item) => {
            if (item.children) {
              return (
                <SubMenu key={item.key} icon={item.icon} title={item.label}>
                  {item.children.map((child) => (
                    <Menu.Item key={child.key}>
                      <Link to={child.path}>{child.label}</Link>
                    </Menu.Item>
                  ))}
                </SubMenu>
              );
            } else {
              return (
                <Menu.Item key={item.key} icon={item.icon}>
                  <Link to={item.path} onClick={()=>setKeyItem(item.key)}>{item.label}</Link>
                </Menu.Item>
              );
            }
          })}
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content style={{ margin: '16px 16px' }}>
        <Routes>
            {items.map((item) => (
              <Route key={item.key} path={item.path} element={item.component} />
            ))}
          </Routes>

        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
