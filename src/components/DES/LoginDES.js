// src/components/LoginDES.js
import React, { useState } from 'react';
import { encryptData } from './crypto'; // Asegúrate de que esta ruta sea correcta
import DecryptForm from './DecryptForm'; // Importa el nuevo componente
import './LoginDES.css'; // Asegúrate de que esta ruta sea correcta

const LoginDES = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        correo: '',
        direccion: '',
        numeroTarjeta: ''
    });
    const [ciphertext, setCiphertext] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleEncrypt = () => {
        const encrypted = encryptData(formData);
        setCiphertext(encrypted);
    };

    return (
        <div className="login-container">
            <h2>Formulario de Login con DES</h2>
            <form className="login-form">
                <input 
                    type="text" 
                    name="nombre" 
                    placeholder="Nombre" 
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="text" 
                    name="telefono" 
                    placeholder="Teléfono" 
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="email" 
                    name="correo" 
                    placeholder="Correo" 
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="text" 
                    name="direccion" 
                    placeholder="Dirección" 
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="text" 
                    name="numeroTarjeta" 
                    placeholder="Número de Tarjeta" 
                    onChange={handleChange} 
                    required 
                />
                
                <button type="button" onClick={handleEncrypt}>Cifrar</button>

                {ciphertext && (
                    <div className="ciphertext-display">
                        <h3>Texto Cifrado:</h3>
                        <p>{ciphertext}</p>
                    </div>
                )}
            </form>
            <DecryptForm /> {/* Agregar el componente de descifrado aquí */}
        </div>
    );
};

export default LoginDES;
