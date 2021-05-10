import { Redirect } from "react-router-dom";
import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import FormLogin from "./FormLogin";
const { peticionHttp } = require("../../services/peticionesHttp");

const inputForm = {
  backgroundColor: "#F5F5F5",
  minHeight: "100vh",
  minWidth: "100vh",
  position: "relative"
};

const Container = (props) => {
  const [autorizado, setAutorizado] = useState(null);

  // funcion que trae los datos del formulario
  // es pasada al formulario por propiedades "props"
  const enviarDatos = async (correo, contraseña) => {
    let datos = {
      correo,
      contraseña,
    };
    let response = await peticionHttp("http://192.168.1.117:8500/login", datos,"post");
    let status = response.status;
    let responseData = response.data;
    if (status === 200) {
      sessionStorage.setItem("token", responseData);
      alert("Bienvenido");
      setAutorizado(true);
    } else if (status === 401) {
      alert(responseData.message);
    }
    return status;
  };
  if (autorizado) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Box style={inputForm}>
      <FormLogin enviarDatosLogin={enviarDatos}></FormLogin>
    </Box>
  );
};

export default Container;
