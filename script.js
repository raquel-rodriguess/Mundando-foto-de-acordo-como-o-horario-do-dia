
function carregar (){

var msg = window.document.getElementById("msg")
var imagem = window.document.getElementById("imagem")
var data = new Date();
var hora = data.getHours();

msg.innerHTML = "Agora são " + hora +" horas. "
    if(hora >=0 && hora < 12){
        imagem.src="/imagens/manha 1.png"
        document.body.style.background ="#D99B66"
    } else if (hora >= 12 && hora < 18){
        imagem.src="/imagens/tarde 1.png"
        document.body.style.background ="#3F2940"
    } else{
        imagem.src="/imagens/noite 1.png"
        document.body.style.background ="#232526"
    }
} 
