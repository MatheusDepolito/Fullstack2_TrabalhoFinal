import express from 'express';
import cors from 'cors';

import rotaCandidato from './Rotas/rotaCandidato.js';
import rotaVaga from './Rotas/rotaVaga.js';
import rotaInscricao from './Rotas/rotaInscricao.js';

import dotenv from 'dotenv';

import path from 'path';

const host = "0.0.0.0";
const porta = "4000"

dotenv.config();
//console.log(process.env);
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/candidatos', rotaCandidato);
app.use('/vagas', rotaVaga);
app.use('/inscricoes', rotaInscricao);

app.listen(porta, host, ()=>{
    console.log(`inicio`);
    console.log(`http://${host}:${porta}`);
});