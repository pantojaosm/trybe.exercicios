// todo Introdução a Higher Order Functions - Parte II

// ? First Class Functions: As funções podem ser atribuidas a variáveis, passadas como argumento, ou retornadas por outras funções.

// & Exemplo de Higher Order.

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(5, console.log); // * Resposta: 0 1 2 3 4 5;


// & Exemplo 2.

const repeat2 = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat2(7, (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even.');
  } else {
  console.log(number, 'is odd.')};
});


// & Exemplo de função como argumento para outras funções.

  const sayHello = () => {
    return ('hello trybers');
  }
  
  const printGreeting = (callback) => {
      console.log(callback());
  }
  
  printGreeting(sayHello);

// & Exemplo de retorno de uma função, vindo de outra função.

  const sumFixAmount = (amount) => {
    return (number) => amount + number;
  }
  
  const initialSum = sumFixAmount(15)
  console.log(initialSum(5));

// ? Higher Order Functions: Funções que usam outras funções em suas operações, sendo elas aceitadas como parâmetro e/ou retorná-las.

// & Exemplo de HoF:

const button = document.querySelector('#signup-button');

const registerUser = () => {
  console.log('Registrado com sucesso!');
};

button.addEventListener('click', registerUser); // * No exemplo, há uma função que simula o registro de uma nova pessoa e passamos como argumento de uma segunda função, o que torna o addEventListener uma HoF.

// ^ Numa frase... 
// ^ First Class Functions: Funções suportadas em outras operações, para serem usadas em outros tipos.
// ^ High Order Functions: Função que recebe como parâmetro e/ou retorna outra função.

// & Exercicio:

const acordar = () => {
  return ('Acorda menina!');
}
const cafe = () => {
  return ('Toma café, menina!');
}
const mimir = () => {
  return ('Vamos desligar os transmissores. Boa noite!')
}
// Ao chamar a função doingThings:
doingThings = (wakeUp) => {
  console.log(wakeUp());
}

doingThings(mimir);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!

const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
const firstMultipleOf5 = numbers.find((number) => number % 5 === 0);

console.log(firstMultipleOf5);
// 50
