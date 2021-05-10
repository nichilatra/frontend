import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Divider from "@material-ui/core/Divider";

const estiloContenedor = {
  width: "500px",
  marginTop: "50px",
  marginLeft: "50px",
  backgroundColor: "#ECEFF1",
};

const estiloImagen = {
  width: "auto",
  height: "100px",
};

const estiloInfoPais = {
  display: "flex",
  height: "200px",
  alignItems: "center",
  justifyContent: "space-around",
};

const PaisSeleccionado = (props) => {
  // funcion que captura los datos
  const { datosPais, urlBandera } = props;
  return (
    <Card style={estiloContenedor}>
      <CardHeader title="Pais seleccionado"></CardHeader>
      <Divider style={{ background: "#64B5F6" }}></Divider>
      <Box style={estiloInfoPais}>
        <Box>
          <Typography variant="h4">{datosPais}</Typography>
        </Box>
        <CardMedia style={estiloImagen} component="img" src={urlBandera} />
      </Box>
    </Card>
  );
};

export default PaisSeleccionado;
