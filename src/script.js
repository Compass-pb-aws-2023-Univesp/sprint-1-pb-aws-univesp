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

  static validaEmail(email) {

    const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com|org|net|br|edu)$/;

    if (regexEmail.test(email)) {
        console.log('Email informado:\n\n' + email.toLowerCase());
        alert('Email informado:\n\n' + email.toLowerCase());
        return 1;

    } else {
        console.log('O email informado não é válido! Tente novamente.');
        alert('O email informado não é válido! Tente novamente.');
        return 0;
    }
  }

  static validaTelefone(telefone){ 
    
    const regexTelefone = /^\(\d{2}\)\d{4}-\d{4}$/;

    if (regexTelefone.test(telefone)) {
        console.log('Telefone informado:\n\n'+ telefone);
        alert('Telefone informado:\n\n'+ telefone);
        return 1;

    } else {
        console.log('O telefone informado não é válido! Tente novamente.');
        alert('O telefone informado não é válido! Tente novamente.');
        return 0;
    }
  }
}


do {
  nome = prompt("Digite o seu nome:");
} while (validaDados.validaNome(nome) == 0);

do {
  email = prompt("Digite um endereço de email válido:");
} while (validaDados.validaEmail(email) == 0);

do {
  telefone = prompt("Digite seu número de telefone no formato (NN)NNNN-NNNN");
} while (validaDados.validaTelefone(telefone) == 0);


console.log('Cadastro finalizado!');
alert('Cadastro finalizado!');