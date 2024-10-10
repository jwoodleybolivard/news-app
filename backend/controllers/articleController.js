import Article from '../models/Article.js';

// Función para obtener todos los artículos
export const getAllArticles = async (req, res) => {
    try {
        const articles = await Article.find();
        res.json(articles);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Función para obtener un artículo por su ID
export const getArticleById = async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        if (!article) return res.status(404).send('Article not found');
        res.json(article);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Función para crear un nuevo artículo
export const createArticle = async (req, res) => {
    try {
        const article = new Article(req.body);
        await article.save();
        res.status(201).send(article);
    } catch (err) {
        res.status(500).send(err.message);
    }
};
