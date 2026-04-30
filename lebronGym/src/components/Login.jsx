import "../styles/login.css"; // Importa los estilos CSS del login
import React, { useState } from "react"; // Importa React y useState para manejar estados
import axios from "axios"; // Importa Axios para hacer peticiones HTTP al backend
import useStore from "../store/useStore"; // Importa Zustand para manejar el usuario globalmente
import { useNavigate } from "react-router-dom"; // Hook para redirigir entre páginas
import logo from '../assets/Lebrongym.png'; // Importa el logo de LebronGym
// Componente principal Login
export default function Login() {

  // Estado para guardar el nombre de usuario ingresado
  const [usuario, setUsuario] = useState("");
  // Estado para guardar la contraseña ingresada
  const [password, setPassword] = useState("");
  // Hook de navegación para cambiar de ruta
  const navigate = useNavigate();
  // Obtiene la función setUser desde Zustand para guardar usuario logueado
  const setUser = useStore((state) => state.setUser);
  // Función que se ejecuta al enviar el formulario
  const handleLogin = async (e) => {
    // Evita que el formulario recargue la página
    e.preventDefault();
    // Verifica que usuario y contraseña no estén vacíos
    if (!usuario || !password) {

      // Muestra mensaje de error
      alert("Por favor ingresa tu usuario y contraseña");
      // Detiene ejecución
      return;
    }
    try {
      // Envía usuario y contraseña al backend para validación
      const res = await axios.post("http://localhost:3001/auth/login", {
        usuario,
        password,
      });
      // Guarda la respuesta del backend (usuario válido)
      const user = res.data;
      // Si el usuario existe
      if (user) {
        // Guarda usuario en Zustand
        setUser(user);
        // Guarda usuario en localStorage para mantener sesión
        localStorage.setItem("user", JSON.stringify(user));
        // Muestra usuario en consola
        console.log("Usuario logueado:", user);
        // Si el rol es admin redirige al panel admin
        if (user.rol === "admin") {
          navigate("/admin/admingym");
        } else {
          // Si no es admin redirige a administrador/cliente
          navigate("/recepcion/recepciongym");
        }
      }
    } catch (error) {
      // Si backend responde 401 (credenciales incorrectas)
      if (error.response?.status === 401) {
        alert("Usuario o contraseña incorrectos");
      } else {
        // Si hay otro error (servidor, conexión, etc.)
        alert("Error en la conexión con el servidor");
      }
      // Muestra error detallado en consola
      console.error("Error login:", error);
    }
  };
  // Renderiza la interfaz visual
  return (

    // Contenedor principal
    <div className="container">
      {/* Imagen de fondo */}
      <img
        src="/login4.jpg"
        alt="Login"
        className="background-img"
      />
    {/* Título en esquina superior izquierda */}
<div className="titulo">
  LEBRONGYM
</div>
<img src={logo} alt="Logo" className="logo" />
      <div className="overlay"></div>

      {/* Contenedor centrado */}
      <div className="login-wrapper">
        
        {/* Caja de login */}
        <div className="login-box">
          {/* Título */}
          <h2 className="login-titulo">BIENVENIDOS</h2>
          


          {/* Formulario */}
          <form onSubmit={handleLogin}>
            {/* Input usuario */}
           <div className="input-group">
  <input
    type="text"
    placeholder="Usuario"
    value={usuario}
    onChange={(e) => setUsuario(e.target.value)}
  />
</div>

<div className="input-group">
  <input
    type="password"
    placeholder="Contraseña"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
</div>
            {/* Botón enviar */}
            <button onClick={handleLogin}>
              Ingresar
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}