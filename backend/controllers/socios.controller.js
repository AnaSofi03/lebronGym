/*aqui contiene la logica del crud, aqui se define lo que hace el servidor cuandoo react le manda una peticion */

import conexion from "../db.js"; //importamos la conexion a la base de datos

export const obtenerSocios = async (req,res)=>{
     const [rows] = await conexion.query(
        "SELECT * FROM socios" //consulta para traer a todos los socios
     );
     res.json(rows);

};

export const crearSocio = async (req, res) => {

    try {

        const {
            dni,
            nombre,
            apellido,
            telefono,
            email,
            fecha_nacimiento
        } = req.body;

        const sql =
            "INSERT INTO socios (dni, nombre, apellido, telefono, email, fecha_nacimiento) VALUES (?, ?, ?, ?, ?, ?)";

        await conexion.query(sql, [
            dni,
            nombre,
            apellido,
            telefono,
            email,
            fecha_nacimiento
        ]);

        res.json({
            mensaje: "Socio creado correctamente"
        });

    } catch (error) {

        console.error("ERROR SQL:", error);

        res.status(500).json({
            error: error.message
        });
    }
};
export const eliminarSocio = async (req,res)=>{
    await conexion.query(
        "DELETE FROM socios WHERE id = ?",
        [req.params.id]

    );

    res.json({mensaje: "Socio Eliminado Correctamente"});
};


export const actualizarSocio = async (req,res)=>{
    const{id} = req.params;
    const{
        dni,
        nombre,
        apellido,
        telefono,
        email,
        fecha_nacimiento,
        estado
    }=req.body;

  await conexion.query(
        `UPDATE socios
        SET
        dni=?,
        nombre=?,
        apellido=?,
        telefono=?,
        email=?,
        fecha_nacimiento=?,
        estado=?
        WHERE id=?`,
        [
            dni,
            nombre,
            apellido,
            telefono,
            email,
            fecha_nacimiento,
            estado,
            id
        ]
    );

    res.json({
        mensaje:" Socio actualizado correctamente"
    });
};

//cambiar estadod del socio


export const cambiarEstado = async (req, res) => {
  console.log("ENTRO A CAMBIAR ESTADO");

  const { id } = req.params;
  const { estado } = req.body;

  await conexion.query(
    "UPDATE socios SET estado = ? WHERE id = ?",
    [estado, id]
  );

  res.json({ mensaje: "Estado actualizado" });
};
