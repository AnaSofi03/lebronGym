import axios from "axios";

const API = "http://localhost:4000/api/socios";

export const obtenerSocios = () => axios.get(API);
export const crearSocio = (data) => axios.post(API, data);
export const eliminarSocio = (id) => axios.delete(`${API}/${id}`);
export const actualizarSocio = (id, data) => axios.put(`${API}/${id}`, data);