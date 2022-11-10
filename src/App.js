import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import ClientPage from "./pages/ClientPage";
import PrestationPage from "./pages/PrestationPage";
import HomePage from "./pages/HomePage";
import {
    Routes,
    Route,
} from "react-router-dom"
import LoginPage from "./pages/LoginPage";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"


function App() {
  return (
    <div className="App">
     <Navbar/>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/prestation" element={<PrestationPage/>}/>
                <Route path="/Client" element={<ClientPage/>}/>
            </Routes>
    <ToastContainer/>
    </div>
  );
}

export default App;
