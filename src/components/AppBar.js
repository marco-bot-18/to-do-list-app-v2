import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { TbNotes } from 'react-icons/tb'

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ background: 'rgb(0, 92, 230, .9)' }}>
                <Toolbar>
                    <TbNotes
                        style={{ fontWeight: 600, fontSize: 25, color: '#fff' }}
                    >
                    </TbNotes>
                    <h3>To do list App</h3>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
