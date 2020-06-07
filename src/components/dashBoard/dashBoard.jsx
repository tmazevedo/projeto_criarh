import React from 'react';
import { useAuth0 } from "../../react-auth0-spa";
//import Routes from '../../routes';
// import AppBar from '@material-ui/core/AppBar';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Divider from '@material-ui/core/Divider';
// import Drawer from '@material-ui/core/Drawer';
// import Hidden from '@material-ui/core/Hidden';
// import IconButton from '@material-ui/core/IconButton';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import MailIcon from '@material-ui/icons/Mail';
// import MenuIcon from '@material-ui/icons/Menu';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';


const DashBoard = () =>{
    const { logout, user } = useAuth0();

    return(
        <div>
          <h1>AQUI EH A DASHBOARD</h1>
        </div>
    );
}

export default DashBoard;
