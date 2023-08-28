const formulario = document.getElementById('formulario')
formulario.addEventListener('submit', validarFormulario )

window.onload=function(){}

function validarFormulario (e) {
    e.preventDefault()
    
    const nombreTutor = document.getElementById('nombreTutor').value
    const isEmptyNombreTutor = checkEmpty(nombreTutor)
    if( isEmptyNombreTutor ) {
        const elementSpan = document.getElementById('nombreTutorSpan')
        elementSpan.setAttribute('style', 'display: block !important')
        document.getElementById('nombreTutor').focus()
        return 0
    } else {
        let elementSpan = document.getElementById('nombreTutorSpan')
        elementSpan.setAttribute('style', 'display: none !important')
    }

    const hasInvalidCharacter = checkInvalidCharacter(nombreTutor)
    if( hasInvalidCharacter ) {
        const elementSpan = document.getElementById('nombreTutorSpan')
        elementSpan.setAttribute('style', 'display: block !important')
        document.getElementById('nombreTutor').focus()
        return 0
    } else {
        const elementSpan = document.getElementById('nombreTutorSpan')
        elementSpan.setAttribute('style', 'display: none !important')
    }

    const nombre = document.getElementById('nombre').value
    const isEmptyNombre = checkEmpty(nombre)
    if( isEmptyNombre ) {
        const elementSpan = document.getElementById('nombreSpan')
        elementSpan.setAttribute('style', 'display: block !important')
        document.getElementById('nombre').focus()
        return 0
    } else {
        const elementSpan = document.getElementById('nombreSpan')
        elementSpan.setAttribute('style', 'display: none !important')
    }

    alert("Gracias por completar el formulario")
    this.submit()
}


function checkEmpty( nombre ) {
    return nombre.length <= 0
}

function checkInvalidCharacter( nombre ) {
    const invalidCharacter = /^([A-Za-zéàë]{2,40} ?)+$/g
    const nombreSinEspacios = nombre.trim()

    const result = (nombreSinEspacios.search(invalidCharacter))

    return result !== 0
}