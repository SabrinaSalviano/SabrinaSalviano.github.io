
const MasK = {

    // Mascara do CPF
    
    cpf(input){

    let value = input.value;
    value = value.replace(/\D/, "");
    
    value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

    input.value = value;
    },

    // Mascara do CEP

    cep(input){

    let value = input.value;
    value = value.replace(/\D/, "");

    value = value.replace(/(\d{5})(\d{3})/, "$1-$2");
    
    input.value = value;
    },

    // Mascara do CELULAR

    tel(input){

    let value = input.value;
    value = value.replace(/\D/, "");

    value = value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");

    input.value = value;
    }
}
