const itens = [15, 20, 10, 10, 5];

// Como aplicar descontos variados na funcao checkout, por exemplo:

// Desconto de 20 reais;
const desconto20Reais = () => 20;
// Desconto de 20 por cento;
const desconto20PorCento = (total) => total * 0.2;
// Desconto de 40 por cento:
const desconto40PorCento = (total) => total * 0.4;

const checkout = (itens, callback) => { // Checkout passa a ser uma HoF,passando a ter duas funcoes como parametro. A primeira leva o total de itens a serem computados, e a segunda (callback), a chamada das funcoes de desconto declaradas acima.
    let total = 0;
    for (const item of itens) {
        total += item;
    }
    total -= callback(total);
    return total;
};

console.log('Valor total da compra com desconto:', checkout(itens, desconto20PorCento)); // Checkout leva dois parametros.

/*
Metodo sort(): Ele ordena os elementos do proprio array, e retorna o array. A ordenacao nao e necessariamente estavel. A ordenacao padrao acontece de acordo com a pontuacao de codigo unicode.
*/

// Ordenar os jogadores em ordem alfabetica.
const jogadores = [
    'Pele',
    'Jairzinho',
    'Marta',
    'Formiga',
    'Hulk',
    'Fabio',
    'Janderson',
    'Socrates',
    'Fred',
];

jogadores.sort();
console.log(jogadores);
jogadores.reverse();
console.log(jogadores);

// Ordenar os numeros em ordem crescente.
const numeros = [3, 5, 7, 12, 123, 55, 90, 0, 13];

numeros.sort((n1, n2) => {
    if (n1 < n2) {
        return -1;
    } else if (n1 > n2) {
        return 1;
    }
    return 0;
});

console.log(numeros);

// Uma outra forma mais dinamica de se fazer...
const numeros1 = [3, 5, 7, 12, 123, 55, 90, 0, 13];

numeros1.sort((n1, n2) => n1 - n2);
console.log(numeros1);

// ! Exercicio.

const newEmployees = () => {
    const employees = {
      id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

const empregado = (nomeCompleto, email) => console.log({ nomeCompleto});

empregado(newEmployees);