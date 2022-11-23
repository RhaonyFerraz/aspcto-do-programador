function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else { 
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
             gênero = 'Programador'
             if (idade >0 && idade <20) {
                //criança
                img.setAttribute('src', 'bebe-h1.png')
             } else if (idade <= 30){
                //jovem
                img.setAttribute('src', 'jovem-h.png')
             } else if (idade < 40){
                //adulto
                img.setAttribute('src', 'adulto-h.png')
             } else {
                //idoso
                img.setAttribute('src', 'velho-h1.png')
             }

        } else if (fsex[1].checked) {
             gênero = 'Programadora'
             if (idade >0 && idade <20) {
                //criança
                img.setAttribute('src', 'bebe-m.png')
             } else if (idade <= 30){
                //jovem
                img.setAttribute('src', 'jovem-m.png')
             } else if (idade < 40){
                //adulto
                img.setAttribute('src', 'adulto-m.png')
             } else {
                //idoso
                img.setAttribute('src', 'velho-m.png')
             }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}