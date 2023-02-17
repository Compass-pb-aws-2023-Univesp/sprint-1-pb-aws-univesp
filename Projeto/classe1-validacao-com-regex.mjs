/* Crie uma classe para validar com regex se um nome só contêm letras maiúsculas e minúsculas */

import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});


class ValidatorNome {
  static validar(nome) {
    const regex = /^[a-zA-Z]+$/;
    if (regex.test(nome)) {
      return nome;
    } else {
      throw new Error('O nome deve conter apenas letras maiúsculas e minúsculas.');
    }
  }
}

/* Chamada a classe1: ValidadorDeNome */

rl.question('Digite seu nome: ', (nome) => {
  try {
    const nomeValidado = ValidatorNome.validar(nome);
    console.log(`Nome validado: ${nomeValidado}`);
  } catch (error) {
    console.error(error.message);
  } finally {
    rl.close();
  }
});