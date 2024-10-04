// CaesarLogin.js
import React, { useState } from 'react';

const CaesarLoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    message: ''
  });
  const [shift, setShift] = useState(3);
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');

  // Función de cifrado César
  const caesarEncrypt = (text, shift) => {
    return text
      .split('')
      .map(char => {
        // Si es una letra
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

  // Función de descifrado César
  const caesarDecrypt = (text, shift) => {
    return caesarEncrypt(text, 26 - shift);
  };

  // Componente para visualizar el proceso de cifrado/descifrado
  const CaesarVisualizer = ({ text, shift, type }) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const shiftedAlphabet = alphabet.slice(shift) + alphabet.slice(0, shift);

    return (
      <div style={styles.visualizerContainer}>
        <h4>{type === 'encrypt' ? 'Proceso de Cifrado' : 'Proceso de Descifrado'}</h4>
        <div style={styles.alphabetContainer}>
          <div style={styles.alphabetRow}>
            <span style={styles.rowLabel}>Alfabeto Original:</span>
            {alphabet.split('').map((letter, i) => (
              <span key={i} style={styles.letter}>{letter}</span>
            ))}
          </div>
          <div style={styles.alphabetRow}>
            <span style={styles.rowLabel}>Alfabeto Desplazado:</span>
            {shiftedAlphabet.split('').map((letter, i) => (
              <span key={i} style={styles.letter}>{letter}</span>
            ))}
          </div>
        </div>
        <div style={styles.transformationContainer}>
          <div style={styles.transformRow}>
            <span style={styles.rowLabel}>Texto Original:</span>
            {text.split('').map((char, i) => (
              <span key={i} style={styles.transformChar}>
                {char.match(/[a-z]/i) ? char : '·'}
              </span>
            ))}
          </div>
          <div style={styles.transformRow}>
            <span style={styles.rowLabel}>Texto {type === 'encrypt' ? 'Cifrado' : 'Descifrado'}:</span>
            {text.split('').map((char, i) => {
              const transformed = type === 'encrypt' 
                ? caesarEncrypt(char, shift)
                : caesarDecrypt(char, shift);
              return (
                <span key={i} style={styles.transformChar}>
                  {char.match(/[a-z]/i) ? transformed : '·'}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const textToEncrypt = JSON.stringify(formData);
    const encrypted = caesarEncrypt(textToEncrypt, shift);
    setEncryptedText(encrypted);
    
    // Demostrar el descifrado
    const decrypted = caesarDecrypt(encrypted, shift);
    setDecryptedText(decrypted);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login con Cifrado César</h2>
      
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
          <div style={styles.shiftControl}>
            <label>Desplazamiento (1-25): </label>
            <input
              type="number"
              min="1"
              max="25"
              value={shift}
              onChange={(e) => setShift(parseInt(e.target.value))}
              style={styles.shiftInput}
            />
          </div>
          <button style={styles.button} type="submit">Cifrar</button>
        </form>
      </div>

      {encryptedText && (
        <div style={styles.section}>
          <h3>Visualización del Proceso</h3>
          
          {/* Visualización del proceso de cifrado */}
          <CaesarVisualizer 
            text={JSON.stringify(formData)}
            shift={shift}
            type="encrypt"
          />

          {/* Resultado del cifrado */}
          <div style={styles.resultBox}>
            <h4>Texto Cifrado:</h4>
            <p style={styles.cipherText}>{encryptedText}</p>
          </div>

          {/* Visualización del proceso de descifrado */}
          <CaesarVisualizer 
            text={encryptedText}
            shift={shift}
            type="decrypt"
          />

          {/* Resultado del descifrado */}
          <div style={styles.resultBox}>
            <h4>Texto Descifrado:</h4>
            <p style={styles.cipherText}>{decryptedText}</p>
          </div>
        </div>
      )}

      <div style={styles.section}>
        <h3>¿Cómo funciona el Cifrado César?</h3>
        <div style={styles.explanationGrid}>
          <div style={styles.explanationBox}>
            <h4>Paso 1: Desplazamiento</h4>
            <p>Cada letra del mensaje se desplaza un número fijo de posiciones en el alfabeto.</p>
          </div>
          <div style={styles.explanationBox}>
            <h4>Paso 2: Sustitución</h4>
            <p>Las letras originales son reemplazadas por las letras desplazadas.</p>
          </div>
          <div style={styles.explanationBox}>
            <h4>Paso 3: Descifrado</h4>
            <p>Para descifrar, se aplica el desplazamiento en dirección contraria.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  title: {
    textAlign: 'center',
    color: '#2c3e50'
  },
  section: {
    marginBottom: '20px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9'
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '16px'
  },
  shiftControl: {
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  shiftInput: {
    width: '60px',
    padding: '5px',
    borderRadius: '4px',
    border: '1px solid #ddd'
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s'
  },
  visualizerContainer: {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '8px',
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  alphabetContainer: {
    marginBottom: '20px'
  },
  alphabetRow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    overflowX: 'auto',
    padding: '10px',
    backgroundColor: '#f8f9fa',
    borderRadius: '4px'
  },
  letter: {
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #dee2e6',
    margin: '0 2px',
    backgroundColor: '#fff',
    fontFamily: 'monospace',
    fontSize: '14px'
  },
  transformationContainer: {
    marginTop: '20px'
  },
  transformRow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    overflowX: 'auto',
    padding: '10px',
    backgroundColor: '#f8f9fa',
    borderRadius: '4px'
  },
  transformChar: {
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #dee2e6',
    margin: '0 2px',
    backgroundColor: '#fff',
    fontFamily: 'monospace',
    fontSize: '14px'
  },
  rowLabel: {
    minWidth: '150px',
    fontWeight: 'bold',
    marginRight: '10px'
  },
  resultBox: {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '8px',
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  cipherText: {
    fontFamily: 'monospace',
    wordBreak: 'break-all',
    backgroundColor: '#f8f9fa',
    padding: '10px',
    borderRadius: '4px'
  },
  explanationGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    marginTop: '20px'
  },
  explanationBox: {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }
};

export default CaesarLoginForm;