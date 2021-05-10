import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import React, { useState } from "react";
import { Link } from "react-router-dom";

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
  const { enviarDatosLogin } = props;

  // uso de hooks para manejar el estado
  const [correo, setCorreo] = useState(null);
  const [contraseña, setContraseña] = useState(null);

  // funcion que captura el correo
  const capturaEventoCorreo = (event) => {
    setCorreo(event.target.value);
  };
  // funcion que captura la contraseña
  const capturaEventoContraseña = (event) => {
    setContraseña(event.target.value);
  };

  return (
    <Box style={inputForm}>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <Typography variant="h4">Bienvenido</Typography>
        <FormControl>
          <TextField
            required
            onChange={capturaEventoCorreo}
            id="standard-basic"
            style={inputStyle}
            label="Correo"
          />
          <TextField
            required
            type="password"
            onChange={capturaEventoContraseña}
            id="filled-basic"
            style={inputStyle}
            label="Contraseña"
          />
          <Button
            onClick={() => enviarDatosLogin(correo, contraseña)}
            style={botonStyle}
            variant="contained"
            color="primary"
          >
            Iniciar sesion
          </Button>
        </FormControl>
        <Box mt={5} display="flex">
          <Typography>¿No tienes cuenta ?</Typography>
          <Typography component={Link} to={"/registro"}>
            Registrarme
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
};

export default Login;
