import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

// Opciones de configuración para Swagger
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'News API',
            version: '1.0.0',
            description: 'API para la gestión de artículos de noticias',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Servidor local',
            },
        ],
    },
    apis: ['./routes/*.js'], // Archivos donde se documentarán las rutas
};

// Generar la documentación con Swagger
const swaggerDocs = swaggerJsdoc(swaggerOptions);

export default swaggerUi.setup(swaggerDocs);

/**
 * @swagger
 * components:
 *   schemas:
 *     Article:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - image
 *         - videoUrl
 *       properties:
 *         title:
 *           type: string
 *           description: Título del artículo
 *         description:
 *           type: string
 *           description: Descripción del artículo
 *         image:
 *           type: string
 *           description: URL de la imagen del artículo
 *         videoUrl:
 *           type: string
 *           description: URL del video del artículo
 *       example:
 *         title: "Descubrimiento de una Nueva Especie de Delfín en el Amazonas"
 *         description: "Científicos han descubierto una nueva especie de delfín en el río Amazonas. Este hallazgo podría proporcionar nuevas pistas sobre la biodiversidad en la región."
 *         image: "https://example.com/dolphin.jpg"
 *         videoUrl: "https://www.example.com/video/dolphin-discovery"
 */


