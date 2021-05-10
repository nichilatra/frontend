import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

import Divider from "@material-ui/core/Divider";

const estiloContenedor = {
  width: "500px",
  marginTop: "50px",
  marginLeft: "50px",
  backgroundColor: "#ECEFF1",
};

const estiloInfoPais = {
  display: "flex",
  height: "200px",
  alignItems: "center",
  justifyContent: "space-around",
};

const Hora = (props) => {
  const { hora } = props;
  return (
    <Card style={estiloContenedor}>
      <CardHeader title="Hora"></CardHeader>
      <Divider style={{ background: "#64B5F6" }}></Divider>
      <Box style={estiloInfoPais}>
        <Typography variant="h4">{hora}</Typography>
      </Box>
    </Card>
  );
};

export default Hora;
