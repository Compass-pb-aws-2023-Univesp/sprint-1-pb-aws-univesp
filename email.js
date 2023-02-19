class Email {

  static validaEmail(email) {

    // Regex do email precisa de mais testes
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

}



do {
  email = prompt("Digite um endereço de email válido:");
  e = validaDados.validaEmail(email);
} while (e == 0);


