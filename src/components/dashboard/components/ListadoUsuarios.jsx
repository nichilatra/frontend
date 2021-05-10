import Box from "@material-ui/core/Box";
import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const estiloContenedor = {
  width: "750px",
  marginTop: "70px",
  backgroundColor: "#ECEFF1",
};

const estiloInfoClima = {
  display: "flex",
  height: "500px",
  alignItems: "center",
  justifyContent: "space-around",
};

const ListadoUsuarios = (props) => {
  const { datosUsuarios } = props;
  return (
    <Card style={estiloContenedor}>
      <CardHeader title="Sesiones de usuario"></CardHeader>
      <Divider style={{ background: "#64B5F6" }}></Divider>
      <Box style={estiloInfoClima}>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell align="right">Correo</TableCell>
                <TableCell align="right">Fecha creacion</TableCell>
                <TableCell align="right">Ultimo Login</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {datosUsuarios.map((usuario) => {
                return (
                  <TableRow key={usuario.correo}>
                    <TableCell component="th" scope="row">
                      {usuario.nombre}
                    </TableCell>
                    <TableCell align="right">{usuario.correo}</TableCell>
                    <TableCell align="right">{usuario.fechaCreacion}</TableCell>
                    <TableCell align="right">
                      {usuario.fechaUltimoLogin}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Card>
  );
};

export default ListadoUsuarios;
