class NomeValidador {
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

console.log(NomeValidador.validaNome("JOÃO")); // O nome contém somente letras maiúsculas.
console.log(NomeValidador.validaNome("maria")); // O nome contém somente letras minúsculas.
console.log(NomeValidador.validaNome("Ana Paula")); // O nome contém caracteres que não são letras ou tem letras maiúsculas e minúsculas.


//let nome = prompt("Digite o seu nome:");
//console.log("Olá, " + nome + "! Seja bem-vindo(a).");
