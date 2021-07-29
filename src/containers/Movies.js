import React, { useEffect } from "react";
import localStore from '../services/storage';
import '../App.css';
import { Box, Button, Input, makeStyles } from '@material-ui/core';
import { getData } from '../services/api';
import { filter } from '../services/utils';
import AddMovies from "../components/AddMovies";

const useStyles = makeStyles((theme) => ({
    moviesBox: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        flexShrink: 0,
    },
    items: {
        width: 280,
    }
}));

function Movies() {
    const classes = useStyles();
    const [isEditable, setEditable] = React.useState(false);
    const [movies, setMovies] = React.useState(null);
    const [filteredMovies, setFilteresMovies] = React.useState(null);

    const handleChange = (e) => {
        setFilteresMovies(filter(movies, 'title', e.target.value));
    }

    const handleSaveData = (payload) => {
        setMovies((prev) => {
            const newData = [...prev, payload];
            localStore.write('movies', newData);
            return newData
        });
        setFilteresMovies((prev) => [...prev, payload]);
        setEditable(false);
    }

    useEffect(() => {
        const getMovies = async () => {
            let newMovies = localStore.read('movies') || [];
            if(!newMovies.length) {
                const data = await getData('films');
                newMovies = data.results;
                localStore.write('movies', newMovies);
            }
            setFilteresMovies(newMovies);
            setMovies(newMovies);
        };
        
        getMovies();
    }, []);

    return (
        <Box className="MainBox">
            <Box 
                display="flex" 
                justifyContent="space-between" 
                alignItems="center"
                width="100%" 
                maxWidth={1026}
            >
                <h3>Movies</h3>
                <Box>
                    <span>Search: </span><Input type="search" onChange={handleChange} style={{background: '#f5f5f5', borderRadius: 5, padding: 3, marginRight: 20}}></Input>
                    <Button onClick={() => setEditable(true)} variant="contained" color="primary">
                        Add new +
                    </Button>
                </Box>
            </Box>
            <AddMovies 
                isActive={isEditable} 
                handleClose={(value) => setEditable(false)}
                handleSave={handleSaveData}
            ></AddMovies>
            <Box className={classes.moviesBox}>
                { filteredMovies && filteredMovies.map((movie, index) => {
                    return <Box key={index} className={`${classes.items} digital-box`}>
                        <i>{movie.title}</i>
                        <p>Direcror: {movie.director}</p>
                        <p>Producer: {movie.producer}</p>
                        <p>Release Date: {movie.release_date}</p>
                    </Box>
                })}
            </Box>
        </Box>
    );
}

export default Movies;
