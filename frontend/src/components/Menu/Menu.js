import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import Collapse from '@material-ui/core/Collapse'

import IconExpandLess from '@material-ui/icons/ExpandLess'
import IconExpandMore from '@material-ui/icons/ExpandMore'
import IconDashboard from '@material-ui/icons/Dashboard'
import IconShoppingCart from '@material-ui/icons/ShoppingCart'
import IconPeople from '@material-ui/icons/People'
import IconBarChart from '@material-ui/icons/BarChart'
import IconLibraryBooks from '@material-ui/icons/LibraryBooks'
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useAuth0 } from '../../react-auth0-spa';

const Menu = ({ open, ...props }) => {

  const classes = useStyles()
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;
  const { loading, user } = useAuth0();

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <List component="nav" className={classes.appMenu} disablePadding>
        {user.email === "futebol.machado@gmail.com" && (
          <div>
            <Link to="/dashboard">

              <ListItem button className={classes.menuItem}>
                <ListItemIcon className={classes.menuItemIcon}>
                  <IconDashboard />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
            </Link>
            <Link to="/charts">
              <ListItem button className={classes.menuItem}>
                <ListItemIcon className={classes.menuItemIcon}>
                  <IconBarChart />
                </ListItemIcon>
                <ListItemText primary="Gráficos" />
              </ListItem>
            </Link>
          </div>
        )}
        {user.email != "futebol.machado@gmail.com" && (
          <div>
            <Link to="/charts">
              <ListItem button className={classes.menuItem}>
                <ListItemIcon className={classes.menuItemIcon}>
                  <IconBarChart />
                </ListItemIcon>
                <ListItemText primary="Gráficos" />
              </ListItem>
            </Link>
            <Link to="/forms">
              <ListItem button className={classes.menuItem} >
                <ListItemIcon className={classes.menuItemIcon} >
                  <ViewHeadlineIcon />
                </ListItemIcon>
                <ListItemText primary="Forms" />
              </ListItem>
            </Link>
          </div>
        )}

      </List>

    </StyledMenu>
  )
}

const drawerWidth = 240

const useStyles = makeStyles(theme =>
  createStyles({
    appMenu: {
      width: '100%',
    },
    navList: {
      width: drawerWidth,
    },
    menuItem: {
      width: drawerWidth,
    },
    menuItemIcon: {
      color: '#97c05c',
    },
  }),
)

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;