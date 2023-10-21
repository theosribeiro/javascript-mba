const calcImcBtnField = document.querySelector('#calc-imc-btn');
const alturaField = document.querySelector('input[name=altura');
const pesoField = document.querySelector('input[name=peso');
const imcField = document.querySelector('#imc');
const transitionTime = 400

function imc (sexo, altura, peso) {
    var imc = (peso * altura**2);
    
    if (sexo == 'M') {
        if (imc <= 19.1)
            return 'Abaixo do Peso';
        else if ( imc > 19.1 && imc <= 25.8)
            return 'Peso Normal';
        else if (imc > 25.8 && imc <= 27.3)
            return 'Marginalmente Acima do Peso';
        else if (imc > 27.3 && imc <= 32.3)
            return 'Acima do Peso Ideal';
        else 
            return 'Obeso';
    } else {
        if (imc <= 20.7)
            return 'Abaixo do Peso';
        else if (20.7 < imc <= 26.4)
            return 'Peso Normal';
        else if (26.4 < imc <= 27.8)
            return 'Marginalmente Acima do Peso';
        else if (27.8 < imc <= 31.1)
            return 'Acima do Peso Ideal';
        else 
            return 'Obeso';
    }
}

function calculadoraIMC () {
    let altura = alturaField.value.replace(',', '.');
    let peso = pesoField.value.replace(',', '.');
    let sexo = document.querySelector('input[name=sexo]:checked').value;
    let resultado = '';

    if (this.validateValues(altura, peso)) {
        resultado = imc(sexo, altura, peso);
        showBorder(resultado);
    } else {
        this.showWarningMessage();
        this.hideBorder();
    }
}

function validateValues(altura, peso) {
    return !(isNaN(altura) || altura == 0 || isNaN(peso) || peso == 0);
}

// border
const border = {
    'Abaixo do Peso': 'border border-warning bg-warning text-white',
    'Peso Normal': 'border border-sucess bg-success text-white',
    'Marginalmente Acima do Peso': 'border border-warning bg-warning text-white',
    'Acima do Peso Ideal': 'border border-warning bg-warning text-white',
    'Obeso': 'border border-danger bg-danger text-white'
}
  
function showBorder(resultado) {
setTimeout(function () {
    imcField.className = `form-control form-control-lg ${border[resultado]}`
}, transitionTime);
}

function hideBorder() {
setTimeout(function () {
    imcField.className = 'form-control form-control-lg'
}, transitionTime);
}

function showWarningMessage() {
warningField.innerHTML = warningMessage;
}

// warning
const warningMessage =
`<div class="alert alert-warning" role="alert">
    <strong>Informe o peso e a altura corretamente.</strong>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
    </button>
</div>`;


// evetns
calcImcBtnField.addEventListener('click', function(event) {
    event.preventDefault();
    calculadoraIMC();
})

// console.log(imc('M', 1.7, 68));