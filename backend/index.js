import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import articleRoutes from './routes/articleRoutes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerSetup from './swagger.js';
import errorHandler from './middlewares/errorHandler.js';
import morgan from 'morgan';

const app = express();
app.use(cors());
app.use(express.json());

app.use(morgan('dev'));

// Conexión a la base de datos MongoDB (Atlas) en la nube de aws
mongoose.connect('mongodb+srv://jwoodley2000:RuZRSU6dDsRn9TSU@cluster0.scy71.mongodb.net/news?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Configuración de las rutas y middlewares
app.use('/api-docs', swaggerUi.serve, swaggerSetup); // Ruta para la documentación de la API
app.use('/articles', articleRoutes); // Ruta para las operaciones de los artículos
app.use(errorHandler); // Middleware para el manejo de errores

// Iniciar el servidor en el puerto 3001
app.listen(3000, () => console.log('Server running on port 3000 please visit http://localhost:3000/api-docs'));
