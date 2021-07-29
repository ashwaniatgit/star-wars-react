import React from "react";
import { Box, Button, Input } from '@material-ui/core';

function AddPlanets(props) {
    const { isActive, handleClose, handleSave } = props;
    const [name, SetName] = React.useState('')
    const [climate, SetClimate] = React.useState('')
    const [gravity, SetGravity] = React.useState('')
    const [population, SetPopulation] = React.useState('')

    const savePlanet = () => {
        const payload = {
            name,  
            climate,
            gravity,
            population
        }
        handleSave(payload);
    }


    return (
        isActive ? <Box
            padding={4}
            border="1px solid yellow"
            width="100%"
            maxWidth={1000}
        >
            <Box 
                display="flex" 
                justifyContent="space-between"
            >
                <Box>
                    <p>Name</p>
                    <Input name="title" onChange={(e) => SetName(e.target.value)}></Input>
                </Box>
                <Box>
                    <p>Climate</p>
                    <Input name="climate" onChange={(e) => SetClimate(e.target.value)}></Input>
                </Box>
                <Box>
                    <p>Gravity</p>
                    <Input name="gravity" onChange={(e) => SetGravity(e.target.value)}></Input>
                </Box>
                <Box>
                    <p>Population</p>
                    <Input name="population" onChange={(e) => SetPopulation(e.target.value)}></Input>
                </Box>
            </Box>
            <Box mt={2}>
                <Button 
                    onClick={savePlanet}
                    size="small"
                    color="secondary"
                    variant="outlined" 
                    style={{marginRight: 8}}
                >save</Button>
                <Button 
                    onClick={() => handleClose(false)}
                    size="small"
                    color="secondary"
                    variant="outlined" 
                >cancel</Button>
            </Box>
        </Box> : <></>

    );
}

export default AddPlanets;
