 //Classe contendo métodos para validação de dados
//Regex para nomes: capaz de capturar caracteres latinos com acentuação de línguas modernas. 
//Não aceita caracteres de outros alfabetos (ex. cirílico, hebraico, árabe, etc) ou demais formas de escrita (ex. sinogramas)
 class Valida {
  static nome() {
  let nome = document.getElementById("nome").value;  
  const nomeRegex = /^[a-zA-ZzáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]|[]+$/; 
  if (nomeRegex.test(nome)) {
    return alert(` ${nome} é um nome em formato válido`);
    } else {
        alert(`Nome inválido ! Use apenas letras maiúsculas e minúsculas.`);
    }
  }
  static email() {
    let email = document.getElementById("email").value
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,5}$/;
      if (emailRegex.test(email)) {
        const formattedEmail = email.toLowerCase();
        return alert(`${formattedEmail} é um email em formato válido`);
      } else {
         alert(`Endereço de e-mail inválido.`);
      }
    }
  }

static telefone() {
  let telefone = document.getElementById("telefone").value
  const telefoneRegex = /^\(\d{2}\)\d{4}-\d{4}$/;
  if (telefoneRegex.test(telefone)) {
      return alert(`${telefone} é um telefone em formato válido`);
    } else {
        alert(`${telefone} está em um formato inválido. Use o formato (NN)NNNN-NNNN.`);
  }
}
