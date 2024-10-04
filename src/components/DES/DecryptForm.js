// src/components/DecryptForm.js
import React, { useState } from 'react';
import { decryptData } from './crypto'; // Asegúrate de que la ruta sea correcta
import DecryptDisplay from './DecryptDisplay'; // Importa el nuevo componente

const DecryptForm = () => {
    const [ciphertext, setCiphertext] = useState('');
    const [decryptedData, setDecryptedData] = useState(null);

    const handleDecrypt = () => {
        try {
            const decrypted = decryptData(ciphertext);
            setDecryptedData(decrypted);
        } catch (error) {
            setDecryptedData("Error al descifrar. Asegúrate de que el texto cifrado sea correcto.");
        }
    };

    return (
        <div className="decrypt-container">
            <h3>Descifrar Texto</h3>
            <textarea 
                placeholder="Introduce el texto cifrado aquí" 
                value={ciphertext} 
                onChange={(e) => setCiphertext(e.target.value)} 
                rows="5"
            />
            <button onClick={handleDecrypt}>Descifrar</button>

            {/* Usar el componente DecryptDisplay para mostrar los datos descifrados */}
            <DecryptDisplay decryptedData={decryptedData} />
        </div>
    );
};

export default DecryptForm;
