function verificar(){
    let data = new Date(); //Criando variável com data
    let ano = data.getFullYear(); //FullYear capta o ano com 4 dígitos (2021)
    let fAno = window.document.getElementById('txtano')
    let res = window.document.querySelector('div#res')

    if(fAno.value.length == 0 || fAno.value > ano){
        window.alert('[ERRO] Verifique seus dados e tente novamente.')
    } else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fAno.value)
        let faixa = ''
        let img = document.getElementById('imagem-pessoa')
        img.style.display = "block"
        if (fsex[0].checked){
            if(idade >= 0 && idade < 10){
                img.setAttribute('src','src/images/foto-bebe-m.png')
                faixa = 'Criança'
            }else if(idade < 21){
                faixa = 'Jovem'
                img.setAttribute('src','src/images/foto-jovem-m.png')
            }else if(idade < 50){
                faixa = 'Homem'
                img.setAttribute('src','src/images/foto-adulto-m.png')
            }else{
                faixa = 'Idoso'
                img.setAttribute('src','src/images/foto-idoso-m.png')
            }  
        } else if (fsex[1].checked){
            if(idade >= 0 && idade < 10){
                img.setAttribute('src','src/images/foto-bebe-f.png')
                faixa = 'Criança'
            }else if(idade < 21){
                img.setAttribute('src','src/images/foto-jovem-f.png')
                faixa = 'Jovem'
            }else if(idade < 50){
                img.setAttribute('src','src/images/foto-adulto-f.png')
                faixa = 'Mulher'
            }else{
                img.setAttribute('src','src/images/foto-idoso-f.png')
                faixa = 'Idosa'
            }
        }
        res.innerText = `Detectamos um(a) ${faixa} de ${idade} anos.`
          
    }   
}