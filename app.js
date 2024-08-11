const d = document;
const textArea = d.querySelector(".formulario__texto");
const imagenMuneco = d.querySelector(".resultado__muneco");
const loaderCuadro = d.querySelector(".loader")
const resultadoTitulo = d.querySelector(".resultado__titulo");
const resultadoTexto = d.querySelector(".resultado__texto");
const botonEncriptar = d.querySelector(".boton__formulario");
const botonDesencriptar = d.querySelectorAll(".boton__formulario");
const botonCopiar = d.querySelector(".resultado__boton");


const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

function encriptarMsj(mensaje){
    let msjencriptado = "";
    for(let i = 0; i < mensaje.length; i++){
        let letra = mensaje [i];
        let encriptado = letra;
        for(let j = 0; j < llaves.length; j++){
            if(letra === llaves[j][0]){
                encriptado =llaves[j][1];
                break;
            }
        }
        msjencriptado += encriptado;
    }
    return msjencriptado
}

function desencriptarMsj(mensaje){
    let msjDenscriptado = mensaje;
    for(let i = 0; i < llaves.length; i++){
        let regex = new RegExp(llaves[i][1], 'g');
        msjDenscriptado = msjDenscriptado.replace(regex, llaves[i][0]);
    }
    return msjDenscriptado;
}
//ocultamos elementos con esto
textArea.addEventListener("input", (e)=>{
    imagenMuneco.style.display = "none";
    loaderCuadro.classList.remove("hidden");
    resultadoTitulo.textContent = "Capturando Mensaje...";
    resultadoTexto.textContent = "";
});
//funcion del boton encriptar
botonEncriptar.addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = encriptarMsj(mensaje);
    resultadoTexto. textContent = mensajeEncriptado;
    botonCopiar.classList.remove("hidden");
    resultadoTitulo.textContent = "El resultado es:";
});
//funcion del boton Desencriptar
botonDesencriptar[1].addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarMsj(mensaje);
    resultadoTexto.textContent = mensajeDesencriptado;
    resultadoTitulo.textContent = "El resultado es:";
    botonCopiar.classList.remove("hidden");

});
//funcion del boton copiar
botonCopiar.addEventListener("click", (e)=>{
    let textoCopiado = resultadoTexto.textContent;
    navigator.clipboard.writeText(textoCopiado).then(()=> {
        imagenMuneco.style.display = "block";
        loaderCuadro.classList.add("hidden");
        resultadoTitulo.textContent ="El texto se copió."
        botonCopiar.classList.add("hidden");
        resultadoTexto.textContent = "";
    })
});