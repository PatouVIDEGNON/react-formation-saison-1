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



function App() {
  return (
    <div className="App">
     <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/prestation" element={<PrestationPage/>}/>
                <Route path="/Client" element={<ClientPage/>}/>
            </Routes>

    </div>
  );
}

export default App;
