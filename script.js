"use strict";

const valueInput = window.document.querySelector('#txtInput');

class funcionalidade{
    constructor(value){
        this.value = value;
    }

    funcEval(){
        return eval(this.value);
    }
}

const dados = {
    valor: 0,
    valor02: 0,
    valor03: 0,
    result: 0,
    mult: false,
    div: false,
    add: false,
    less: false,
    pot: false,
    booladd: false,
    boolsub: false,
    booldiv: false,
    boolmult: false,
    result: 0
};

$('#btn0').click(() =>{
    valueInput.value += '0';
});

$('#btn1').click(() =>{
    valueInput.value += '1';
});

$('#btn2').click(() =>{
    valueInput.value += '2';
});

$('#btn3').click(() =>{
    valueInput.value += '3';
});

$('#btn4').click(() =>{
    valueInput.value += '4';
});

$('#btn5').click(() =>{
    valueInput.value += '5';
});

$('#btn6').click(() =>{
    valueInput.value += '6';
});

$('#btn7').click(() =>{
    valueInput.value += '7';
});

$('#btn8').click(() =>{
    valueInput.value += '8';
});

$('#btn9').click(() =>{
    valueInput.value += '9';
});

$('#btnClear').click(() =>{
    valueInput.value = '';
    dados.valor = 0;
});

$('#btnDot').click(() =>{
    valueInput.value += '.';
});

$('#btnAdicao').click(() =>{

    if(dados.less == true){
        dados.valor -= Number(valueInput.value);
    }

    else if(dados.div == true){
        dados.valor /= Number(valueInput.value);
    }

    else if(dados.mult == true){
        dados.valor *= Number(valueInput.value);
    }

    else if(dados.pot == true){
        dados.valor = Math.pow(dados.valor, Number(valueInput.value));
    }

    dados.valor += Number(valueInput.value);
    valueInput.value = '';
    dados.add = true;
    dados.less = false;
    dados.div = false;  
    dados.mult = false;
});

$('#btnSubtracao').click(() =>{
    if(dados.add == true){
        dados.valor += Number(valueInput.value);
    }

    else if(dados.div == true){
        dados.valor /= Number(valueInput.value);
    }

    else if(dados.mult == true){
        dados.valor *= Number(valueInput.value);
    }

    else if(dados.pot == true){
        dados.valor = Math.pow(dados.valor, Number(valueInput.value));
    }
    
    //dados.valor -= Number(valueInput.value);
    valueInput.value = '';
    dados.less = true;
    dados.add = false;
    dados.div = false;
    dados.mult = false;
});

$('#btnMultiplicacao').click(() =>{

    const multiplicador = Number(valueInput.value);
    if(dados.add == true){
        dados.valor += multiplicador;
    }

    else if(dados.div == true){
        dados.valor /= multiplicador;
    }

    else if(dados.less == true){
        dados.valor -= multiplicador;
    }
    else if(dados.pot == true){
        dados.valor =  Math.pow(dados.valor, Number(valueInput.value));
    }
    
    if(dados.valor == 0){
        dados.valor = multiplicador;    
    }
    

    valueInput.value = '';
    
    dados.mult = true;
    dados.add = false;
    dados.div = false;
    dados.less = false;
});

$('#btnDividir').click(() =>{

    if(dados.add == true){
        dados.valor += Number(valueInput.value);
    }

    else if(dados.less == true){
        dados.valor -= Number(valueInput.value);
    }

    else if(dados.mult == true){
        dados.valor *= Number(valueInput.value);
    }

    else if(dados.pot == true){
        dados.valor = Math.pow(dados.valor, Number(valueInput.value));
    }

    if(dados.valor == 0){
        dados.valor = Number(valueInput.value);
    }

    valueInput.value = '';
    dados.div = true;
    dados.less = false;
    dados.add = false;
    dados.mult = false;
    dados.pot = false;
});

$('#btnPotencia').click(() =>{

    if(dados.add == true){
        dados.valor += Number(valueInput.value);
    }

    else if(dados.less == true){
        dados.valor -= Number(valueInput.value);
    }

    else if(dados.mult == true){
        dados.valor *= Number(valueInput.value);
    }

    else if(dados.div == true){
        dados.valor /= Number(valueInput.value);
    }
    

    if(dados.valor == 0){
        dados.valor = Number(valueInput.value);
    }

    valueInput.value = '';
    dados.div = false;
    dados.less = false;
    dados.add = false;
    dados.mult = false;
    dados.pot = true;

});

$('#btnRaiz').click(() =>{

    if(dados.add == true){
        dados.valor += Number(valueInput.value);
    }

    else if(dados.less == true){
        dados.valor -= Number(valueInput.value);
    }

    else if(dados.mult == true){
        dados.valor *= Number(valueInput.value);
    }

    else if(dados.div == true){
        dados.valor /= Number(valueInput.value);
    }

    if(dados.valor == 0){
        dados.valor = Number(valueInput.value);
    }

    else if(dados.pot == true){
        dados.valor = Math.pow(dados.valor, Number(valueInput.value));
    }

    dados.valor = Math.sqrt(dados.valor);
    valueInput.value = dados.valor;

    dados.div = false;
    dados.less = false;
    dados.add = false;
    dados.mult = false;
    dados.pot = false;
});

$('#btnArredondar').click(() =>{
    if(dados.add == true){
        dados.valor += Number(valueInput.value);
    }

    else if(dados.less == true){
        dados.valor -= Number(valueInput.value);
    }

    else if(dados.mult == true){
        dados.valor *= Number(valueInput.value);
    }

    else if(dados.div == true){
        dados.valor /= Number(valueInput.value);
    }

    else if(dados.pot == true){
        dados.valor = Math.pow(dados.valor, Number(valueInput.value));
    }

    
    dados.valor = Number(valueInput.value);

    dados.valor = Math.round(dados.valor);
    valueInput.value = dados.valor;
});

$('#btnIgual').click(() =>{
    if(dados.valor == 0 && valueInput.value == ''){
        window.alert('Error, I cant recibe any value! ');
    }
    else{
        const input = valueInput.value;
        if(dados.mult == true){
            console.log(input);
            console.log(Number(dados.valor));
            dados.valor = dados.valor * input;
            valueInput.value = dados.valor;
        }

        else if(dados.div == true){
            dados.valor /= input;
            valueInput.value = dados.valor;
        }
        else if(dados.add == true){
            dados.valor += input;
            valueInput.value = dados.valor;
        }

        else if(dados.less == true){
            dados.valor = dados.valor - input;
            valueInput.value = dados.valor;
        } 

        else if(dados.pot == true){
            valueInput.value = Math.pow(dados.valor, input);
        }


        else{
            const stringV = (valueInput.value);
            const evali = new funcionalidade(stringV);
            valueInput.value = evali.funcEval();
        }

        dados.mult = false;
        dados.div = false;
        dados.add = false;
        dados.less = false;
        dados.pot = false;
    }
});
