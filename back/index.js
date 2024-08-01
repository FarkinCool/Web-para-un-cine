const app = require("./src/server");
const conexion = require("./src/config/conexionBD");
const PORT = 3000;


conexion().then((res) =>
    {
        app.listen(PORT, ()=>{
            console.log(`Servidor escuchando en el puerto ${PORT}`);
        });
}).catch((err) =>{
    console.log("Error al conectar la Base de datos");
})

