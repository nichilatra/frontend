import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Dashboard from "./Dashboard";
import Users from "./Users";

// ***************** Estilos ****************
const estiloMenu = {
  position: "fixed",
  flexDirection: "row",
  alignItems: "inherit",
  justifyContent: "space-between",
};

const Container = (props) => {
  const [dashboard, setDashboard] = useState(true);

  const renderVentana=()=>{
    if(dashboard){
      return <Dashboard></Dashboard>
    }else{
      return <Users></Users>
    }
  }

  return (
    <Box>
      <AppBar style={estiloMenu}>
        <Box>
          <Button onClick={() => setDashboard(true)} color="inherit">
            Dashboard
          </Button>
          <Button onClick={() => setDashboard(false)} color="inherit">
            Usuario
          </Button>
        </Box>
        <Box display="flex" alignItems="center">
          <Avatar alt="Test">NN</Avatar>
          <Typography variant="h6" align="left">
            Nombre Apellido
          </Typography>
        </Box>
      </AppBar>
      {renderVentana()}
    </Box>
  );
};

export default Container;
