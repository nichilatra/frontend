import Box from "@material-ui/core/Box";
import Form from "./FormRegister";
const { peticionHttp } = require("../../services/peticionesHttp");

const inputForm = {
  backgroundColor: "#F5F5F5",
  minHeight: "100vh",
  minWidth: "100vh",
  position: "relative"
};

// funcion que trae los datos del formulario
// es pasada al formulario por propiedades "props"
const enviarDatos = async (nombre, apellidos, correo, contraseña) => {
  let datos = {
    nombre,
    apellidos,
    correo,
    contraseña,
  };

  let response = await peticionHttp(
    "http://192.168.1.117:8500/registro",
    datos,"post"
  );
  let status = response.status;
  let responseData = response.data;
  if (status === 200) {
    alert("Regisro exitoso");
  } else if (status === 400) {
    alert("Error en el registro: " + responseData.message);
  } else {
    alert("Error en el registro: " + responseData);
  }
};

const Container = (props) => {
  return (
    <Box style={inputForm}>
      <Form enviarDatosRegistro={enviarDatos}></Form>
    </Box>
  );
};

export default Container;
