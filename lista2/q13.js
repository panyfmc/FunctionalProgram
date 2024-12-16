//  Um móvel com velocidade constante percorre uma trajetória retilínea.
//  Considere t0 = 0, o instante inicial e x0=500 a posição inicial.
// Escreva um programa para calcular a velocidade do objeto em um dado instante t e posição x.

// s = s0 + vt
// v = (s - s0)/t

function velocidadedoObjeto() {
    const s0 = 500
    const t = prompt('Digite o instante do objeto (s): ')
    const s = prompt('Digite a posição do objeto (m): ')
    return (s - s0)/t
}

console.log(`\nVelocidade do objeto: ${velocidadedoObjeto()}m/s`)