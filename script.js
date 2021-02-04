//REGRA DE NEGÓCIO - CHURRASCÔMETRO
// Carne: 400g por pessoa + de 6hrs: 650g
//Cerveja: 1200ml porpessoa + de 6hrs: 2000ml
//Refrigerante/agua - 1000ml por pessoa + 6hrs 1500ml
//Crianças valem por 0,5 pessoa

let inputAdultos = document.getElementById('adultos');
let inputCriancas = document.getElementById('criancas');
let inputDuracao = document.getElementById('duracao');
let resultado = document.getElementById('resultado');

function calcular() {
  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;

  let quantidadeTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
  let quantidadeTotalCerveja = cervejaPP(duracao) * adultos; 
  let quantidadeTotalBebidas = bebidas(duracao) * adultos  + (bebidas(duracao) / 2 * criancas);

  resultado.innerHTML = `<p>${quantidadeTotalCarne/1000}kg de Carne.</p>`
  resultado.innerHTML += `<p>${Math.ceil(quantidadeTotalCerveja/355)} latas de Cerveja.</p>`
  resultado.innerHTML += `<p>${Math.ceil(quantidadeTotalBebidas/2000)} garrafas de Bebida.</p>`
}

function carnePP(duracao) {
  if (duracao >= 6) {
    return 600;
  } else {
    return 400;
  }
}

function cervejaPP(duracao) {
  if (duracao >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}

function bebidas(duracao) {
  if (duracao >= 6) {
    return 1500;
  } else {
    return 1000;
  }
}