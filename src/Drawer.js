import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
;
import linkedInIcon from './logos/linkedinIcon_white.png';
import gitIcon from './logos/gitIcon_white.png';
import emailIcon from './logos/emailIcon_white.png';
import MenuIcon from '@material-ui/icons/MenuRounded';

import Fab from '@material-ui/core/Fab';

import resumePdf from "./resume.pdf";

const useStyles = makeStyles({
    list: {
        width: 250,
        color: '#7fffd4',
        backgroundColor: '#282c34',
    },
    fullList: {
        width: 'auto',
    },
    button: {
        right: 20,
        bottom: 20,
        backgroundColor: "#000000",
        position: "fixed",

    },
    fabButton: {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
        backgroundColor: '#7fffd4',
        color: '#282c34',
    },
    drawer: {
        color: '#282c34',
    },
    paper: {
        background: '#282c34',
    },


});


export default function SwipeableTemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    function scrollToRef(section) {
        let scrollToY;
        let header = document.getElementById('myHeader');
        console.log(section);
        switch(section) {
            case 'Work Experience':
                scrollToY = 1650;
                //scrollToY = ReactDom.findDOMNode("workSection");
                break;
            case 'About Me':
                // scrollToY = document.getElementById('about').offsetTop - (window.pageYOffset > document.getElementById('myHeader').offsetTop ? 0 : 50);
                scrollToY =  0;
                break;
            case 'ToolBox':
                scrollToY = 1050;
                //scrollToY = document.getElementById('toolBox').offsetTop - 30 ;
                break;
            default:
                scrollToY = 0;
                break;
        }
        console.log(scrollToY);
        window.scrollTo({left: 0, top: scrollToY, behavior: 'smooth'});
    }
    function openPage(index) {
        console.log(index);
        switch(index) {
            case 0:{
                window.open('https://www.linkedin.com/in/jonathanbho/', '_blank');
                break;
            }

            case 1: {
                window.open('https://github.com/JonathanHo16', '_blank');
                break;
            }

            case 2: {
                window.location.href = "mailto:jbho@uwaterloo.ca?subject=Hey I saw your website and I would like to chat &cc=jonathanbho@outlook.com";
                break;
            }
            case 3 :
            {
                window.open(resumePdf, '_blank');
                break;
            }
            default:
                return;
        }

    }
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
                    <ListItem>
                        <button className='jumpButton' onClick={() => scrollToRef(text)}>{text}</button>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['LinkedIn', 'Github', 'Email'].map((text, index) => (
                    <ListItem>
                        <button className='jumpButton' onClick={() => openPage(index)}>{text}</button>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </div>
    );

    return (
        <div classes={{paper: classes.paper }}>
            <SwipeableDrawer
                open={state.left}
                onClose={toggleDrawer('left', false)}
                onOpen={toggleDrawer('left', true)}
                className={classes.drawer}
                classes={{ paper: classes.paper }}
            >
                {sideList('left')}
            </SwipeableDrawer>
            <Fab className={classes.fabButton} onClick={toggleDrawer('left', true)}>
                <MenuIcon/>
            </Fab>

        </div>
    );
}