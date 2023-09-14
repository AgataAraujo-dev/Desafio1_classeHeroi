/* Crie uma variável para armazenar o nome e a quantidade de experiência(XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 6.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000 = Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**" */

let nomeheroi = "Rei Arthur"
let xpheroi = 100
let nivelheroi;

while (xpheroi <= 9000){
    console.log("Upando " + nomeheroi)
    xpheroi += 1000
} 

console.log("Total XP do " + nomeheroi + ": " + xpheroi)

if(xpheroi <= 1000){
    nivelheroi = "Ferro";
}   else if (xpheroi >=1001 && xpheroi <=2000){
    nivelheroi = "Bronze";
}   else if (xpheroi >=2001 && xpheroi <=5000){
    nivelheroi = "Prata";
}   else if (xpheroi >=5001 && xpheroi <=7000){
    nivelheroi = "Ouro";
}   else if (xpheroi >=7001 && xpheroi <=8000){
    nivelheroi = "Platina";
}   else if (xpheroi >=8001 && xpheroi <=9000){
    nivelheroi = "Ascendente";
}   else if (xpheroi >=9001 && xpheroi <=10000){
    nivelheroi = "Imortal";
}   else if (xpheroi >=10001){
    nivelheroi = "Radiante";
}

console.log("O Herói " + nomeheroi + " está no nível " + nivelheroi)