// src/components/Home.js
import React from 'react';
import './css/home.css';
 
import './css/index.css'; 
const Home = () => {
    return (
        <div className="home">
            <header className="App-header">
        <h1>Bienvenido a la Guía de Cifrados</h1>
        <p>
          Explora algunos de los algoritmos de cifrado más importantes en la historia de la criptografía. Aprende cómo funcionan y para qué se utilizan.
        </p>
      </header>
      <main className="App-content">
        <section className="cipher">
          <h2>DES (Data Encryption Standard)</h2>
          <p>
            El <strong>DES</strong> es un algoritmo de cifrado simétrico que utiliza una clave de 56 bits para cifrar bloques de 64 bits de información. Fue adoptado como un estándar en 1977 por el gobierno de los EE. UU. y ampliamente utilizado en la industria. Aunque es eficiente en hardware, su clave corta lo hace vulnerable a ataques de fuerza bruta modernos, y por eso ha sido reemplazado por AES (Advanced Encryption Standard).
          </p>
          <p><strong>Uso actual:</strong> En aplicaciones donde la compatibilidad con sistemas antiguos es necesaria, aunque en general ya ha sido reemplazado por AES.</p>
        </section>

        <section className="cipher">
          <h2>DSA (Digital Signature Algorithm)</h2>
          <p>
            El <strong>DSA</strong> es un algoritmo utilizado para la creación de firmas digitales. A diferencia de los cifrados simétricos, DSA garantiza la autenticidad del remitente del mensaje mediante una clave privada, y la firma se verifica con la clave pública correspondiente. Fue propuesto por el Instituto Nacional de Estándares y Tecnología de EE. UU. en 1991 como parte del DSS (Digital Signature Standard).
          </p>
          <p><strong>Uso actual:</strong> Se emplea en sistemas de autenticación, firmas electrónicas, y en infraestructura de clave pública (PKI).</p>
        </section>

        <section className="cipher">
          <h2>SHA-1 (Secure Hash Algorithm 1)</h2>
          <p>
            <strong>SHA-1</strong> es un algoritmo de hash criptográfico que genera un resumen de 160 bits a partir de cualquier entrada de datos. Se utiliza comúnmente para verificar la integridad de la información. Aunque en su momento fue un estándar muy utilizado, ataques recientes han mostrado vulnerabilidades, por lo que ya no se recomienda para aplicaciones críticas.
          </p>
          <p><strong>Uso actual:</strong> Se encuentra en desuso para la mayoría de las aplicaciones de seguridad, reemplazado por SHA-256 y otros algoritmos más seguros.</p>
        </section>

        <section className="cipher">
          <h2>Escítala</h2>
          <p>
            La <strong>Escítala</strong> es un cifrado antiguo utilizado por los espartanos en tiempos de guerra. Consistía en una vara de madera alrededor de la cual se enrollaba una tira de cuero o pergamino. El mensaje se escribía en esta tira, y solo podía leerse cuando se volvía a enrollar en una vara de tamaño idéntico, lo que proporcionaba una forma rudimentaria de cifrado por transposición.
          </p>
          <p><strong>Uso actual:</strong> Prácticamente obsoleto, pero se estudia como una de las primeras formas de cifrado.</p>
        </section>

        <section className="cipher">
          <h2>Cifrado César</h2>
          <p>
            El <strong>Cifrado César</strong> es una técnica de cifrado por sustitución utilizada por Julio César para proteger sus mensajes. Cada letra del texto es desplazada un número fijo de posiciones en el alfabeto. Aunque es un cifrado sencillo, puede ser fácilmente roto mediante análisis de frecuencia.
          </p>
          <p><strong>Uso actual:</strong> Se utiliza más como un ejemplo educativo en la enseñanza de criptografía básica.</p>
        </section>
      </main>
      <footer className="App-footer">
        <p>© 2024 Guía de Cifrados <br></br>Hecho por Alan Cabrera 7"A"</p>
      </footer>
    </div>
  );
}

export default Home;
