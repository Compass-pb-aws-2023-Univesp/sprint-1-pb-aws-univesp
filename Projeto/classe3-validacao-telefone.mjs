/* Crie uma classe para validar um número de telefone válido no formato (NN)NNNN-NNNN */

import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

class ValidatorTelefone {
  static validar(numTelefone) {
    const regex = /^\(\d{2}\)\d{4}-\d{4}$/;
    if (regex.test(numTelefone)) {
      return numTelefone;
    } else {
      throw new Error("Número de telefone inválido. Por favor, insira no formato (NN)NNNN-NNNN");
    }
  }
}

/* Chamada a classe3: ValidadorDeTelefone */

rl.question('Insira o número de telefone no formato (NN)NNNN-NNNN: ', (numTelefone) => {
  try {
    const TelefoneValidado = ValidatorTelefone.validar(numTelefone);
    console.log(`Número de telefone válido: ${TelefoneValidado}`);
  } catch (error) {
    console.error(error.message);
  }
  rl.close();
});