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


React.useEffect(()=>{     //limpia el usuario guardado al volver al loginy
      localStorage.removeItem("user");
      setUser(null);
    },[]);


  const handleLogin = async (e) => {
    e.preventDefault(); // Evita que el formulario recargue la página
    // Verifica que usuario y contraseña no estén vacíos
    if (!usuario || !password) {
      // Muestra mensaje de error
      alert("Por favor ingresa tu usuario y contraseña");
      // Detiene ejecución
      return;
    }
    try {
      // Envía usuario y contraseña al backend para validación
      const res = await axios.post("http://localhost:4000/auth/login", {
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
          navigate("/admin/admingym", {replace: true});
        } else {
          // Si no es admin redirige a administrador/cliente
          navigate("/recepcion/recepciongym", {replace: true});
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
return (
  <div className="relative min-h-screen w-full overflow-hidden">

    {/* Fondo */}
    <img
      src="/login4.jpg"
      alt="Login"
      className="absolute inset-0 h-full w-full object-cover"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/60"></div>

    {/* Logo */}
    <div className="absolute top-6 left-8 z-20 flex items-center gap-3">
      <img
        src={logo}
        alt="Logo"
        className="w-14"
      />
      <h1 className="text-4xl font-bold text-white tracking-wider">
        LEBRONGYM
      </h1>
    </div>

    {/* Login */}
    <div className="relative z-10 flex min-h-screen items-center justify-center">

      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-zinc-900/70 p-10 backdrop-blur-md shadow-[0_0_25px_rgba(249,115,22,0.3)]">

        <h2 className="mb-2 text-center text-4xl font-bold tracking-widest text-white">
          BIENVENIDO
        </h2>

        <p className="mb-8 text-center text-zinc-400">
          Sistema de Gestión de Gimnasio
        </p>

        <form
          onSubmit={handleLogin}
          className="space-y-6"
        >
          <input
            type="text"
            placeholder="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            className="w-full border-b-2 border-zinc-600 bg-transparent py-3 text-white outline-none transition focus:border-orange-500"
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border-b-2 border-zinc-600 bg-transparent py-3 text-white outline-none transition focus:border-orange-500"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-orange-500 py-3 text-lg font-semibold text-white transition hover:bg-orange-600 hover:scale-[1.02]"
          >
            Ingresar
          </button>
        </form>

      </div>

    </div>

  </div>
);
}