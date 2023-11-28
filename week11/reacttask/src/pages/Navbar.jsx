import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link, Outlet } from "react-router-dom";
function Navbar() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Cards
                        </Typography>
                        <Button color="inherit"> <Link to="/">Home</Link></Button>
                        <Button color="inherit"> <Link to="/About">About</Link></Button>
                        <Button color="inherit"><Link to="/Contact">Contact</Link></Button>
                        <Button color="inherit">   <Link to="/Categories">Categories</Link></Button>
                        <Button color="inherit"><Link to="/AddCategory">AddCategory</Link></Button>
                    </Toolbar>
                </AppBar>
            </Box>

            <Outlet />
        </>
    )
}

export default Navbar