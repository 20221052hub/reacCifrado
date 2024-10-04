// EncryptionLogin.js
import React, { useState } from 'react';

// Funciones de utilidad para el cifrado César
const caesarEncrypt = (text, shift) => {
  return text
    .split('')
    .map(char => {
      if (char.match(/[a-z]/i)) {
        const code = char.charCodeAt(0);
        const isUpperCase = code >= 65 && code <= 90;
        const base = isUpperCase ? 65 : 97;
        return String.fromCharCode(
          ((code - base + shift) % 26) + base
        );
      }
      return char;
    })
    .join('');
};

const caesarDecrypt = (text, shift) => {
  return caesarEncrypt(text, 26 - shift);
};

// Componentes de visualización
const EncryptionMatrix = ({ text, diameter, type }) => {
  const rows = Math.ceil(text.length / diameter);
  const matrix = Array(rows).fill('').map(() => Array(diameter).fill(''));
  let k = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < diameter; j++) {
      matrix[i][j] = k < text.length ? text[k] : ' ';
      k++;
    }
  }

  return (
    <div style={styles.matrixContainer}>
      <h4>{type === 'encrypt' ? 'Proceso de Cifrado' : 'Proceso de Descifrado'}</h4>
      <div style={styles.matrix}>
        {matrix.map((row, i) => (
          <div key={i} style={styles.matrixRow}>
            {row.map((cell, j) => (
              <div key={`${i}-${j}`} style={styles.matrixCell}>
                {cell || '⋅'}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const CaesarVisualization = ({ text, shift, type }) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const shiftedAlphabet = alphabet.slice(shift) + alphabet.slice(0, shift);

  return (
    <div style={styles.caesarContainer}>
      <h4>{type === 'encrypt' ? 'Proceso de Cifrado' : 'Proceso de Descifrado'}</h4>
      <div style={styles.alphabetDisplay}>
        <div style={styles.alphabetRow}>
          <span style={styles.alphabetLabel}>Original:</span>
          {alphabet.split('').map((letter, i) => (
            <span key={i} style={styles.alphabetLetter}>{letter}</span>
          ))}
        </div>
        <div style={styles.alphabetRow}>
          <span style={styles.alphabetLabel}>Cifrado:</span>
          {shiftedAlphabet.split('').map((letter, i) => (
            <span key={i} style={styles.alphabetLetter}>{letter}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Componente Escítala
const ScytaleLoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    message: ''
  });
  const [diameter, setDiameter] = useState(4);
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');

  const scytaleEncrypt = (text, d) => {
    const rows = Math.ceil(text.length / d);
    const matrix = Array(rows).fill('').map(() => Array(d).fill(''));
    let k = 0;
    
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < d; j++) {
        matrix[i][j] = k < text.length ? text[k] : ' ';
        k++;
      }
    }
    
    let result = '';
    for (let j = 0; j < d; j++) {
      for (let i = 0; i < rows; i++) {
        result += matrix[i][j];
      }
    }
    
    return result.trim();
  };

  const scytaleDecrypt = (text, d) => {
    const rows = Math.ceil(text.length / d);
    return scytaleEncrypt(text, rows);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const textToEncrypt = JSON.stringify(formData);
    const encrypted = scytaleEncrypt(textToEncrypt, diameter);
    setEncryptedText(encrypted);
    
    const decrypted = scytaleDecrypt(encrypted, diameter);
    setDecryptedText(decrypted);
  };

  return (
    <div style={styles.container}>
      <h2>Login con Cifrado Escítala</h2>
      <div style={styles.section}>
        <h3>Ingrese sus datos</h3>
        <form onSubmit={handleSubmit}>
          <input
            style={styles.input}
            type="text"
            placeholder="Usuario"
            onChange={(e) => setFormData({...formData, username: e.target.value})}
          />
          <input
            style={styles.input}
            type="password"
            placeholder="Contraseña"
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
          <input
            style={styles.input}
            type="text"
            placeholder="Mensaje"
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          />
          <div style={styles.diameterControl}>
            <label>Diámetro de la Escítala: </label>
            <input
              type="number"
              min="2"
              max="8"
              value={diameter}
              onChange={(e) => setDiameter(parseInt(e.target.value))}
            />
          </div>
          <button style={styles.button} type="submit">Cifrar</button>
        </form>
      </div>

      {encryptedText && (
        <div style={styles.section}>
          <h3>Visualización del Proceso</h3>
          <EncryptionMatrix 
            text={JSON.stringify(formData)}
            diameter={diameter}
            type="encrypt"
          />
          <div style={styles.resultContainer}>
            <div style={styles.resultBox}>
              <h4>Texto Cifrado</h4>
              <p style={styles.encryptedText}>{encryptedText}</p>
            </div>
          </div>
          <div style={styles.resultBox}>
            <h4>Texto Descifrado</h4>
            <p style={styles.decryptedText}>{decryptedText}</p>
          </div>
        </div>
      )}
    </div>
  );
};

// Estilos
const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  section: {
    marginBottom: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9'
  },
  input: {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc'
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  matrixContainer: {
    margin: '20px 0',
    padding: '15px',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px'
  },
  matrix: {
    display: 'inline-block',
    border: '2px solid #666',
    padding: '10px',
    backgroundColor: 'white'
  },
  matrixRow: {
    display: 'flex',
    justifyContent: 'center'
  },
  matrixCell: {
    width: '30px',
    height: '30px',
    border: '1px solid #ccc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '2px',
    backgroundColor: '#fff',
    fontFamily: 'monospace'
  },
  resultContainer: {
    margin: '20px 0'
  },
  resultBox: {
    padding: '15px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    marginBottom: '10px'
  },
  encryptedText: {
    wordBreak: 'break-all',
    fontFamily: 'monospace'
  },
  decryptedText: {
    wordBreak: 'break-all',
    fontFamily: 'monospace'
  },
  diameterControl: {
    marginBottom: '10px'
  }
};

export default ScytaleLoginForm;