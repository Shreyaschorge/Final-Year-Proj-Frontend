import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Menu } from "antd";
import { HomeFilled, SettingFilled, FileTextFilled  } from "@ant-design/icons";

const NavItems = [
  {
    name: "Overview",
    path: "/overview",
    logo: <HomeFilled />,
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    logo: <HomeFilled />,
  },
  {
    name: "Upload",
    path: "/upload",
    logo: <FileTextFilled />,
  },
  {
    name: "Annotate",
    path: "/annotate",
    logo: <SettingFilled />,
  },
  {
    name: "Conntributions",
    path: "/contributions",
    logo: <SettingFilled />,
  },
 
];

const Navbar = () => {
  const match = useRouteMatch();
  return (
    <Menu
      defaultSelectedKeys={["/"]}
      mode='inline'
      theme='dark'
      selectedKeys={[match.url]}
    >
      {NavItems &&
        NavItems.map((navItem) => (
          <Menu.Item key={navItem.path} icon={navItem.logo}>
            <Link to={navItem.path}>{navItem.name}</Link>
          </Menu.Item>
        ))}
    </Menu>
  );
};
export default Navbar;
