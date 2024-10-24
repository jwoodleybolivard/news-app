import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import './ArticleCard.css';

const ArticleCard = ({ article }) => {
    // Función para truncar el texto
    const truncateText = (text, length) => {
        if (text.length <= length) return text;
        return text.substring(0, length) + '...';
    };

    return (
        <Card>
            <CardActionArea component={Link} to={`/articles/${article._id}`}>
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
                        {truncateText(article.description, 100)} {/* Truncar a 100 caracteres */}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ArticleCard;
