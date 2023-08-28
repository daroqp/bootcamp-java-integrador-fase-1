const formulario = document.getElementById('formulario')
formulario.addEventListener('submit', validarFormulario )

window.onload=function(){}

function validarFormulario (e) {
    e.preventDefault()
    
    const nombre = document.getElementById('nombre').value
    const isEmptyNombre = checkEmpty(nombre)
    if( isEmptyNombre ) {
        const elementSpan = document.getElementById('nombreSpan')
        elementSpan.setAttribute('style', 'display: block !important')
        document.getElementById('nombre').focus()
        return 0
    } else {
        let elementSpan = document.getElementById('nombreSpan')
        elementSpan.setAttribute('style', 'display: none !important')
    }

    const email = document.getElementById('email').value
    const isEmptyEmail = checkEmpty(email)
    if( isEmptyEmail ) {
        const elementSpan = document.getElementById('emailSpan')
        elementSpan.setAttribute('style', 'display: block !important')
        document.getElementById('email').focus()
        return 0
    } else {
        let elementSpan = document.getElementById('emailSpan')
        elementSpan.setAttribute('style', 'display: none !important')
    }

    const mensaje = document.getElementById('mensaje').value
    const isEmptyMensaje = checkEmpty(mensaje)
    if( isEmptyMensaje ) {
        const elementSpan = document.getElementById('mensajeSpan')
        elementSpan.setAttribute('style', 'display: block !important')
        document.getElementById('mensaje').focus()
        return 0
    } else {
        let elementSpan = document.getElementById('emailSpan')
        elementSpan.setAttribute('style', 'display: none !important')
    }

    alert("Gracias por enviarnos un mensaje!")
    this.submit()
}

function checkEmpty( nombre ) {
    return nombre.length <= 0
}