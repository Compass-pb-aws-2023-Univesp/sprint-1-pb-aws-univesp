/*  chamadas aos métodos de validação criados  */

/* Chamada a classe1: ValidadorDeNome */

import {ValidadorDeNome} from './classe1-validacao-com-regex.mjs';

const nome = 'BARBARA';
  if (ValidadorDeNome.validar(nome)) {
    console.log(`Acesso permitido para: ${nome}`);}
     else {
    console.log(`Erro: não é um nome válido!`);}