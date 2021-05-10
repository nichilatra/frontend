import Box from "@material-ui/core/Box";
import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

// ***************** Estilos ****************
const estiloContenedor = {
  width: "auto",
  marginTop: "50px",
  marginRight: "50px",
  backgroundColor: "#ECEFF1",
};

const estiloInfoPais = {
  height: "200px",
  alignItems: "center",
  justifyContent: "space-around",
  overflow: "auto",
};

const ListaPaises = (props) => {
  // funcion que captura los datos
  const { obtenerPaisSeleccionado, listadoPaises } = props;
  // uso de hooks para manejar el estado
  console.log(listadoPaises);
  const renderListaPaises = (list) => {
    return (
      <List>
        {list.map((item) => (
          <>
            <ListItem
              button
              key={item}
              onClick={() => {
                obtenerPaisSeleccionado(item);
              }}
            >
              <ListItemText key={item} primary={item} />
            </ListItem>
            <Divider style={{ background: "black" }}></Divider>
          </>
        ))}
      </List>
    );
  };

  return (
    <Card style={estiloContenedor}>
      <CardHeader
        title={"Paises disponibles"}
      ></CardHeader>
      <Divider style={{ background: "#64B5F6" }}></Divider>
      <Box style={estiloInfoPais}>
        <Box>{renderListaPaises(listadoPaises)}</Box>
      </Box>
    </Card>
  );
};

export default ListaPaises;
