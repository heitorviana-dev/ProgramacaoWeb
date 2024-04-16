class Soma{
    constructor(document){
        this.document = document;
        this.value1 = document.querySelector('#value1');
        this.value2 = document.querySelector('#value2');
        this.event();
    }

    event(){
        this.document.addEventListener('submit', e => {
            e.preventDefault();
            const result = this.somaValores();
            this.exibeResultado(result);
        });
    }

    somaValores() {
        const num1 = parseFloat(this.value1.value);
        const num2 = parseFloat(this.value2.value);

        if(!this.validandoValores(num1, num2)) return 'Valores inválidos';
        return num1 + num2;
    }

    exibeResultado(resultado){
        this.mudaDisplay(this.document.querySelector('#resultadoDiv'));
        const resultadoP = this.document.querySelector('#resultadoSoma');

        resultadoP.innerText = resultado;
    }

    mudaDisplay(elemento){
        elemento.style.display = 'block';
    }

    validandoValores(num1, num2){
        if(isNaN(num1) || isNaN(num2)) return false;
        return true;
    }
}

const soma = new Soma(document);



