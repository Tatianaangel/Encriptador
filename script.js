const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".btn-copiar");
const texto1 =document.querySelector("texto1")
const texto2 =document.querySelector("texto2")

copia.style.display = "none"

function validarTexto(){

    let textoEscrito = document.querySelector(".text-area").value;
    let validador = textoEscrito.match(/^[a-z ]*$/);

    if(!validador || validador === 0){

        alert("Solo son permitidas letras en minúsculas y sin acentos");
        location.reload();
        return true;
        boxMsj.style.display = "none";
        msjVacio.style.display = "flex";
    }
}

//La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnnEncriptar() { 
    if (!validarTexto());
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado ;
    mensaje.style.backgroundImage = "none";
    textArea.value = "";
    copia.style.display = "block";
    ocultarTextos();

}

function encriptar (stringEncriptada) {

    let matrizCodigo = [["e", "enter"] ,["i", "imes"],[ "a","ai"],[ "o","ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
return stringEncriptada
}


function btnnDesencriptar() {

    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    
}

function desencriptar (stringDesencriptada) {

    let matrizCodigo = [ ["e", "enter"] ,["i", "imes"],[ "a", "ai"], [ "o","ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
return stringDesencriptada
}

function copiar (){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value ="";
    alert("Texto Copiado")
} 

function ocultarTextos(){

    let texto1 = document.getElementById("texto1");
    let texto2 = document.getElementById("texto2");
    console.log(texto1);
    texto1.textContent ="";
    texto2.textContent ="";
}
