// src/crypto.js
import CryptoJS from 'crypto-js';

const secretKey = 'alan21'; // Cambia esto a una clave más segura

export const encryptData = (data) => {
    return CryptoJS.DES.encrypt(JSON.stringify(data), secretKey).toString();
};

export const decryptData = (ciphertext) => {
    const bytes = CryptoJS.DES.decrypt(ciphertext, secretKey);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};
