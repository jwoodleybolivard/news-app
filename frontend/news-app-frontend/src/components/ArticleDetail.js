import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import './ArticleDetail.css';

const ArticleDetail = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        const fetchArticle = async () => {
            const response = await axios.get(`http://localhost:3000/articles/${id}`);
            setArticle(response.data);
        };

        fetchArticle();
    }, [id]);

    if (!article) return <div>Cargando...</div>;

    const isYouTubeUrl = url => {
        const regex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
        return regex.test(url);
    };

    return (
        <Container>
            <Card>
                <CardMedia
                    component="img"
                    alt={article.title}
                    height="300"
                    image={article.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        {article.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {article.description}
                    </Typography>
                    <div className="video-container">
                        {isYouTubeUrl(article.videoUrl) ? (
                            <iframe
                                width="560"
                                height="315"
                                src={`https://www.youtube.com/embed/${article.videoUrl.split('v=')[1]}`}
                                title="Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        ) : (
                            <video width="560" height="315" controls>
                                <source src={article.videoUrl} type="video/mp4" />
                                <source src={article.videoUrl.replace('.mp4', '.webm')} type="video/webm" />
                                <source src={article.videoUrl.replace('.mp4', '.ogg')} type="video/ogg" />
                                Tu navegador no soporta el video.
                            </video>
                        )}
                    </div>
                </CardContent>
            </Card>
        </Container>
    );
};

export default ArticleDetail;
