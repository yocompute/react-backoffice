import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from './Sidebar';
import Header from './Header';
import Routes from '../Routes';

const useStyles = makeStyles((theme) => ({
  page: {
    display: 'flex',
    height: '100%',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    padding: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}));

export default function Layout() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  const handleSidebarToggle = (expanded) => {
    setSidebarExpanded(expanded);
  };
  return (
    <div className={classes.page}>
      <Header
        sidebarExpanded={sidebarExpanded}
        onToggle={handleSidebarToggle}
      />

      <Sidebar
        expanded={sidebarExpanded}
        onToggle={handleSidebarToggle}
      />

      <div className={classes.content}>
        <div className={classes.appBarSpacer} />
        <div className={fixedHeightPaper}>
          <Routes />
        </div>
      </div>

    </div>
  );
}
