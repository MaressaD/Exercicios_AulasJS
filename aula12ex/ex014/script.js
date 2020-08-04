function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var cump = window.document.getElementById('cumprimento')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas `

    if(hora >= 0 && hora < 12 ){
   
        cump.innerHTML += `<strong>Bom Dia!</strong>`
        img.src = 'fotomanha.png'
        document.body.style.background = '#f5d44c'
    }else if(hora >= 12 && hora <= 18){
    
        cump.innerHTML += `<strong>Boa Tarde!</strong>`
        img.src = 'fototarde.png'
        document.body.style.background = '#ac635c'
    }else{
    
        cump.innerHTML += `<strong>Boa Noite!</strong>`
        img.src = 'fotonoite.png'
        document.body.style.background = '#141823'
    }
}