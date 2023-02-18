class validaDados {
  static validaNome(nome) {
    if (/^[A-Z]+$/.test(nome)) {
      return 'O nome contém somente letras maiúsculas.';
    } else if (/^[a-z]+$/.test(nome)) {
      return 'O nome contém somente letras minúsculas.';
    } else {
      return 'O nome contém caracteres que não são letras ou tem letras maiúsculas e minúsculas.';
    }
  }
}

do {
  nome = prompt("Digite o seu nome:");
  n = validaDados.validaNome(nome);
} while (n == 0);


//console.log(validaDados.validaNome("JOÃO")); // O nome contém somente letras maiúsculas.
//console.log(validaDados.validaNome("maria")); // O nome contém somente letras minúsculas.
//console.log(validaDados.validaNome("Daniel")); // O nome contém caracteres que não são letras ou tem letras maiúsculas e minúsculas.


//let nome = prompt("Digite o seu nome:");
//console.log("Olá, " + nome + "! Seja bem-vindo(a).");
