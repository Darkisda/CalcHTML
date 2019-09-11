function botao( entrada ){
    var numero = document.calc.resultado.value;
    document.calc.resultado.value = numero + entrada;
}

function igual(){
    var resultado = document.calc.resultado.value;
    if(resultado){
        document.calc.resultado.value = eval(resultado);
    }
}

function limpar(){
    document.calc.resultado.value = "";
}

function apagar(){
    var resultado = document.calc.resultado.value;
    document.calc.resultado.value = resultado.substring(0,resultado.length-1);
}