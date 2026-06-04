import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export default function AdminDashboard() {
  
  
  const [socios, setSocios] = useState([]);

  const[mostrarModal, setMostrarModal] = useState(false);


  /*crear estados para socios*/
  const[nuevoSocio, setNuevoSocio] = useState({
    dni: "",
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    fecha_nacimiento: ""
  });


  /*funcion para guardar*/

  const guardarSocio = async (e) =>{
    e.preventDefault();

    try{
    
      if (nuevoSocio.id) {

      await axios.put(
        `http://localhost:4000/api/socios/${nuevoSocio.id}`,
        nuevoSocio
      );


      alert("Socio agregado correctamente");

    }else{
      await axios.post(
        "http://localhost:4000/api/socios",
        nuevoSocio
      )

      alert("Socio agregado correctamente");
    }

      cargarSocios();
      setMostrarModal(false);

      setNuevoSocio({
        dni: "",
        nombre: "",
        apellido: "",
        telefono: "",
        email: "",
        fecha_nacimiento: ""
      })
    } catch (error){
      console.error(error);
    }
  };


/* funcion para obtener socios*/


const cargarSocios = async () => {
  try{
    const res = await axios.get(
     "http://localhost:4000/api/socios"
    );

    setSocios(res.data);
  } catch(error){
    console.error(error);
  }
}

useEffect(() =>{
  cargarSocios();
}, []);


console.log(socios);


 /*Funcion para eliminar socio */
   const eliminarSocio = async (id) =>{
      const confirmar = window.confirm("Eliminar este socio?");

    if(!confirmar) return;

    try{
      await axios.delete(
        `http://localhost:4000/api/socios/${id}`
      );
            cargarSocios();
    } catch(error){
      console.log(error);
    }
   };


   /* Función para editar socios */

   const editarSocio = (socio) =>{
    console.log("Socio:", socio);
    setNuevoSocio(socio);
    setMostrarModal(true);
     }



  
    

  return (
    <div className="min-h-screen bg-zinc-100">

      {/* Navbar */}
      <header className="h-16 bg-zinc-900 text-white flex items-center px-6">
        <h1 className="text-2xl font-bold text-orange-500">
          LEBRONGYM
        </h1>
      </header>

      <div className="flex">

        {/* Sidebar */}
        <aside className="w-64 min-h-[calc(100vh-4rem)] bg-zinc-800 text-white">

          <nav className="p-4 space-y-2">

            <button className="w-full text-left p-3 rounded hover:bg-zinc-700">
              Socios
            </button>

            <button className="w-full text-left p-3 rounded hover:bg-zinc-700">
              Pagos
            </button>

            <button className="w-full text-left p-3 rounded hover:bg-zinc-700">
              Rutinas
            </button>

            <button className="w-full text-left p-3 rounded hover:bg-zinc-700">
              Asistencias
            </button>

          </nav>

        </aside>

        {/* Contenido */}
        <main className="flex-1 p-6">

          {/* Cards */}
          <div className="grid grid-cols-3 gap-6">

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-zinc-500">Socios Activos</h3>
              <p className="text-4xl font-bold">120</p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-zinc-500">Ingresos</h3>
              <p className="text-4xl font-bold">$50.000</p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-zinc-500">Vencimientos</h3>
              <p className="text-4xl font-bold">15</p>
            </div>

          </div>

      <div className="flex justify-between items-center mt-8 mb-4">

  <h2 className="text-xl font-bold">
    Últimos Socios Registrados
  </h2>

  <button
    onClick={() => setMostrarModal(true)}
    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg"
  >
    + Nuevo Socio
  </button>

</div>


          {/* Tabla */}
          <div className="mt-8 bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold mb-4">
              Últimos Socios Registrados
            </h2>

            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Dni</th>
                  <th className="text-left p-2">Nombre</th>
                  <th className="text-left p-2">Apellido</th>
                  <th className="text-left p-2">Telefono</th>
                  <th className="text-left p-2">Email</th>
                  <th className="text-left p-2">Fecha de Nacimiento</th>
                  <th className="text-left p-2">Fecha de Registro</th>
                  <th className="text-left p-2">Estado</th>
                  <th className="text-left p-2">Acciones</th>
                </tr>
              </thead>

              <tbody>
                {socios.map((socio) =>(
                  <tr key={socio.id} className="border-b hover:bg-gray-50">
                <td className="p-2">{socio.dni}</td>
                <td className="p-2">{socio.nombre}</td>
                <td className="p-2">{socio.apellido}</td>
                <td className="p-2">{socio.telefono}</td>
                <td className="p-2">{socio.email}</td>

                <td className="p-2">{socio.fecha_nacimiento}</td>
                <td className="p-2">{socio.fecha_registro}</td>
                
                <td className="p-2">{socio.estado}</td>

                <td>
                  <button onClick={() => editarSocio(socio)}>✏️</button>

                  <button onClick={() => eliminarSocio(socio.id)}>🗑️</button>
                </td>



                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </main>

      </div>
{mostrarModal && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

    <div className="bg-white rounded-xl p-8 w-full max-w-xl">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          Nuevo Socio
        </h2>

        <button
          onClick={() => setMostrarModal(false)}
          className="text-red-500 text-xl"
        >
          ✕
        </button>
      </div>

      <form
        onSubmit={guardarSocio}
        className="grid grid-cols-2 gap-4"
      >

        <input
          type="text"
          placeholder="DNI"
          value={nuevoSocio.dni}
          onChange={(e) =>
            setNuevoSocio({
              ...nuevoSocio,
              dni: e.target.value
            })
          }
          className="border p-3 rounded"
        />

        <input
          type="text"
          placeholder="Nombre"
          value={nuevoSocio.nombre}
          onChange={(e) =>
            setNuevoSocio({
              ...nuevoSocio,
              nombre: e.target.value
            })
          }
          className="border p-3 rounded"
        />

        <input
          type="text"
          placeholder="Apellido"
          value={nuevoSocio.apellido}
          onChange={(e) =>
            setNuevoSocio({
              ...nuevoSocio,
              apellido: e.target.value
            })
          }
          className="border p-3 rounded"
        />

        <input
          type="text"
          placeholder="Teléfono"
          value={nuevoSocio.telefono}
          onChange={(e) =>
            setNuevoSocio({
              ...nuevoSocio,
              telefono: e.target.value
            })
          }
          className="border p-3 rounded"
        />

        <input
          type="email"
          placeholder="Email"
          value={nuevoSocio.email}
          onChange={(e) =>
            setNuevoSocio({
              ...nuevoSocio,
              email: e.target.value
            })
          }
          className="border p-3 rounded col-span-2"
        />

        <input
          type="date"
          value={nuevoSocio.fecha_nacimiento}
          onChange={(e) =>
            setNuevoSocio({
              ...nuevoSocio,
              fecha_nacimiento: e.target.value
            })
          }
          className="border p-3 rounded col-span-2"
        />

        <button
          type="submit"
          className="col-span-2 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg"
        >
          Guardar Socio
        </button>

      </form>

    </div>

  </div>
)}
    </div>
  );
}