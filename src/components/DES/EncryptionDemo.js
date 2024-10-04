// src/LoginForm.js
import React, { useState } from 'react';
import { encryptData, decryptData } from './crypto';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        correo: '',
        direccion: '',
        numeroTarjeta: ''
    });
    const [ciphertext, setCiphertext] = useState('');
    const [decryptedData, setDecryptedData] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleEncrypt = () => {
        const encrypted = encryptData(formData);
        setCiphertext(encrypted);
    };

    const handleDecrypt = () => {
        const decrypted = decryptData(ciphertext);
        setDecryptedData(decrypted);
    };

    return (
        <div>
            <h2>Formulario de Login</h2>
            <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} />
            <input type="text" name="telefono" placeholder="Teléfono" onChange={handleChange} />
            <input type="email" name="correo" placeholder="Correo" onChange={handleChange} />
            <input type="text" name="direccion" placeholder="Dirección" onChange={handleChange} />
            <input type="text" name="numeroTarjeta" placeholder="Número de Tarjeta" onChange={handleChange} />
            
            <button onClick={handleEncrypt}>Cifrar</button>

            {ciphertext && (
                <div>
                    <h3>Texto Cifrado:</h3>
                    <p>{ciphertext}</p>
                    <button onClick={handleDecrypt}>Descifrar</button>
                </div>
            )}

            {decryptedData && (
                <div>
                    <h3>Datos Descifrados:</h3>
                    <pre>{JSON.stringify(decryptedData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default LoginForm;
