class validaDados {

  static validaNome(nome) {
    if (/^[a-zA-ZÀ-ú\sçÇ]+$/.test(nome)) {
        console.log('Nome informado:\n\n'+ nome);
        alert('Nome informado:\n\n'+ nome);
        return 1;

    } else {
        console.log('O nome informado não é válido! Tente novamente.');
        alert('O nome informado não é válido! Tente novamente.');
        return 0;
    }


  }
}


do {
  nome = prompt("Digite o seu nome:");
  n = validaDados.validaNome(nome);
} while (n == 0);


let email = prompt("Digite um endereço de email válido:");
//console.log(validaDados.validaEmail(email));

//^[a-z0-9._%+-]+@[a-z0-9.-]+\.com

let telefone = prompt("Digite seu número de telefone no formato (NN)NNNN-NNNN :");
//console.log(validaDados.validaTelefone(telefone));

// ^\(\d{2}\)\d{4}-\d{4}$/++
// teste
