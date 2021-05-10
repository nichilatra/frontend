import { BrowserRouter as Router, Route } from "react-router-dom";
import ContainerLogin from "./login/ContainerLogin";
import ContainerRegister from "./register/ContainerRegister";
import ContainerDashboard from "../components/dashboard/ContainerDashboard"

const Main = (props) => {
  return (
    <>
      <Router>
        <Route exact path="/login">
          <ContainerLogin></ContainerLogin>
        </Route>
        <Route exact path="/registro">
          <ContainerRegister></ContainerRegister>
        </Route>
        <Route exact path="/dashboard">
          <ContainerDashboard></ContainerDashboard>
        </Route>
      </Router>
    </>
  );
};

export default Main;
