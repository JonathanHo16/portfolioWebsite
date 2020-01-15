import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import linkedInIcon from './logos/linkedinIcon_white.png';
import gitIcon from './logos/gitIcon_white.png';
import emailIcon from './logos/emailIcon_white.png';
import MenuIcon from '@material-ui/icons/MenuRounded';
import IconButton from "@material-ui/core/IconButton";
import {Icon} from "@material-ui/core";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    button: {
        width: 50,
        height: 50,
        background:"white",
        position: "fixed",
    }
});

export default function SwipeableTemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };
    const getIconFromIndex = function (index) {
        switch (index) {
            case 0:{
                return linkedInIcon;

            }
            case 1 : {
                return gitIcon;
            }
            case 2: {
                return emailIcon
            }
        }
    };

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                {['About Me', 'ToolBox', 'Work Experience'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['LinkedIn', 'Github', 'Email'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{getIconFromIndex(index)}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            <IconButton onClick={toggleDrawer('left', true)} className={classes.button} ><MenuIcon/></IconButton>
            <SwipeableDrawer
                open={state.left}
                onClose={toggleDrawer('left', false)}
                onOpen={toggleDrawer('left', true)}
            >
                {sideList('left')}
            </SwipeableDrawer>

        </div>
    );
}