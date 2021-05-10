import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import React, { useState, useEffect } from "react";
import ListadoUsuarios from "./components/ListadoUsuarios";
const { peticionHttpConsumo } = require("../../services/peticionesHttp");

// ***************** Estilos ****************
const estilosUsers = {
  backgroundColor: "#81C784",
  width: "100%",
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",
};

const estiloInfoUsuarios = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
};

// ***************** Logica ****************

const obtenerInformacionPaises = async () => {
  let respuestaBack = await peticionHttpConsumo(
    "http://192.168.1.117:8500/pruebaniver/usuarios",
    "",
    "get"
  );
  return respuestaBack.data;
};

// Componente
const Users = (props) => {
  const [usuarios, setUsuarios] = useState([
    { nombre: "" },
    { correo: "" },
    { fechaCreacion: "" },
    { fechaUltimoLogin: "" },
  ]);
  useEffect(() => {
    async function request() {
      let respuesta = await obtenerInformacionPaises();
      setUsuarios(respuesta);
    }
    request();
  }, []);

  return (
    <Box style={estilosUsers}>
      <Grid item xs={12}></Grid>
      <Box style={estiloInfoUsuarios}>
        <ListadoUsuarios datosUsuarios={usuarios}></ListadoUsuarios>
      </Box>
    </Box>
  );
};

export default Users;
