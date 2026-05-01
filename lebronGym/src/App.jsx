// Importa los estilos principales de App
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";
// Importa el componente Login
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import RecepcionDashboard from "./components/RecepcionDashboard";
import { Route, Routes } from "react-router-dom";
// Componente principal de la aplicación
function App() {

  // Renderiza directamente el componente Login
  return (
<Routes>
<Route path="/" element={<Login />} />

<Route 
  path="/admin/admingym"
  element ={
  <ProtectedRoute role="admin">
  <AdminDashboard />
  </ProtectedRoute>

  }
/>

<Route path="/recepcion/recepciongym"
 element={
 <ProtectedRoute role="recepcion">
 <RecepcionDashboard />
 </ProtectedRoute>
} />



</Routes>
 
  );
}

// Exporta App para usarlo en main.jsx
export default App;
