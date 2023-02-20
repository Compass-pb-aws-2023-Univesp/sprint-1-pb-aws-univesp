class ValidaDados {

  /* O método validaNome avalia se a string nome contém somente caracteres válidos para um nome de pessoa.
  Nomes com acento e com o caracter "ç" são aceitos.
     
  Se o nome for válido, escreve o nome no console. Caso contrário, retorna uma mensagem de erro.*/
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

  /* O método validaEmail avalia se a string email possui um padrão válido para um endereço de email.
  São aceitos somente os tipos de domínio .com .edu. .net e .org
     
  Se o email for válido, escreve no console somente em letras minúsculas. Caso contrário, retorna uma mensagem de erro.*/
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

  /* O método validaTelefone avalia se a string telefone está no formato exigido: (NN)NNNN-NNNN
     
  Se o telefone for válido, escreve no console o telefone informado. Caso contrário, retorna uma mensagem de erro.*/
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
} while (ValidaDados.validaNome(nome) == 0);

do {
  email = prompt("Digite um endereço de email válido:");
} while (ValidaDados.validaEmail(email) == 0);

do {
  telefone = prompt("Digite seu número de telefone no formato (NN)NNNN-NNNN");
} while (ValidaDados.validaTelefone(telefone) == 0);


console.log('Cadastro finalizado!');
alert('Cadastro finalizado!');