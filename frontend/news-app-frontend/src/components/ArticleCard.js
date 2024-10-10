import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './ArticleCard.css';


const ArticleCard = ({ article }) => {
    return (
        <Card>
            <CardMedia
                component="img"
                alt={article.title}
                height="140"
                image={article.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {article.description}
                </Typography>
                <Button size="small" color="primary" component={Link} to={`/articles/${article._id}`}>
                    Leer Más
                </Button>
            </CardContent>
        </Card>
    );
};

export default ArticleCard;
