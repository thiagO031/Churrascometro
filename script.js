function calcular(){
    let adultos = Number(document.getElementById('adultos').value)
    let crianca = Number(document.getElementById('criancas').value)
    let duracao = Number(document.getElementById('duracao').value)
    let res = document.getElementById('resultado')
    // style
    let res2 = document.getElementById('resultado2')
    let cont = document.getElementById('main')
    let conteudo = document.getElementById('conteudo')


    let adulto6hrs = {
        carne: 400 * adultos,
        cerveja: 1200 * adultos,
        refri: 1000* adultos
    }

    let adultoMais6hrs = {
        carne: 650 * adultos,
        cerveja: 2000 * adultos,
        refri: 1500 * adultos
    }

    let crianca6hrs = {
        carne: 200 * crianca,
        refri: 500 * crianca
    }

    let criancaMais6hrs = {
        carne: 325 * crianca,
        refri: 750 * crianca
    }

    // valores padroes ATE 6 HORAS de festa ADULTOS E CRINÇAS
    if (adultos >= 1 && crianca >= 1 && duracao <= 6) {
        res.innerHTML = `${adulto6hrs.carne + crianca6hrs.carne}Kg de carne <br>
        ${adulto6hrs.cerveja} Latas de Cerveja <br>
        ${adulto6hrs.cerveja + crianca6hrs.refri} Garrafas de 2L de Bebida`
        // valores MAIS DE 6 HORAS de festa ADULTOS E CRIANÇAS
    } else {
        if (adultos >= 1 && crianca >= 1 && duracao > 6) {
            res.innerHTML = `${adultoMais6hrs.carne + crianca6hrs.carne}Kg de Carne <br>
            ${adultoMais6hrs.cerveja} Latas de Cerveja <br>
            ${adultoMais6hrs.refri + criancaMais6hrs.refri} Garrafas de 2L de Bebida`
            // valores padroes ATE 6 HORAS de festa SO ADULTOS
        } else if (adultos >= 1 && crianca == 0 && duracao <= 6) {
            res.innerHTML = `${adulto6hrs.carne}Kg de Carne <br>
            ${adulto6hrs.cerveja} Latas de Cerveja <br>
            ${adulto6hrs.refri} Garrafas de 2L de Bebida`
            // valores MAIS DE 6 HORAS de festa SO ADULTOS
        } else {
            if (adultos >= 1 && crianca == 0 && duracao > 6) {
                res.innerHTML = `${adultoMais6hrs.carne}Kg de Carne <br>
                ${adultoMais6hrs.cerveja} Latas de Cerveja <br>
                ${adultoMais6hrs.refri} Garrafas de 2L de Bebida`
            } else{
                alert('Algum dados está errado! Certifique-se')
            }
        }

    }

    // estilizando no JS
    res2.style.height = '10rem'
    res2.style.width = '100%'
    res2.style.backgroundColor = '#f48c06'
    res2.style.border = '1px solid black'
    res2.style.borderRadius = '8px'
    cont.style.height = '27rem'
    conteudo.style.height = '27rem'
}

    // let adultos = Number(document.getElementById('adultos').value);
    // let crianca = Number(document.getElementById('criancas').value);
    // let duracao = Number(document.getElementById('duracao').value)
    // let res = document.getElementById('resultado')