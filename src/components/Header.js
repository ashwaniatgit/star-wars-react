import React from "react";
import '../App.css';
import { Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function Header() {
    const history = useHistory();

    return (
        <Box
            bgcolor="#282c34"
            p={2}
            color="#fff"
        >
            <Box 
                onClick={() => history.push(`/`)}
                display="flex" 
                justifyContent="flex-start" 
                width="100%" 
                style={{cursor: 'pointer'}}
            >
                <h3>Star Wars</h3>
            </Box>
        </Box>
    );
}

export default Header;
