/* Crie uma classe para validar com regex se um nome só contêm letras maiúsculas e minúsculas */

const ValidadorDeNome = {
  validar: function(nome) {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(nome);
  }
};
  
export { ValidadorDeNome };