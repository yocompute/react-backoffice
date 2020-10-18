import React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import NavMenuItem from './NavMenuItem';

const menus = [
  {
    path: '/',
    text: 'Dashbord',
    icon: <DashboardIcon />,
    tip: 'Dashbord',
  },
  {
    path: '/users',
    text: 'Manage Users',
    icon: <PeopleIcon />,
    tip: 'Manage Users',
  },
  {
    path: '/orders',
    text: 'Manage Orders',
    icon: <ShoppingCartIcon />,
    tip: 'Manage Orders',
  },
];

const NavMenuList = () => (

  <List>
    {

      menus && menus.length &&
      menus.map(menu => (
        <NavMenuItem key={menu.text} data={menu} />
      ))
    }
  </List>
)

export default NavMenuList;
