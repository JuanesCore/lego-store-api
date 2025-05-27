# LEGO Store API 🧱

Una API RESTful creada con Node.js, Express y MongoDB para gestionar productos de una tienda LEGO.

## 🚀 Funcionalidades

- Crear, leer, actualizar y eliminar productos
- Guardar imágenes de productos
- Conexión con MongoDB
- Middleware y controladores estructurados

## 📦 Tecnologías usadas

- Node.js
- Express.js
- MongoDB + Mongoose
- Multer (para imágenes)
- Vite (frontend relacionado)
- CORS, dotenv, etc.

## 📁 Estructura del proyecto

lego-store-api/
├── controllers/
├── models/
├── routes/
├── uploads/
├── .env
├── .gitignore
├── package.json
└── server.js

bash
Copy
Edit

## 🛠 Instalación

```bash
git clone https://github.com/JuanesCore/lego-store-api.git
cd lego-store-api
npm install
▶️ Ejecución
Crea un archivo .env en la raíz con esta estructura:

ini
Copy
Edit
PORT=3000
MONGO_URI=tu_string_de_conexion
Luego ejecuta:

bash
Copy
Edit
npm run dev
📬 Endpoints de ejemplo
Método	Ruta	Descripción
GET	/api/productos	Obtener todos los productos
POST	/api/productos	Crear nuevo producto
PUT	/api/productos/:id	Actualizar producto por ID
DELETE	/api/productos/:id	Eliminar producto por ID
