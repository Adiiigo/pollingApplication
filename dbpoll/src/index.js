import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import SocketClient from "./SocketClient";
import 'bootstrap/dist/css/bootstrap.min.css';
//import PollQuestions from './component/layout/MyPolls';
import App from "./App";


//import * as serviceWorker from "./serviceWorker";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";


ReactDOM.render(<App/>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about servyice workers: https://bit.ly/CRA-PWA
//serviceWorker.routing
