import React from "react";
import List from "@material-ui/core/List";
import ViewListIcon from "@material-ui/icons/ViewList";
import BrandingWatermarkIcon from "@material-ui/icons/BrandingWatermark";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import CategoryIcon from "@material-ui/icons/Category";
import NavMenuItem from "./NavMenuItem";

const menus = [
  {
    path: "/",
    text: "Dashbord",
    icon: <DashboardIcon />,
    tip: "Dashbord",
  },
  {
    path: "/roles",
    text: "Manage Roles",
    icon: <PermIdentityIcon />,
    tip: "Manage Roles",
  },
  {
    path: "/users",
    text: "Manage Users",
    icon: <PeopleIcon />,
    tip: "Manage Users",
  },
  {
    path: "/brands",
    text: "Manage Brands",
    icon: <BrandingWatermarkIcon />,
    tip: "Manage Brands",
  },
  {
    path: "/categories",
    text: "Manage Categories",
    icon: <CategoryIcon />,
    tip: "Manage Categories",
  },
  {
    path: "/qrcodes",
    text: "Manage Qrcodes",
    icon: <BrandingWatermarkIcon />,
    tip: "Manage Qrcodes",
  },
  {
    path: "/specs",
    text: "Manage Specs",
    icon: <ViewListIcon />,
    tip: "Manage Specs",
  },
  {
    path: "/products",
    text: "Manage Products",
    icon: <ViewListIcon />,
    tip: "Manage Products",
  },
  {
    path: "/orders",
    text: "Manage Orders",
    icon: <ShoppingCartIcon />,
    tip: "Manage Orders",
  },
  {
    path: "/payments",
    text: "Manage Payments",
    icon: <ShoppingCartIcon />,
    tip: "Manage Payments",
  },
  // {
  //   path: '/orders',
  //   text: 'Manage Orders',
  //   icon: <ShoppingCartIcon />,
  //   tip: 'Manage Orders',
  // },
];

const NavMenuList = () => (
  <List>
    {menus &&
      menus.length &&
      menus.map((menu) => <NavMenuItem key={menu.text} data={menu} />)}
  </List>
);

export default NavMenuList;
