import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import React, { useState } from "react";

const inputForm = {
  backgroundColor: "#64B5F6",
  width: "500px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding:"15px"
};
const botonStyle = {
  margin: 30,
};
const inputStyle = {
  margin: 10,
};

const Login = (props) => {
  // funcion que captura los datos
  const { enviarDatosRegistro } = props;

  // uso de hooks para manejar el estado
  const [correo, setCorreo] = useState(null);
  const [contraseña, setContraseña] = useState(null);
  const [contraseñaConfirmacion, setContraseñaConfirmacion] = useState(null);
  const [nombre, setNombre] = useState(null);
  const [apellidos, setApellidos] = useState(null);
  // funcion que captura el correo
  const capturaEventoCorreo = (event) => {
    setCorreo(event.target.value);
  };
  // funcion que captura la contraseña
  const capturaEventoContraseña = (event) => {
    setContraseña(event.target.value);
  };
  // funcion que captura la confirmacion contraseña
  const capturaEventoContraseñaConfirmacion = (event) => {
    setContraseñaConfirmacion(event.target.value);
  };
  // funcion que captura el nombre
  const capturaEventoNombre = (event) => {
    setNombre(event.target.value);
  };
  // funcion que captura el apellido
  const capturaEventoApellido = (event) => {
    setApellidos(event.target.value);
  };

  return (
    <Box style={inputForm}>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <Typography variant="h4">Crear Cuenta</Typography>
        <FormControl>
          <TextField
            onChange={capturaEventoCorreo}
            id="standard-basic"
            style={inputStyle}
            label="Correo"
          />
          <Box mt={5} display="flex">
            <TextField
              type="password"
              onChange={capturaEventoContraseña}
              id="filled-basic"
              style={inputStyle}
              label="Contraseña"
            />
            <TextField
              type="password"
              onChange={capturaEventoContraseñaConfirmacion}
              id="filled-basic"
              style={inputStyle}
              label="Confirmar Contraseña"
            />
          </Box>
          <TextField
            onChange={capturaEventoNombre}
            id="filled-basic"
            style={inputStyle}
            label="Nombre"
          />
          <TextField
            onChange={capturaEventoApellido}
            id="filled-basic"
            style={inputStyle}
            label="Apellidos"
          />
          <Button
            onClick={() => {
              if (contraseña === contraseñaConfirmacion) {
                enviarDatosRegistro(nombre, apellidos, correo, contraseña);
              } else {
                alert("Las contraseñas no son iguales")
              }
            }}
            style={botonStyle}
            variant="contained"
            color="primary"
          >
            Registrarme
          </Button>
        </FormControl>
      </Grid>
    </Box>
  );
};

export default Login;
