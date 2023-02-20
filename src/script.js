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
}