var $tdTotalCursos = document.querySelector('.js-total-de-cursos')
var $tdTotalDeHoras = document.querySelector('.js-total-de-horas')
var $buttonConfirmar = document.querySelector('.js-botao-matricula')

var total1Horas = 0
var totalCursos = 0

function adicionaCurso(checkbox) {
    if(checkbox.checked) {
        totalCursos ++
        total1Horas + parseInt(checkbox.value)
    }
    else{
        totalCursos --
        total1Horas -= parseInt (checkbox.value)
    }

    $tdTotalDeHoras.textContent = total1Horas + 'h'
    $tdTotalCursos.textContent = totalCursos + 'cursos(s)'

}

$buttonConfirmar.onclick = confirmarMatriculas

function confirmarMatriculas() {
    if(totalCursos === 0) {
        alert('Nenhum curso selecionado')
    }else{
        alert('Matricula confirmada nos cursos!')
        window.location.href = 'index.html'
    }
}