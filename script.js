function encriptar() {
   var texto = document.querySelector('#text-main').value;
   var textoOculto = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    
    document.querySelector('#textoColocado').value = textoOculto;
   
}

function desencriptar() {
   var texto = document.querySelector('#text-main').value;
   var textoOculto = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    
    document.querySelector('#textoColocado').value = textoOculto;
    
}


function copiar() {
     var textoCopiado = document.querySelector('#textoColocado').value;
     debugger
     navigator.clipboard.writeText([textoCopiado]);
}