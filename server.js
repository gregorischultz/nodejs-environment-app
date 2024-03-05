// server.js
require('dotenv').config();

const name = process.env.MY_NAME || 'NomePadrao';
const city = process.env.MY_CITY || 'CidadePadrao';
const language = process.env.MY_LANGUAGE || 'LinguagemPadrao';

console.log(`I am ${name}, wilder in ${city}, and I love ${language}.`);
