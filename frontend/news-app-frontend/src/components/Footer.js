import React from 'react';
import Typography from '@mui/material/Typography';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                News App {new Date().getFullYear()}
                {'.'}
            </Typography>
        </footer>
    );
};

export default Footer;
