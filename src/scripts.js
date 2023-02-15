document.getElementById("botao_submit").addEventListener("click", validate, false)

function getEmail(){
  const email = document.getElementById("email").value
  return email
}


//1 - Verificar se o endereço de e-mail é válido usando uma expressão regular.
  //essa função verifica se o uer digitou um email padrão
function isEmail(email){
  var emailRegex = new RegExp  (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
  if(emailRegex.test(email)){
    return true
  }
}

//Verificar se o endereço de e-mail tem pelo menos um nome de usuário e um domínio.
  //essa função checa se o email tem um nome de usuário antes do @ e um domínio depois do @
function nameDomain(email){
  var nameRegex = new RegExp (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))/)
  var domainRegex = new RegExp (/((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

  if(nameRegex.test(email) && domainRegex.test(email)){
    return true
  }
}

//Verificar se o domínio tem pelo menos 2 caracteres e termina com ".com", ".org", ".net", ".br" ou ".edu".
//verifica se termina em .com
function dotCOM(email){
  comRegex = new RegExp (/a?\.com$/)
  if(comRegex.test(email)){
    return true
  }
}
//verifica se termina em .org
function dotORG(email){
  orgRegex = new RegExp (/a?\.org$/)
  if(orgRegex.test(email)){
    return true
  }
}
//verifica se termina em .net
function dotNET(email){
  netRegex = new RegExp (/a?\.net$/)
  if(netRegex.test(email)){
    return true
  }
}
//verifica se termina em .br
function dotBR(email){
  brRegex = new RegExp (/a?\.br$/)
  if(brRegex.test(email)){
    return true
  }
}
//verifica se termina em .edu
function dotEDU(email){
  eduRegex = new RegExp (/a?\.edu$/)
  if(eduRegex.test(email)){
    return true
  }
}

//essa função checa se isEmail & nameDomain são true
  //caso sim, mostra o email digitado com a mensagem "email válido"
    //mostra ainda uma mensagem informando o top-level domain
function validate(event){
  var $resultado = $("#resultado")
  var $result_domain = $("#result_domain")
  var email = $("#email").val()
  email = email.toLowerCase()
  $resultado.text("")
  $result_domain.text("")

  //if isEmail == true & nameDomain == true
    //seta o texto e o estilo para o definido abaixo
  if(isEmail(email) & nameDomain(email)){
    $resultado.text("O email " + email + " é válido :D")
    $resultado.css("color", "green")
  }
  else{
    $resultado.text("O email " + email + " não é válido :/")
    $resultado.css("color", "red")
  }

  if(dotCOM(email)){
    $result_domain.text(`O email termina em ".com"`)
    $result_domain.css("color", "green")
  }
  if(dotORG(email)){
    $result_domain.text(`O email termina em ".org"`)
    $result_domain.css("color", "green")
  }
  if(dotNET(email)){
    $result_domain.text(`O email termina em ".net"`)
    $result_domain.css("color", "green")
  }
  if(dotBR(email)){
    $result_domain.text(`O email termina em ".br"`)
    $result_domain.css("color", "green")
  }
  if(dotEDU(email)){
    $result_domain.text(`O email termina em ".edu"`)
    $result_domain.css("color", "green")
  }

  //prevent default para a página não atualizar e perder os dados digitados nos inputs
  event.preventDefault()
}