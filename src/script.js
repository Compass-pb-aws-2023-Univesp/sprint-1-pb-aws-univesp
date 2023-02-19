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


  try {
    const nomeValido = NomeValidator.validate(nome);
    console.log(`Nome válido: ${nomeValido}`);
  } catch (error) {
    console.log(error.message);
  }

console.log("teste");