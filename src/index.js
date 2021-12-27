import React from "react";
import ReactDOM from "react-dom";
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
//router
import { BrowserRouter } from 'react-router-dom';

import App from "./App";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
