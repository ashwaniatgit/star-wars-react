import React from "react";
import logo from '../logo.svg';
import '../App.css';
import { Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function Home() {
    const history = useHistory();

    const handleClick = (path) => {
        history.push(`/${path}`);
    };

    return (
        <div className="App">
            <Box className="MainBox Main-padding">
            <img width="200" src={logo} className="App-logo" alt="logo" />
            <b>Welcome</b>
            <b>to</b>
            <h2>Star Wars</h2>
            <Box display="flex" justifyContent="center">
                <Box className="digital-box link-box" onClick={() => handleClick('movies')}>
                    <i>Movies</i>
                </Box>
                <Box className="digital-box link-box" onClick={() => handleClick('planets')}>
                    <i>Planets</i>
                </Box>
            </Box>
            </Box>
        </div>
    );
}

export default Home;
