function verificar() {
var data= new Date()
var ano= data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.querySelector ('div#res')

if(fano.value.lenght == 0 || fano.value > ano) {
  alert ('[ERRO] Verifique os dados e tente novamente.')
} else {
   var fsex = document.getElementsByName('radsex')
   var idade = ano  - Number(fano.value)
   var gênero = ''
   var img = document.createElement('img')
   img.setAttribute('id', 'foto')

   if (fsex[0].checked){
    gênero = 'Homem'
    if (idade>=0 && idade< 10) {
        //crinça 
            img.setAttribute('src', 'imagens/criança_h.jpg')
        }else if (idade < 21){
            //jovem
            img.setAttribute('src', 'imagens/jovem_homem.jpg')
        }else if (idade <50) {
            //adulto
            img.setAttribute('src', 'imagens/homem.png')
        } else {
            //idoso
            img.setAttribute('src', 'imagens/idoso.jpg')
        }
    } else if (fsex[1].checked) {
        gênero = 'Mulher'
        if (idade>=0 && idade< 10) {
            //crinça 
                img.setAttribute('src', 'imagens/criança.jpg')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/jovem_mulher.png')
            }else if (idade <50) {
                //adulto
                img.setAttribute('src', 'imagens/mulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idosa.jpg')
            }
        }
    }
     res.innerHTML = 'Detectamos ' + gênero + ' com ' + idade + ' anos.'
     res.appendChild(img)
}
