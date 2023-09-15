# Curso: Lógica de Programação - DIO

 A ideia proposta no curso é de desenvolver uma base sólida em programação aprendendendo a:
- Trabalhar com variáveis para armazenar informações;
- Dominar laços de repetição para otimizar fluxos;
- Criar funções para organizar seu código;
- Explorar o conceito de objetos para criar estrutura de dados mais complexas.

O curso completo conta com 3 desafios de projeto que estarão presentes em meu perfil. Para seguir o proposto em aula, utilizei a linguagem JavaScript. 

Desafiei a mim mesma para ir além e desenvolvi uma alternativa em Python de cada projeto, treinando assim minhas habilidades de trabalhar com diferentes linguagens, além de aprender melhor sobre as semelhanças e diferenças entre elas.

# 1️⃣ Desafio Classificador de nível de Herói (Desafio 1/3)

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 6.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
`O Herói de nome ${nome} está no nível de ${nivel}`

<a name="índice"></a>
# Índice
  *- [Demonstração](#demonstração)
  *- [Tecnologias Utilizadas](#tecnologias-utilizadas)
  *- [Identificando trechos](#identificando-trechos)
  *- [Modelo em Python](#modelo-em-python)


## Demonstração
<a id="demonstração"></a>
[voltar](#índice)

O código final foi:

![image](https://github.com/AgataAraujo-dev/desafio1_classeHeroi/assets/139137656/b65d5843-33f0-440c-9fec-e70f00515b77)

E o resultado seguiu o esperado:

![image](https://github.com/AgataAraujo-dev/desafio1_classeHeroi/assets/139137656/138f2dc4-f4d3-4760-ae6c-eb3e6413a73b)


## Tecnologias Utilizadas
<a id="tecnologias-utilizadas"></a>
[voltar](#índice)

Utilizei o IDE VSCODE para fazer os testes em conjunto com o Node.js e uma extensão para Python.

## Identificando trechos
<a id="identificando-trechos"></a>
[voltar](#índice)

Iniciei declarando as variaveis de nome e xp do herói para as quais atribui valores para exemplo. E criei a variável de nivel do heroi, mas desta vez sem valor inicial:
```javascript
'''-- -----------------------------------------------------
let nomeheroi = "Rei Arthur"
let xpheroi = 100
let nivelheroi;
```

Montei um método While para acrescer o xp do heroi até o nível que escolhi para completar o exemplo, acrescentei uma mensagem para mostrar sempre que o xp for acrescido e estimei o aumento fixo de 1000xp para cada repetição do laço.
Também inseri uma mensagem para mostrar o total de xp ao final do laço:
```javascript
'''-- -----------------------------------------------------
while (xpheroi <= 9000){
    console.log("Upando " + nomeheroi)
    xpheroi += 1000
}

console.log("Total XP do " + nomeheroi + ": " + xpheroi)
```

Antes de finalizar defini as condições para que o heroi alcance cada um dos níveis, utilizando a quantidade de xp como parâmetro:
```javascript
'''-- -----------------------------------------------------
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
```

Por último e para cumprir o solicitado no desafio, utilizei o comando console.log com as variáveis de nome do herói e seu nível atingido:
```javascript
'''-- -----------------------------------------------------
console.log("O Herói " + nomeheroi + " está no nível " + nivelheroi)
```


## Modelo em Python
<a id="modelo-em-python"></a>
[voltar](#índice)

Deixarei abaixo o código do mesmo desafio desenvolvido seguindo a mesma sequência de passos, porém utilizando Python!
O código final foi:

![image](https://github.com/AgataAraujo-dev/desafio1_classeHeroi/assets/139137656/875f7b39-7832-48cc-9ea4-f7e6024dedfb)

E o resultado seguiu o esperado:

![image](https://github.com/AgataAraujo-dev/desafio1_classeHeroi/assets/139137656/138f2dc4-f4d3-4760-ae6c-eb3e6413a73b)
