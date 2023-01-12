var textOutput = document.querySelector("#output-txt");
function mostraRestultado(msg){
    var textarea = document.getElementById('output-txt');
    var imgInfo = document.getElementById('imgInfo');
    var msgInfo = document.getElementById('msgInfo');
    imgInfo.style.display = 'none';
    msgInfo.style.display = "none";
    textarea.style.display = 'block';
    textarea.innerText = msg;
}

function criptografar(){
    var textInput = document.querySelector("#input-txt");
    var textoDigitado = textInput.value;
    var resultCriptografar = '';
    for(var i = 0; i < textoDigitado.length; i++){
        if(textoDigitado[i] == "a"){
            resultCriptografar += textoDigitado[i].replace("a", "ai");
        }else if(textoDigitado[i] == "e" ) {
            resultCriptografar += textoDigitado[i].replace("e", "enter");
        }else if(textoDigitado[i] == "i"){
            resultCriptografar += textoDigitado[i].replace("i", "imes");
        }else if(textoDigitado[i] == "o"){
            resultCriptografar += textoDigitado[i].replace("o", "ober");
        }else if(textoDigitado[i] == "u"){
            resultCriptografar += textoDigitado[i].replace("u", "ufat");
        }else{
            resultCriptografar += textoDigitado[i];
        }
        
    }
    mostraRestultado(resultCriptografar);
}

function descriptografar(){
    var textInput = document.querySelector("#input-txt");
    var textoDigitado = textInput.value;
    var resultDesincriptografar = textoDigitado.replace(/enter/g, "e").replace(/ai/g, "a").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");
    mostraRestultado(resultDesincriptografar);
}

function copiar(){
    var textoTransformado = document.getElementById("output-txt");
    textoTransformado.select();
    textoTransformado.setSelectionRange(0,99999);
    navigator.clipboard.writeText(textoTransformado.value);
    alert("Texto copiado  " + textoTransformado.value);
}