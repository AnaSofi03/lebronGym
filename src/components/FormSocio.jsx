import { useState } from "react";
import { crearSocio } from "../services/sociosApi";

function FormSocio(){

    const [form,setForm] = useState({
        dni: "",
        nombre: "",
        apellido: "",
        telefono: "",
        email: "",
        fecha_nacimiento: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) =>{

        e.preventDefault();

        try{

            await crearSocio(form);

            alert("Socio creado correctamente");

            setForm({
                dni:"",
                nombre:"",
                apellido:"",
                telefono:"",
                email:"",
                fecha_nacimiento:""
            });

        }catch(error){
            console.log(error);
        }

    };

return(
    <form onSubmit={handleSubmit}>
        <input 
        type="text"
        name="dni"
        placeholder="DNI"
        value={form.dni}
        onChange={handleChange}
        required
        />

        <input 
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={form.nombre}
        onChange={handleChange}
        required
        />


        <input
        type="text"
        name="apellido"
        placeholder="Apellido"
        value={form.apellido}
        onChange={handleChange}
        required
        />

        <input
        type="text"
        name="telefono"
        placeholder="Telefono"
        value={form.telefono}
        onChange={handleChange}
        />

        <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        />

        <input
        type="date"
        name="fecha_nacimiento"
        value={form.fecha_nacimiento}
        onChange={handleChange}
        />
        <button type="submit">Crear Socio</button>
    </form>     
);
}

export default FormSocio;
