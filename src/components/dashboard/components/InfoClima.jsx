import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import React, { useState, useEffect } from "react";
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
  height: "200px",
};

const estiloInfoClima = {
  display: "flex",
  height: "200px",
  alignItems: "center",
  justifyContent: "space-around",
};

const InfoClima = (props) => {
  const { datosClima } = props;

  return (
    <Card style={estiloContenedor}>
      <CardHeader title="Clima"></CardHeader>
      <Divider style={{ background: "#64B5F6" }}></Divider>
      <Box style={estiloInfoClima}>
        <CardMedia
          style={estiloImagen}
          component="img"
          src={datosClima.current.condition.icon}
        />
        <Box>
          <Typography>{datosClima.current.temp_c}</Typography>
          <Typography>{datosClima.current.condition.text}</Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default InfoClima;
