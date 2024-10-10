# 📰 News App

## 📝 Descripción

Este proyecto es una aplicación web para un sitio de noticias que permite almacenar y visualizar artículos escritos por periodistas. Los artículos incluyen al menos un título, descripción, imagen y URL para video.

## 🌟 Características del Proyecto

### 📡 API

- 🔧 Desarrollada con Node.js y Express.
- 🔗 Conexión a una base de datos MongoDB usando Mongoose.
- 📃 Implementación de Swagger para la documentación de la API.

### 💻 Aplicación Web

- ⚛️ Desarrollada con React.
- 🔄 Conexión a la API para obtener y mostrar artículos.
- 📑 Listado de artículos en la página principal y visualización detallada de cada artículo con video.

## 🗂 Contenido de la Base de Datos

La base de datos incluye al menos 10 artículos. Se proporcionan scripts de inserción para configurar los datos base.

## 🛠 Configuración y Ejecución del Proyecto

### Prerrequisitos

- 🟢 Node.js (versión X.X.X o superior)
- 🍃 MongoDB (local o Atlas)

### Instalación

1. 📥 Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/news-app.git
   cd news-app

   ```

2. 📦 Instala las dependencias del servidor:

   ```
   cd server
   npm install
   ```

3. ▶️ Inicia el servidor:

```
npm start
```

4. 📦 Instala las dependencias de la aplicación React:

```
cd ../client
npm install
```

5. ▶️ Inicia la aplicación React:

```
npm start
```

6. 💾 Insertar Datos en la Base de Datos
   Ejecuta los siguientes scripts para insertar los datos de prueba en la base de datos:

7. 📑 Documentación de la API
   Accede a la documentación de la API en http://localhost:3000/api-docs después de iniciar el servidor.

🍀 ¡Buena Suerte!
