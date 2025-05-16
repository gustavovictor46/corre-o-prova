let curtidas = [12,25,8,32,16,20];
let i = 0;
let maiorCurtida = curtidas[0];

while (i < curtidas.length){
    if (curtidas[i] > maiorCurtida){
        maiorCurtida = curtidas[i];
    }
    i++;
}

console.log("Exercício 5");
console.log("O maior número de curtidas: ", maiorCurtida);
console.log("-------------------------------");