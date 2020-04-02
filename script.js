function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados informados e tente novamente!')
    } else {
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ' '
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked) {
            gênero = 'Homem'
            if (idade > 0 && idade <=12) {
                img.setAttribute('src', 'img/hcrianca.png')

            }else if (idade <=30) {
                img.setAttribute('src', 'img/hjovem.png')

            }else if (idade <60) {
                img.setAttribute('src', 'img/hadulto.png')

            }else {
                img.setAttribute('src', 'img/hidoso.png')
            }

        }else if (sex[1].checked) {
            gênero = 'Mulher'
            if (idade > 0 && idade <=12) {
                img.setAttribute('src', 'img/mcrianca.png')

            }else if (idade <=30) {
                img.setAttribute('src', 'img/mjovem.png')

            }else if (idade <60) {
                img.setAttribute('src', 'img/madulta.png')

            }else {
                img.setAttribute('src', 'img/midosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
    
    
    
    
}