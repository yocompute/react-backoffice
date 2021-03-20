import React from "react";
import { connect } from 'react-redux';
import List from "@material-ui/core/List";
import ViewListIcon from "@material-ui/icons/ViewList";
import BrandingWatermarkIcon from "@material-ui/icons/BrandingWatermark";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import CategoryIcon from "@material-ui/icons/Category";
import NavMenuItem from "./NavMenuItem";
import {Path} from "../const";
import {hasPermission} from '../utils';

import { selectAuthRoles } from '../redux/auth/auth.selectors';

const menus = [
  {
    path: Path.Home,
    text: "Dashbord",
    icon: <DashboardIcon />,
    tip: "Dashbord",
  },
  {
    path: Path.Roles,
    text: "Manage Roles",
    icon: <PermIdentityIcon />,
    tip: "Manage Roles",
  },
  {
    path: Path.Users,
    text: "Manage Users",
    icon: <PeopleIcon />,
    tip: "Manage Users",
  },
  {
    path: Path.Brands,
    text: "Manage Brands",
    icon: <BrandingWatermarkIcon />,
    tip: "Manage Brands",
  },
  {
    path: Path.Categories,
    text: "Manage Categories",
    icon: <CategoryIcon />,
    tip: "Manage Categories",
  },
  {
    path: Path.Qrcodes,
    text: "Manage Qrcodes",
    icon: <BrandingWatermarkIcon />,
    tip: "Manage Qrcodes",
  },
  {
    path: Path.Specs,
    text: "Manage Specs",
    icon: <ViewListIcon />,
    tip: "Manage Specs",
  },
  {
    path: Path.Products,
    text: "Manage Products",
    icon: <ViewListIcon />,
    tip: "Manage Products",
  },
  {
    path: Path.Orders,
    text: "Manage Orders",
    icon: <ShoppingCartIcon />,
    tip: "Manage Orders",
  },
  {
    path: Path.Payments,
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

const NavMenuList = ({roles}) => (
  <List>
    {menus &&
      menus.length &&
      menus.map((menu) => {
        if(hasPermission(roles, menu.path)){
          return <NavMenuItem key={menu.text} data={menu} />
        }
      })
    }
  </List>
);


const mapStateToProps = (state) => ({
  roles: selectAuthRoles(state),
});

export default connect(
  mapStateToProps,
  null,
)(NavMenuList);
