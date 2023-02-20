//pega o elemento pelo id e fica "esperando" um clique para ativar a função validate
document.getElementById("botao_submit").addEventListener("click", validate)

//essa função serve para capturar o email digitado e retornar na var email
function getEmail(){
  const email = document.getElementById("email").value
  return email
}

//Essa função serve para capturar o nome digitado e retornar na var nome
function getNome(){
  const nome = document.getElementById("nome").value
  return nome
}

//Essa função serve para capturar o nome digitado e retornar na var telefone
function getTelefone(){
  const telefone = document.getElementById("numero").value
  return telefone
}

//**1 - Verificar se o endereço de e-mail é válido usando uma expressão regular.**
  //essa classe verifica se o uer digitou um email padrão
class CheckEmail{
  static isEmail(email){
    let emailRegex = new RegExp  (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    return emailRegex.test(email)
  }
}

//Verificar se o endereço de e-mail tem pelo menos um nome de usuário e um domínio.
  //essa classe checa se o email tem um nome de usuário antes do @ e um domínio depois do @
class CheckNameDomain{
  static nameDomain(email){
    let nameRegex = new RegExp (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))/)
    let domainRegex = new RegExp (/((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    if(nameRegex.test(email) && domainRegex.test(email)){
      return true
    }
  }
}

//essa classe serve para verificar se o nome de domínio tem dois ou mais caracteres
class DomainLength{
  static inLength(email){
    let lenDomain = new RegExp (/a?\.[a-zA-Z]{1,}$/)
    if(lenDomain.test(email)){
      return true
    }
  }
}

//classe com métodos para checar o domínio do email digitado
class CheckDomain{
  static dotCOM(email){
    let comRegex = new RegExp (/a?\.com$/)
    return comRegex.test(email)
  }
  static dotORG(email){
    let orgRegex = new RegExp (/a?\.org$/)
    if(orgRegex.test(email)){
      return true
    }
  }
  static dotNET(email){
    let netRegex = new RegExp (/a?\.net$/)
    if(netRegex.test(email)){
      return true
    }
  }
  static dotBR(email){
    let brRegex = new RegExp (/a?\.br$/)
    if(brRegex.test(email)){
      return true
    }
  }
  static dotEDU(email){
    let eduRegex = new RegExp (/a?\.edu$/)
    if(eduRegex.test(email)){
      return true
    }
  }
}

// Classe para fazer a verificação se o nome contém apenas letras maisculas e minusculas
class NameValidator {
  static validar(nome) {
    const regex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/ 
    if (regex.test(nome)) {
      return nome;
    } else {
      return false;
    }
  }
}

class Telefone {
  static validarTelefone(numero) {
    // Valida se o número de telefone está no formato (NN)NNNN-NNNN
    const regex = /\(\d{2}\)\d{4}-\d{4}/;
    if (regex.test(numero)) {
      return numero;
     } 
      
    }
  }


//essa é a função principal que valida o nome, email e telefone
  //retorna o valor digitado quando correto ou uma mensagem de erro quando incorreto
function validate(event){
  let $resultado = $("#resultado")
  let $result_domain = $("#result_domain")
  let $result_len = $("#result_len")
  let $result_name = $("#result_name")
  let $result_numero = $("#result_numero")
  let email = $("#email").val()
  let name = $("#name").val()
  let numero = $("#numero").val()
  email = email.toLowerCase()
  $resultado.text("")
  $result_domain.text("")
  $result_len.text("")
  $result_name.text("")
  $result_numero.text("")

  //if isEmail == true & nameDomain == true retorna o email com msg de sucesso
  if(CheckEmail.isEmail(email) & CheckNameDomain.nameDomain(email)){
    $resultado.text("O email " + email + " é válido :D")
    $resultado.css("color", "green")

    //verifica como termina o endereço de email
    if(CheckDomain.dotCOM(email)){
      $result_domain.text(`O email termina em ".com"`)
      $result_domain.css("color", "green")
    }
    if(CheckDomain.dotORG(email)){
      $result_domain.text(`O email termina em ".org"`)
      $result_domain.css("color", "green")
    }
    if(CheckDomain.dotNET(email)){
      $result_domain.text(`O email termina em ".net"`)
      $result_domain.css("color", "green")
    }
    if(CheckDomain.dotBR(email)){
      $result_domain.text(`O email termina em ".br"`)
      $result_domain.css("color", "green")
    }
    if(CheckDomain.dotEDU(email)){
      $result_domain.text(`O email termina em ".edu"`)
      $result_domain.css("color", "green")
    }
    if(DomainLength.inLength(email)){
      $result_len.text("O nome de domínio tem 2 ou mais letras")
      $result_len.css("color", "green")
    }
  }
  //se o email é inválido, retorna o email com uma mensagem de erro
  else{
    $resultado.text("O email " + email + " não é válido :/")
    $resultado.css("color", "red")
  }

//VALIDAÇÃO DO NOME
  //se o nome não é (!) valido retorna erro + nome digitado
if(!NameValidator.validar(name)){
    $result_name.text("O nome foi digitado incorretamente: " + name)
    $result_name.css("color", "red")
}
//se o nome é valido retorna sucesso + o nome
if(NameValidator.validar(name)){
    $result_name.text("O nome foi digitado corretamente: " + name)
    $result_name.css("color", "green")
}

//VALIDAÇÃO DO TELEFONE
  //se o telefone não (!) é valido retorna erro + telefone digitado
if(!Telefone.validarTelefone(numero)){
  $result_numero.text("O numero foi digitado incorretamente: " + numero + " o formato correto é (xx)xxxx-xxxx")
  $result_numero.css("color", "red")
}
  //se o telefone é valido retorna sucesso + o telefone
if(Telefone.validarTelefone(numero)){
  $result_numero.text("O numero foi digitado corretamente: " + numero)
  $result_numero.css("color", "green")
}

//prevent default para a página não atualizar e perder os dados já digitados nos inputs
  event.preventDefault()
}



