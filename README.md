# Avaliação Sprint 1 - Programa de Bolsas Compass.uol / AWS e Univesp

Avaliação da primeira sprint do programa de bolsas Compass.uol para formação em machine learning para AWS.
O Grupo 3 é composto pelos integrantes:
- Adila Mota
- Diego Lopes
- Guilherme de Moraes
- Marcos Carvalho

***

## Execução (Código Fonte)

Faça um sistema em JavaScript para validação de dados de cadastro através de expressões regulares (regex). Deverá ser criada uma classe para cada tipo de validação.

**Uso da aplicação**:

Essa aplicação foi criada com o objetivo de validar nome, email e telefone inseridos pelo usuário utilizando Expressões Regulares.

### 1. Validação do nome
Para a validação do nome, o sistema verificará se contém apenas letras maiúsculas ou minúsculas. Com a validação positiva, o usuário deverá ver uma mensagem na cor verde sinalizando que a validação do nome está correta. Caso contrário, verá uma mensagem de erro na cor vermelha e terá de corrigir o campo de nome.

### 2. Validação do email
A validação de email é realziada em três etapas:
- Com o auxilio de Expressões Regulares, o sistema verifica se é um endereço de email padrão com texto antes do @ e algum texto após o @
- Na segunda etapa é verificado se o endereço de email tem pelo menos um nome de usuário e um domínio
- Na terceira etapa é verificado se o nome de domínio tem pelo menos 2 caracteres e se termina com alguns dos seguintes **TLD's (Top Level Domains)**: ".com", ".org", ".net", ".br" ou ".edu".
Com a verificação concluida, em caso de sucesso, o usuário verá a seguinte: "O email " + email + " é válido :D".
Caso tenha ocorrido um erro de digitação, a seguinte mensagem será mostrada: "O email " + email + " não é válido :/".
Ainda, abaixo da mensagem de sucesso, aparecerá uma mensagem dizendo qual o **TLD** do email digitado, por exemplo: O email termina em ".com" 

### 3. Validação de telefone
A validação do número de telefone é feita verificando se o número de telefone digitado segue o seguinte padrão: (NN)NNNN-NNNN, caso positivo, uma mensagem abaixo do campo de digitação sinalizará ao usuário que o número está correto e mostrará o número digitado. Caso contrário, uma mensagem de erro permanecerá até que o formato do número seja aceito.
***

Os métodos são chamados através da página HTML que serve de interface para o usuário.