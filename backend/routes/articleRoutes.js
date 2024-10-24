import express from 'express';
import { body } from 'express-validator';
import { getAllArticles, getArticleById, createArticle } from '../controllers/articleController.js';
import validateInput from '../middlewares/validateInput.js';

const router = express.Router();

/**
 * @swagger
 * /articles:
 *   get:
 *     summary: Obtiene todos los artículos
 *     responses:
 *       200:
 *         description: Lista de artículos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Article'
 */
// Ruta para obtener todos los artículos
router.get('/', getAllArticles);

/**
 * @swagger
 * /articles/{id}:
 *   get:
 *     summary: Obtiene un artículo por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del artículo
 *     responses:
 *       200:
 *         description: Un artículo
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Article'
 *       404:
 *         description: Artículo no encontrado
 */
// Ruta para obtener un artículo por su ID
router.get('/:id', getArticleById);

/**
 * @swagger
 * /articles:
 *   post:
 *     summary: Crea un nuevo artículo
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Article'
 *     responses:
 *       201:
 *         description: Artículo creado
 *       400:
 *         description: Error en la validación
 */
// Ruta para crear un nuevo artículo con validación de datos
router.post(
    '/',
    [
        body('title').notEmpty().withMessage('El título es requerido'),
        body('description').isLength({ min: 10 }).withMessage('La descripción debe tener al menos 10 caracteres'),
        body('image').notEmpty().withMessage('La imagen es requerida'),
        body('videoUrl').notEmpty().withMessage('El video es requerido'),
        body('author').notEmpty().withMessage('El autor es requerido'),
    ],
    validateInput,
    createArticle
);

export default router;
