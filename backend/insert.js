import mongoose from 'mongoose';
import Article from './models/Article.js';

// Datos de ejemplo de artículos para insertar en la base de datos
const articles = [
    {
        title: "Descubrimiento de una Nueva Especie de Delfín en el Amazonas",
        description: "Científicos han descubierto una nueva especie de delfín en el río Amazonas. Este hallazgo podría proporcionar nuevas pistas sobre la biodiversidad en la región.",
        image: "https://example.com/dolphin.jpg",
        videoUrl: "https://www.example.com/video/dolphin-discovery"
    },
    //Agrega otros artículos
];

// Conexión a la base de datos MongoDB y inserción de datos
mongoose.connect('mongodb+srv://jwoodley2000:RuZRSU6dDsRn9TSU@cluster0.scy71.mongodb.net/news?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    Article.insertMany(articles).then(() => {
        console.log('Datos insertados');
        mongoose.connection.close();
    }).catch(err => {
        console.error(err);
        mongoose.connection.close();
    });
});