import React from "react";
import { Routes, Route } from 'react-router-dom';
import routes from './routes';
import Nav from './components/base/Nav';
import Footer from './components/base/Footer';
import "./style.css";

export default function App() {
  return (
    <>
      <Nav />
      <div className="container my-5">
        <div className="row">
        <div className="col-sm-12 min-vh-100">
          <Routes>
            {routes.map((item, index) => (
              <Route key={index} path={item.path} element={<item.element />} />
            ))}
          </Routes>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
