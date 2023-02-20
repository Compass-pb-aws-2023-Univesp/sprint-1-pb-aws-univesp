 //Classe contendo métodos para validação de dados

 class Valida {
  static nome() {
  let nome = document.getElementById("nome").value;  
  const nomeRegex = /^[a-zA-ZzáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]|[]+$/; 
  //Regex capaz de capturar caracteres latinos com acentuação de línguas modernas. Não aceita caracteres de outros alfabetos (ex. cirílico, hebraico, árabe, etc) ou demais formas de escrita (ex. sinogramas)
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
