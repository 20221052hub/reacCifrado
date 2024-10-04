// src/components/DSA/VerifySignature.js
import React from 'react';
import forge from 'node-forge';

const VerifySignature = ({ publicKey, data, signature }) => {
    const handleVerify = () => {
        const md = forge.md.sha256.create();
        md.update(JSON.stringify(data), 'utf8');
        
        const decodedSignature = forge.util.decode64(signature);
        const verified = publicKey.verify(md.digest().bytes(), decodedSignature);
        alert(`Firma ${verified ? 'válida' : 'inválida'}`);
    };

    return (
        <div>
            <button type="button" onClick={handleVerify}>Verificar Firma</button>
        </div>
    );
};

export default VerifySignature;
