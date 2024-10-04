import React, { useState } from 'react';

// Simulación simplificada de DSA (sin cambios)
const simulateDSA = {
  generateKeys: () => {
    const privateKey = Math.floor(Math.random() * 1000000).toString(16);
    const publicKey = Math.floor(Math.random() * 1000000).toString(16);
    return { privateKey, publicKey };
  },
  sign: (data, privateKey) => {
    const hash = btoa(JSON.stringify(data));
    return hash + privateKey;
  },
  verify: (data, signature, publicKey) => {
    const hash = btoa(JSON.stringify(data));
    return signature.startsWith(hash);
  }
};

const LoginForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    correo: '',
    direccion: '',
    numeroTarjeta: ''
  });
  const [keys, setKeys] = useState(null);
  const [signature, setSignature] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenerateKeys = () => {
    const newKeys = simulateDSA.generateKeys();
    setKeys(newKeys);
  };

  const handleSign = () => {
    if (!keys) {
      alert('Primero debe generar las claves');
      return;
    }
    const newSignature = simulateDSA.sign(formData, keys.privateKey);
    setSignature(newSignature);
  };

  const handleVerify = () => {
    if (!keys || !signature) {
      alert('Debe generar claves y firmar los datos primero');
      return;
    }
    const result = simulateDSA.verify(formData, signature, keys.publicKey);
    setVerificationResult(result);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <div style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
        <h2>Formulario de Login</h2>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <input name="nombre" placeholder="Nombre" onChange={handleChange} />
          <input name="telefono" placeholder="Teléfono" onChange={handleChange} />
          <input name="correo" placeholder="Correo" type="email" onChange={handleChange} />
          <input name="direccion" placeholder="Dirección" onChange={handleChange} />
          <input name="numeroTarjeta" placeholder="Número de Tarjeta" onChange={handleChange} />
        </form>
      </div>

      <div style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
        <h2>Simulación DSA</h2>
        <button onClick={handleGenerateKeys} style={{ marginRight: '10px', marginBottom: '10px' }}>Generar Claves</button>
        <button onClick={handleSign} style={{ marginRight: '10px', marginBottom: '10px' }}>Firmar Datos</button>
        <button onClick={handleVerify} style={{ marginBottom: '10px' }}>Verificar Firma</button>
        
        {keys && (
          <div style={{ marginTop: '10px', overflowWrap: 'break-word', wordBreak: 'break-all' }}>
            <p><strong>Clave Pública:</strong> {keys.publicKey}</p>
            <p><strong>Clave Privada:</strong> {keys.privateKey}</p>
          </div>
        )}
        
        {signature && (
          <div style={{ marginTop: '10px', overflowWrap: 'break-word', wordBreak: 'break-all' }}>
            <p><strong>Firma:</strong> {signature}</p>
          </div>
        )}
        
        {verificationResult !== null && (
          <div style={{ marginTop: '10px' }}>
            <p><strong>Resultado de la verificación:</strong> {verificationResult ? 'Válida' : 'Inválida'}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginForm;