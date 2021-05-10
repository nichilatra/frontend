import axios from "axios";
var qs = require("qs");

async function peticionHttp(url, datos, metodo) {
  console.log(datos);
  let data = qs.stringify(datos);
  let config = {
    method: metodo,
    url: url,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };

  let response = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });

  return response;
}

async function peticionHttpConsumo(url, datos, metodo) {
  let token = sessionStorage.getItem("token")
  console.log("funcion peticion");
  console.log(token);
  let data = qs.stringify(datos);
  let config = {
    method: metodo,
    url: url,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "token":token
    },
    data: data,
  };

  let response = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });

  return response;
}

export { peticionHttp,peticionHttpConsumo };
