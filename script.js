function carregar() {
    let msg = document.querySelector('#msg')
    let img = document.querySelector('#imagem')
    let title = document.querySelector('#title')
    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    let segundos = data.getSeconds()
    
    msg.innerHTML = `Agora são ${hora} horas, ${minutos} minutos, ${segundos} segundos.`
    if (hora >= 5 && hora < 12) {
        // bom dia
        img.src = "imagens/manha.png"
        document.body.style.background = '#fcd896'
        title.innerHTML = 'Está de manhã.'
    } else if (hora >= 12 && hora <= 18) {
        // boa tarde
        img.src = "imagens/tarde.png"
        document.body.style.background = '#f7b02c'
        title.innerHTML = 'Está de tarde.'
    } else {
        // boa noite
        img.src = "imagens/noite.png"
        document.body.style.background = '#034c7c'
        title.innerHTML = 'Está de noite.'
    } setTimeout(carregar, 1000)   
}


