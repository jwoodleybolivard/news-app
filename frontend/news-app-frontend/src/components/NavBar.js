import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <AppBar position="static" className="navbar">
            <Toolbar>
                <Typography variant="h6" className="title">
                    <Link to="/">News App</Link>
                </Typography>
                <Box ml="auto"> {/* Alinear a la derecha */}
                    <Button color="inherit" component={Link} to="/admin">
                        Admin
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
