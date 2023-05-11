import React from "react";
import { Route, Switch } from "react-router-dom";
import AppContextProvider from "./AppContext";
import "./App.css";
import "./Layout.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Error from "./pages/Error";
import Main from "./pages/Main";

function App() {
  return (
    <AppContextProvider>
      <Loader />
      <Header />
      <Switch>
        <Route exact path="/about">
          <Main page="about" />
        </Route>
        <Route exact path="/contact">
          <Main page="contact" />
        </Route>
        <Route exact path="/blog">
          <Main page="blog" />
        </Route>
        <Route exact path="/service">
          <Main page="service" />
        </Route>
        <Route exact path="/">
          <Main page="home" />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </AppContextProvider>
  );
}

export default App;
