import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import React, { useState, useEffect } from "react";
import InfoClima from "./components/InfoClima";
import PaisSeleccionado from "./components/PaisSeleccionado";
import ListaPaises from "./components/ListaPaises";
import Hora from "./components/Hora";
const { peticionHttpConsumo } = require("../../services/peticionesHttp");

// ***************** Estilos ****************
const inputForm = {
  backgroundColor: "#64B5F6",
  width: "100%",
  height: "100vh",
};

const estiloInfoClima = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
};

// ***************** Logica ****************

const obtenerInformacionPaises = async () => {
  let respuestaBack = await peticionHttpConsumo(
    "http://192.168.1.117:8500/pruebaniver/paises",
    "",
    "get"
  );
  let listado = Object.values(respuestaBack.data);
  return listado;
};

// ***************** Logica ****************

const obtenerInformacionDelPais = async (nombrePais) => {
  let respuestaBack = await peticionHttpConsumo(
    "http://192.168.1.117:8500/pruebaniver/climapais",
    { pais: nombrePais },
    "post"
  );
  let informacionPais = Object.values(respuestaBack.data);
  return informacionPais;
};

const Dashboard = (props) => {
  // ***************** Logica ****************
  const [pais, setPais] = useState("Seleccione un pais");
  const [informacionPais, setIformacionPais] = useState([{
    location: { localtime: "" },
    current: {
      temp_c: "",
      condition: {
        text: "",
        icon: "",
      },
    },
  },""]);
  const [listadoPaises, setListadoPaises] = useState([]);

  let obtenerPaisSeleccionado = (nombrePais) => {
    setPais(nombrePais);
    let urlBandera = async () => {
      let infoPais = await obtenerInformacionDelPais(nombrePais);
      console.log(infoPais);
      setIformacionPais(infoPais);
    };
    urlBandera();
  };

  useEffect(() => {
    async function request() {
      let respuesta = await obtenerInformacionPaises();
      setListadoPaises(respuesta);
    }
    request();
  }, []);

  return (
    <Box style={inputForm}>
      Soy el dasboard
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <Box style={estiloInfoClima}>
            <InfoClima datosClima={informacionPais[0]}></InfoClima>
            <PaisSeleccionado
              datosPais={pais}
              urlBandera={informacionPais[1]}
            ></PaisSeleccionado>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <ListaPaises
            obtenerPaisSeleccionado={obtenerPaisSeleccionado}
            listadoPaises={listadoPaises}
          ></ListaPaises>
        </Grid>
        <Hora hora={informacionPais[0].location.localtime}></Hora>
      </Grid>
    </Box>
  );
};

export default Dashboard;
