import React, { useEffect } from "react";
import '../App.css';
import { Box, makeStyles, Input, Button } from '@material-ui/core';
import { getData } from '../services/api';
import { filter } from '../services/utils';
import AddPlanets from "../components/AddPlanets";
import localStore from '../services/storage';

const useStyles = makeStyles((theme) => ({
    planetsBox: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        flexShrink: 0,
    },
    items: {
        width: 280,
    }
}));

function Planets() {
    const classes = useStyles();
    const [isEditable, setEditable] = React.useState(false);
    const [planets, setPlanets] = React.useState(null);
    const [filteredPlanets, setFilteresPlanets] = React.useState(null);

    const handleChange = (e) => {
        setFilteresPlanets(filter(planets, 'name', e.target.value));
    }

    const handleSaveData = (payload) => {
        setPlanets((prev) => {
            const newData = [...prev, payload];
            localStore.write('planets', newData);
            return newData
        });
        setFilteresPlanets((prev) => [...prev, payload]);
        setEditable(false);
    }

    useEffect(() => {
        const getPlanets = async () => {
            let newPlanets = localStore.read('planets') || [];
            if(!newPlanets.length) {
                const data = await getData('planets');
                newPlanets = data.results
                localStore.write('planets', newPlanets);
            }
            setFilteresPlanets(newPlanets);
            setPlanets(newPlanets);
        };
        
        getPlanets();
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
                <h3>Planets</h3>
                <Box>
                    <span>Search: </span><Input type="search" onChange={handleChange} style={{background: '#f5f5f5', borderRadius: 5, padding: 3, marginRight: 20}}></Input>
                    <Button onClick={() => setEditable(true)} variant="contained" color="primary">
                        Add new +
                    </Button>
                </Box>
            </Box>
            <AddPlanets 
                isActive={isEditable} 
                handleClose={(value) => setEditable(false)}
                handleSave={handleSaveData}
            ></AddPlanets>
            <Box className={classes.planetsBox}>
                { filteredPlanets && filteredPlanets.map((planet) => {
                    return <Box key={planet.url} className={`${classes.items} digital-box`}>
                        <i>{planet.name}</i>
                        <p>Climate: {planet.climate}</p>
                        <p>Gravity: {planet.gravity}</p>
                        <p>Population: {planet.population}</p>
                    </Box>
                })}
            </Box>
        </Box>
    );
}

export default Planets;
