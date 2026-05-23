# 🏋️ Sistema de Gestión para Gimnasio

Sistema web desarrollado para la administración y gestión de un gimnasio. Permite gestionar usuarios, clientes, membresías y otras funciones administrativas desde una interfaz sencilla e intuitiva.

---

## 📌 Características

✅ Inicio de sesión de administradores  
✅ Gestión de clientes  
✅ Registro y administración de usuarios  
✅ Gestión de membresías  
✅ Panel administrativo  
✅ Base de datos MySQL  
✅ API REST con Node.js y Express  
✅ Interfaz desarrollada con React + Vite  

---

## 🛠 Tecnologías utilizadas

### Frontend
- React
- Vite
- JavaScript
- CSS

### Backend
- Node.js
- Express.js

### Base de datos
- MySQL

---

## 📂 Estructura del proyecto

```bash
Sistema-Gimnasio/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── components/
│   ├── pages/
│   └── package.json
│
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── db.js
│   ├── server.js
│   └── package.json
│
└── README.md
⚙️ Instalación y ejecución
1️⃣ Clonar el repositorio
git clone https://github.com/USUARIO/NOMBRE-REPOSITORIO.git

Entrar al proyecto:

cd NOMBRE-REPOSITORIO
2️⃣ Instalar dependencias del frontend
cd frontend
npm install

Ejecutar el frontend:

npm run dev
3️⃣ Instalar dependencias del backend

Abrir otra terminal:

cd backend
npm install

Ejecutar el servidor:

node server.js
🗄 Configuración de la base de datos

Crear la base de datos en MySQL:

CREATE DATABASE gimnasio;

Configurar la conexión en el archivo:

backend/db.js

Ejemplo:

const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "gimnasio"
});

module.exports = db;
🔑 Funcionalidades del sistema
Administrador
Iniciar sesión
Gestionar clientes
Registrar usuarios
Editar información
Eliminar registros
Administrar membresías
Gestión del sistema
Clientes
Consulta de información
Visualización de membresías
Estado de pagos
🚀 Funcionalidades futuras

📌 Control de asistencia

📌 Reportes y estadísticas

📌 Dashboard administrativo

📌 Generación de códigos QR

📌 Gestión de pagos

📌 Historial de clientes

📷 Capturas del sistema
Login

Panel Administrador

Gestión de Clientes

👩‍💻 Desarrollado por

Sofía Guerrero
Estudiante de Programación — UTN FRT

GitHub: https://github.com/TUUSUARIO

📄 Licencia

Este proyecto fue desarrollado con fines académicos y educativos.
