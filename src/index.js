import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from './App';
import Users from "./users";
import Contact from "./contact";
import Notfound from "./notfound";
import Header from './header';
import Footer from './footer';

const routing = (
  <Router>
    <div>
      <Header />
      <hr />
      <Routes>
        <Route exact path="/" component={App} />
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));