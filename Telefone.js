class Telefone {

    validaTelefone(numero) {

        const regexTelefone = /^\(\d{2}\)\d{4}-\d{4}$/;

        if (regexTelefone.test(numero)) {

            return numero;

        } else {

            console.log('O telefone informado não é válido! Tente novamente.');

        }
    }
}
