import {Stack, Alert, AlertTitle, Box, Button, Modal} from '@mui/material'
import {useState, useContext} from 'react'
import AuthContextProvider from '../auth';
import * as React from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
export default function MUIErrorModal() {
    const { auth } = useContext(AuthContextProvider);
    
    function handleCloseModal() {
        auth.closeErrorModal();
    }

    return (
        <div>
            <div id = "error-modal">
                <Modal
                    open={auth.errorMessage !== null}
                >
                    <Box sx={style}>
                        <Stack spacing={2}>
                            <Alert variant="outlined" severity='error'>{auth.errorMessage}</Alert>
                        </Stack>
                        <Button variant="contained" onClick={handleCloseModal}>Close alert</Button>
                    </Box>
                </Modal>
            </div>
        </div>        
    )
    
}

