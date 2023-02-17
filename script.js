class validaDados {
  static validaNome(nome) {
    if (/^[A-Z]+$/.test(nome)) {
      return alert('O nome contém somente letras maiúsculas.');
    } else if (/^[a-z]+$/.test(nome)) {
      return 'O nome contém somente letras minúsculas.';
    } else {
      return 'O nome contém caracteres que não são letras ou tem letras maiúsculas e minúsculas.';
    }
  }
}



let nome = prompt("Digite o seu nome:");
console.log(validaDados.validaNome(nome));

let email = prompt("Digite um endereço de email válido:");
//console.log(validaDados.validaEmail(email));

//^[a-z0-9._%+-]+@[a-z0-9.-]+\.com

let telefone = prompt("Digite seu número de telefone no formato (NN)NNNN-NNNN :");
//console.log(validaDados.validaTelefone(telefone));

// ^\(\d{2}\)\d{4}-\d{4}$/++
