import mongoose from 'mongoose';

// Definición del esquema para los artículos
const articleSchema = new mongoose.Schema({
    title: { type: String, required: true }, // Título del artículo
    description: { type: String, required: true }, // Descripción del artículo
    image: { type: String, required: true }, // URL de la imagen del artículo
    videoUrl: { type: String, required: true }, // URL del video del artículo
});

// Creación del modelo Article basado en el esquema definido
const Article = mongoose.model('Article', articleSchema);

export default Article;
