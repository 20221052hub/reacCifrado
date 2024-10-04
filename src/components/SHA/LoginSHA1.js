import React, { useState } from 'react';

// Simulación simplificada de SHA-1
const simulateSHA1 = (data) => {
  const str = JSON.stringify(data);
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return hash.toString(16).padStart(40, '0');
};

const LoginForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    correo: '',
    direccion: '',
    numeroTarjeta: ''
  });
  const [hash, setHash] = useState('');
  const [verificationData, setVerificationData] = useState({});
  const [verificationResult, setVerificationResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenerateHash = () => {
    const newHash = simulateSHA1(formData);
    setHash(newHash);
    setVerificationData({ ...formData }); // Copia los datos originales al formulario de verificación
  };

  const handleVerificationChange = (e) => {
    setVerificationData({ ...verificationData, [e.target.name]: e.target.value });
  };

  const handleVerify = () => {
    const verificationHash = simulateSHA1(verificationData);
    setVerificationResult(verificationHash === hash);
  };

  const sectionStyle = {
    marginBottom: '20px',
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9'
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc'
  };

  const buttonStyle = {
    padding: '10px 15px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Simulación de SHA-1</h1>
      
      <div style={sectionStyle}>
        <h2>Paso 1: Ingrese los datos originales</h2>
        <form>
          <input name="nombre" placeholder="Nombre" onChange={handleChange} style={inputStyle} />
          <input name="telefono" placeholder="Teléfono" onChange={handleChange} style={inputStyle} />
          <input name="correo" placeholder="Correo" type="email" onChange={handleChange} style={inputStyle} />
          <input name="direccion" placeholder="Dirección" onChange={handleChange} style={inputStyle} />
          <input name="numeroTarjeta" placeholder="Número de Tarjeta" onChange={handleChange} style={inputStyle} />
        </form>
        <button onClick={handleGenerateHash} style={buttonStyle}>Generar Hash SHA-1</button>
      </div>

      {hash && (
        <div style={sectionStyle}>
          <h2>Paso 2: Hash SHA-1 Generado</h2>
          <p style={{ wordBreak: 'break-all', backgroundColor: '#e9e9e9', padding: '10px', borderRadius: '4px' }}>{hash}</p>
        </div>
      )}

      <div style={sectionStyle}>
        <h2>Paso 3: Verificación de Integridad</h2>
        <p>Modifique los datos si desea simular un cambio en la información:</p>
        <form>
          <input name="nombre" placeholder="Nombre" value={verificationData.nombre || ''} onChange={handleVerificationChange} style={inputStyle} />
          <input name="telefono" placeholder="Teléfono" value={verificationData.telefono || ''} onChange={handleVerificationChange} style={inputStyle} />
          <input name="correo" placeholder="Correo" type="email" value={verificationData.correo || ''} onChange={handleVerificationChange} style={inputStyle} />
          <input name="direccion" placeholder="Dirección" value={verificationData.direccion || ''} onChange={handleVerificationChange} style={inputStyle} />
          <input name="numeroTarjeta" placeholder="Número de Tarjeta" value={verificationData.numeroTarjeta || ''} onChange={handleVerificationChange} style={inputStyle} />
        </form>
        <button onClick={handleVerify} style={buttonStyle}>Verificar Integridad</button>
        
        {verificationResult !== null && (
          <div style={{ marginTop: '10px', padding: '10px', backgroundColor: verificationResult ? '#dff0d8' : '#f2dede', borderRadius: '4px' }}>
            <p style={{ margin: 0, color: verificationResult ? 'green' : 'red' }}>
              Resultado de la verificación: {verificationResult ? 'Datos íntegros (no modificados)' : 'Datos modificados'}
            </p>
          </div>
        )}
      </div>

      <div style={sectionStyle}>
        <h2>Descripción del Proceso SHA-1</h2>
        <ol style={{ paddingLeft: '20px' }}>
          <li>El usuario ingresa los datos en el formulario inicial.</li>
          <li>Al hacer clic en "Generar Hash SHA-1", se crea un hash único de 160 bits (40 caracteres hexadecimales) basado en los datos ingresados.</li>
          <li>Este hash actúa como una "huella digital" de los datos originales.</li>
          <li>Para verificar la integridad, se puede modificar o no los datos en el segundo formulario.</li>
          <li>Al hacer clic en "Verificar Integridad", se genera un nuevo hash de estos datos y se compara con el hash original.</li>
          <li>Si los hashes coinciden, significa que los datos no han sido modificados. Si son diferentes, indica que ha habido cambios.</li>
        </ol>
        <p><strong>Nota importante:</strong> Esta es una simulación simplificada con fines educativos. En aplicaciones reales, SHA-1 se considera débil y se prefieren algoritmos más seguros como SHA-256 o SHA-3.</p>
      </div>
    </div>
  );
};

export default LoginForm;