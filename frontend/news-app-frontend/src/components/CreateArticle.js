import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography } from '@mui/material';
import './CreateArticle.css';

const CreateArticle = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newArticle = { title, description, image, videoUrl, author };
            await axios.post('/articles', newArticle);
            alert('Artículo creado exitosamente');
        } catch (error) {
            console.error('Error creando el artículo:', error);
            alert('Hubo un error al crear el artículo.');
        }
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Crear Nuevo Artículo</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Título"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    fullWidth
                    required
                />
                <TextField
                    label="Descripción"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    fullWidth
                    required
                    multiline
                    rows={4}
                    margin="normal"
                />
                <TextField
                    label="URL de la Imagen"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    fullWidth
                    required
                    margin="normal"
                />
                <TextField
                    label="URL del Video"
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                    fullWidth
                    required
                    margin="normal"
                />
                <TextField
                    label="Autor"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    fullWidth
                    required
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">Crear Artículo</Button>
            </form>
        </Container>
    );
};

export default CreateArticle;
