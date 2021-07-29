import React from "react";
import { Box, Button, Input } from '@material-ui/core';

function AddMovies(props) {
    const { isActive, handleClose, handleSave } = props;
    const [title, SetTitle] = React.useState('')
    const [director, SetDirector] = React.useState('')
    const [producer, SetProducer] = React.useState('')
    const [release, SetRelease] = React.useState('')

    const saveMovie = () => {
        const payload = {
            title,  
            director,
            producer,
            release_date: release
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
                    <p>Title</p>
                    <Input name="title" onChange={(e) => SetTitle(e.target.value)}></Input>
                </Box>
                <Box>
                    <p>Director</p>
                    <Input name="director" onChange={(e) => SetDirector(e.target.value)}></Input>
                </Box>
                <Box>
                    <p>Producer</p>
                    <Input name="producer" onChange={(e) => SetProducer(e.target.value)}></Input>
                </Box>
                <Box>
                    <p>Release Date</p>
                    <Input name="release_date" onChange={(e) => SetRelease(e.target.value)}></Input>
                </Box>
            </Box>
            <Box mt={2}>
                <Button 
                    onClick={saveMovie}
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

export default AddMovies;
