function carregar() {
    const msg = document.querySelector('#msg')
    const img = document.querySelector('#imagem')
    const title = document.querySelector('#title')
    const data = new Date()
    const hora = data.getHours()
    const minutos = data.getMinutes()
    const segundos = data.getSeconds()
    
    msg.textContent = `Agora são ${hora} horas, ${minutos} minutos, ${segundos} segundos.`
    if (hora >= 5 && hora < 12) {
        // bom dia
        img.src = "imagens/manha.png"
        document.body.style.background = '#fcd896'
        title.textContent = 'Está de manhã.'
    } else if (hora >= 12 && hora <= 18) {
        // boa tarde
        img.src = "imagens/tarde.png"
        document.body.style.background = '#f7b02c'
        title.textContent = 'Está de tarde.'
    } else {
        // boa noite
        img.src = "imagens/noite.png"
        document.body.style.background = '#034c7c'
        title.textContent = 'Está de noite.'
    } setTimeout(carregar, 1000)   
}


