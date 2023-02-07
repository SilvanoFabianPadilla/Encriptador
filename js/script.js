const textArea = document.querySelector(".texto");
const mensaje = document.querySelector(".mensaje");

/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

/* Boton encriptar */
function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptado) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"],
    ];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(
                matrizCodigo[i][0],
                matrizCodigo[i][1]
            );
        }
    }
    return stringEncriptado;
}

/* Boton desencriptar */
function btnDesencriptar() {
    const textoEncriptado = desenencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function desenencriptar(stringDesencriptado) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"],
    ];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(
                matrizCodigo[i][1],
                matrizCodigo[i][0]
            );
        }
    }
    return stringDesencriptado;
}

/* Boton copiar */
function copiar() {
    let pegar = document.getElementById("pegar");
    pegar.select();
    pegar.setSelectionRange(0, 99999);
    document.execCommand("copy");

    var texto = document.getElementById("pegar").value;
    document.getElementById("ingrese").value = texto;
    mensaje.style.backgroundImage = "";
    mensaje.value = "No hay mensaje";
    
}

/* Eliminar */
function eliminar(){
    textArea.value = "";
    mensaje.style.backgroundImage = "";
    mensaje.value = "No hay mensaje";
}



