class NomeValidator {
    static validate(nome) {
      const nomeRegex = /^[a-zA-Z]+$/;
      if (nomeRegex.test(nome)) {
        return nome;
      } else {
        throw new Error("Nome inválido! Use apenas letras maiúsculas e minúsculas.");
      }
    }
  }

  const nome = prompt("Digite seu primeiro nome:");

console.log("teste");