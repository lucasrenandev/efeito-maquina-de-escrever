
function efeitoEscrever(elemento) {

    const texto = elemento.innerHTML.split('')
    elemento.innerHTML = ''

    for(let i = 0; i < texto.length; i ++) {

        setTimeout(function () {
            elemento.innerHTML += texto[i]
        }, 75 * i)
    }
}

const titulo = document.querySelector("#texto")
efeitoEscrever(titulo)
