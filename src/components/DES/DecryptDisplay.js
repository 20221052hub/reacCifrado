// src/components/DecryptDisplay.js
import React from 'react';

const DecryptDisplay = ({ decryptedData }) => {
    return (
        <div className="decrypted-display">
            <h4>Datos Descifrados:</h4>
            {decryptedData ? (
                <pre>{JSON.stringify(decryptedData, null, 2)}</pre>
            ) : (
                <p>No hay datos descifrados disponibles.</p>
            )}
        </div>
    );
};

export default DecryptDisplay;
