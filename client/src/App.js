import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import "./App.css";
import Home from "./pages/Home";
import Toolbar from "./components/Toolbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Service from "./pages/Service";
import About from "./pages/About";
import NewDoors from "./pages/NewDoors";

const styles = {
  body: {
    flex: 1,
  }
};

const App = () => {
  return (
    <Router>
      <div style={styles.body}>
      <Toolbar />
      <Navbar />
      <Switch>
        <Route exact path={["/", "/home"]}>
          <Home />
        </Route>
        <Route exact path={["/service"]}>
          <Service />
        </Route>
        <Route exact path={["/new-doors"]}>
          <NewDoors />
        </Route>
        <Route exact path={["/about"]}>
          <About />
        </Route>
      </Switch> 
      </div>
      <Footer />
    </ Router>
  );
}
export default App;