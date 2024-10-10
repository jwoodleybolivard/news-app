import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Container } from '@mui/material';
import ArticleCard from './ArticleCard';
import './ArticleList.css';

const ArticleList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get('http://localhost:3000/articles');
                setArticles(response.data);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchArticles();
    }, []);

    return (
        <Container>
            <Grid container spacing={3}>
                {articles.map(article => (
                    <Grid item xs={12} sm={6} md={4} key={article._id}>
                        <ArticleCard article={article} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ArticleList;
