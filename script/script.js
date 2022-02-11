function contar(){
    let ini = document.getElementById('txtni')
    let fim = document.getElementById('txtnf')
    let passo= document.getElementById('txtnp')
    let  res = document.getElementById('res')
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar'
        //window.alert('[ERRO]Faltam dados')
    }else{
        res.innerHTML = 'contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0 ){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if(i < f ){
            //CONTAGEM CRESCENTE
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`

            }
        }else{
            //CONTAGEM REGRESSIVA
            for(let c =i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449} `
            } 
        }
        res.innerHTML += `\u{1F3C1}`
    } 
}