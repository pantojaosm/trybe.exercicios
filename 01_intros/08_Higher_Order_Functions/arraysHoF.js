// todo Introdução a Higher Order Functions utilizadas com Arrays.

// & Exemplo de um array de objetos, com a utilizacao de loops.

const students = [
  { name: 'Maria', grade: 70, approved: '' },
  { name: 'José', grade: 56, approved: '' },
  { name: 'Roberto', grade: 90, approved: '' },
  { name: 'Ana', grade: 81, approved: '' },
];

function verifyGrades() {
  for (let index = 0; index < students.length; index += 1) {
    const student = students[index];
    if (student.grade >= 60) {
      student.approved = 'Aprovado';
    } else {
      student.approved = 'Recuperação';
    }
  }
}

verifyGrades();

console.log(students);
// [
//   { name: 'Maria', grade: 70, approved: 'Aprovado' },
//   { name: 'José', grade: 56, approved: 'Recuperação' },
//   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
//   { name: 'Ana', grade: 81, approved: 'Aprovado' }
// ]

// & Mesmo exemplo, com forEach, com o objetivo de repetir todos os elementos de um array.

const studentsTrybe = [
  { name: 'Maria', grade: 70, approved: '' },
  { name: 'José', grade: 56, approved: '' },
  { name: 'Roberto', grade: 90, approved: '' },
  { name: 'Ana', grade: 81, approved: '' },
];

function verifyGrades() {
  students.forEach((student, index) => {
    if (student.grade >= 60) {
      students[index].approved = 'Aprovado';
    } else {
      students[index].approved = 'Recuperação';
    }
  });
}

verifyGrades();

console.log(studentsTrybe);
// [
//   { name: 'Maria', grade: 70, approved: 'Aprovado' },
//   { name: 'José', grade: 56, approved: 'Recuperação' },
//   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
//   { name: 'Ana', grade: 81, approved: 'Aprovado' }
// ]

// * Com a arrow function, é utilizado a capacidade do javascript de armazenar a função dentro de uma variável (const). 

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

//  & O exmeplo abaixo é mostrado uma função para implementar um laço de repetição entre 0 e um número especificado via parâmetro (number) e para mostrar no console o valor da variável count de 0 a N (number).

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(5, console.log); // * 0 1 2 3 4 5;


const repeatAgain = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeatAgain(3, (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even.');
  } else {
    console.log(number, 'is odd.');
  }
});

const repeatOneMoreTime = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
};

const isOdd = (number) => {
  if ((number % 2) > 0) {
    console.log(number, 'is odd');
  }
};

repeat(3, isEven); // Testa quais números serão pares;
repeat(3, isOdd); // Testa quais números serão ímpares;

const numberGenerator = () => {
  return Math.random() * 100;
}

console.log(numberGenerator());

// * Ao executar esse código, não recebemos um número aleatório. Isso aconteceu porque na quinta linha do script nós imprimimos apenas a escrita da função, como não realizamos sua execução, ela não seguiu os procedimentos para retornar um número aleatório. Para executarmos a função, teríamos que inserir () na frente do numberGenerator.



const soma = (numero1, numero2) => numero1 + numero2;

const menos = (numero1, numero2) => numero1 - numero2;

const calculadora = (funcao) => funcao(10, 5);

console.log(calculadora(soma));



const primeiro = () => 'Acordando!';

const segundo = () => 'Bora tomar café!';

const terceiro = () => 'Partiu dormir!';

const doingThings = (callback) => console.log(callback()); 

doingThings(primeiro);