//pega o elemento pelo id e fica "esperando" um clique para ativar a função validate
document.getElementById("botao_submit").addEventListener("click", validate)

//essa função serve para capturar o email digitado e exportar na var email
function getEmail(){
  const email = document.getElementById("email").value
  return email
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

//essa função checa se isEmail & nameDomain são true
  //caso sim, verifica como termina o endereço de email
    //se tudo certo, mostra o email digitado com a mensagem "email válido"
      //se errado mostra uma mensagem de erro
        //por fim, mostra uma mensagem informando o top-level domain do email digitado
function validate(event){
  let $resultado = $("#resultado")
  let $result_domain = $("#result_domain")
  let $result_len = $("#result_len")
  let email = $("#email").val()
  email = email.toLowerCase()
  $resultado.text("")
  $result_domain.text("")
  $result_len.text("")

  //if isEmail == true & nameDomain == true
    //seta o texto e o estilo para o definido abaixo
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
  else{
    $resultado.text("O email " + email + " não é válido :/")
    $resultado.css("color", "red")
  }

  //prevent default para a página não atualizar e perder os dados digitados nos inputs
  event.preventDefault()
}