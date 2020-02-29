import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { languageOptions } from '../../Languages'
import {  LanguageContext } from '../../Container'


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    const languageContext = useContext(LanguageContext)

    const handleLanguageChange = (event) => {
        const selectedLanguage = languageOptions.find(item => item.id === event.target.value);
        // set selected language by calling context method
        languageContext.setLanguage(selectedLanguage);
    };
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit">
                        <MenuIcon />
                    </IconButton>
                    <select
                        onChange={handleLanguageChange}
                        value={languageContext.language.id}
                    >
                        {languageOptions.map(item => (
                            <option
                                key={item.id}
                                value={item.id}
                            >
                                {item.text}
                            </option>
                        ))}
                    </select>
                </Toolbar>
            </AppBar>
        </div>
    );
}