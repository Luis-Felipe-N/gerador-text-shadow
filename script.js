const preview = document.querySelector('.preview h1');
const inputs = document.querySelectorAll('.input-element input');
const btnCopiar = document.querySelector('.btn-copiar')
var root = document.documentElement;


document.body.addEventListener('click', (e) => {
    console.log(e.target.className)
    if (e.target.className !== 'btn-copiar') {
        btnCopiar.textContent = 'Copiar '
    } else {
        copiar()
    }
});


inputs.forEach((input) => {
    input.addEventListener('input', () => {
        mudarValor(input.getAttribute('value'), input.value)
    });
});


function mudarValor(propiedade, valor) {
    let valorLabel = document.querySelector(`#label-${propiedade}`)

    // // se for opacidade adicionar no final da cor
    // if (propiedade === 'opacity') {
    //     var valorOpacity = valor
        
    // } 

    if (propiedade === 'color') {
        var valorPropiedade = valor
    } else {
        var valorPropiedade = valor + 'px'
    }
    
    valorLabel.textContent = valorPropiedade
    root.style.setProperty(`--${propiedade}`, valorPropiedade)
};


function copiar() {
    btnCopiar.textContent = 'Copiado!'
    var labelText = document.querySelector('.label-text')
    navigator.clipboard.writeText(labelText.innerText)
};