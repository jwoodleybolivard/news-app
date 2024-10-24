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

La base de datos incluye 10 artículos. No sera necesario ejecutar scripts de inserción para configurar los datos base, ya que es Atlas la base de datos está en el cloud MongoDB.

## 🛠 Configuración y Ejecución del Proyecto

### Prerrequisitos

- 🟢 Node.js (versión 8.0)
- 🍃 MongoDB (Atlas) No es necesario tener mongoDB para probar el proyecto, la base de datos está en el cloud MongoDB.

### Instalación

Es importante seguir los pasos en este orden para evitar cualquier error.

1. 📥 Clona el repositorio:

   ```bash
   git clone https://github.com/jwoodleybolivard/news-app.git
   cd news-app

   ```

2. 📦 Instala las dependencias del servidor:

   ```
   cd backend
   npm install
   ```

3. ▶️ Inicia el servidor:

```
npm run dev
```

4. 📦 Instala las dependencias de la aplicación React:

```
cd news-app-frontend
npm install
```

5. ▶️ Inicia la aplicación React:

```
npm start
```

Después de la ejecución de este comando la app es propbable que la app te notifica que el puerto 3000 está ocupado ya que el backend lo está ocupando. para cambiar de puerto solo tienes que apretar "y" para confirmar.

6. 💾 Insertar Datos en la Base de Datos
   Inecesario insertar datos ya que la base de datos está en la nube de mongoDB.

7. 📑 Documentación de la API
   Accede a la documentación de la API en http://localhost:3001/api-docs después de iniciar el servidor.

🍀 Desarrollado con ❤️ por Jean Woodley Bolivard
