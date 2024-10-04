import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginDES from './components/DES/LoginDES';
import LoginDSA from './components/DSA/LoginDSA';
import LoginSHA1 from './components/SHA/LoginSHA1';
import Logins from './components/Escítala';
import Logins2 from './components/Cesar';
import Home from './components/home';
import Justificacion from './components/justificacion';

function App() {
    return (
        <Router>
            <div className="App">
                <nav className="navbar">
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/des">Login con DES</Link></li>
                        <li><Link to="/dsa">Login con DSA</Link></li>
                        <li><Link to="/sha1">Login con SHA-1</Link></li>
                        <li><Link to="/login">Cifrado Escítala</Link></li>
                        <li><Link to="/login2">Cifrado Cesar</Link></li>
                        <li><Link to="/justificacion">Justificación</Link></li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/des" element={<LoginDES />} />
                    <Route path="/dsa" element={<LoginDSA />} />
                    <Route path="/sha1" element={<LoginSHA1 />} />
                    <Route path="/login" element={<Logins />} />
                    <Route path="/login2" element={<Logins2 />} />
                    <Route path="/justificacion" element={<Justificacion />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;