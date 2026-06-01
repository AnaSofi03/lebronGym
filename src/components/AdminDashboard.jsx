import { Link } from "react-router-dom";

export default function AdminDashboard() {
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
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="p-2">Juan Pérez</td>
                  <td className="p-2">Mensual</td>
                  <td className="p-2 text-green-600">Activo</td>
                </tr>
              </tbody>
            </table>
          </div>

        </main>

      </div>

    </div>
  );
}