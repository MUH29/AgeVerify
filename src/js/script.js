//Configurando função verificar, que será ativada quando ocorrer evento de click
function verificar(){
    //Criando variável de data
    let data = new Date(); 
    //FullYear capta o ano com 4 dígitos (2021)
    let ano = data.getFullYear(); 
    //A variável "fAno" é o texto do input do ano escolhido
    let fAno = window.document.getElementById('txtano') 
    //A variável "res" diz respeito a resposta que o sistema dá ao usuário
    let res = window.document.querySelector('div#res') 

    //Se a length do fAno for zero (ou seja, se não for inserido nenhum número) ou se o valor de fAno for maior do que o ano atual...
    if(fAno.value.length == 0 || fAno.value > ano){
        //Avisa-se do erro e pedem-se novas informações
        window.alert('[ERRO] Verifique seus dados e tente novamente.')
    } else{//Porém, caso isso não aconteça

        //A variável "fSex" diz respeito ao radio do sexo, masculino ou feminino
        let fSex = document.getElementsByName('radsex')
        //A variável "idade" é o cálculo do ano atual com o ano inserido
        let idade = ano - Number(fAno.value)
        //A variável faixa diz respeito à faixa de idade, que vai variar com as condicionais abaixo
        let faixa = ''
        //A variável img será a imagem, que também irá variar, dependendo da idade
        let img = document.getElementById('imagem-pessoa')
        //Adicionando condicionais para definir faixas, quando o radio escolhido for o masculino
        if (fSex[0].checked){
            if(idade >= 0 && idade < 10){
                faixa = 'Criança'
                //Trocando a source da imagem, dependendo da idade
                img.setAttribute('src','src/images/foto-bebe-m.png')
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
        //Adicionando condicionais para definir faixas, quando o radio escolhido for o feminino
        } else if (fSex[1].checked){
            if(idade >= 0 && idade < 10){
                faixa = 'Criança'
                img.setAttribute('src','src/images/foto-bebe-f.png')
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
        //Escrevendo mensagem final para o usuário
        res.innerText = `Detectamos um(a) ${faixa} de ${idade} anos.`
        //Inicialmente essa imagem não aparece, por isso, quando o click é feito, o display muda e a imagem aparece
        img.style.display = "block"
          
    }   
}