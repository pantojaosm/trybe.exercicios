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

// * Aula 8.2 - forEach

// Fazer o log de cada numero do array multiplicado por 3.

const numeros = [12, 3, 5, 7, 123, 55, 90, 0, 13];

// ^ Com For Of.
for (let numero of numeros) {
  console.log(numero); // * 12 3 5 7 123 55 90 0 13
};

// ^ Com o ForEach: numero.forEach(mostraNumeros)
numeros.forEach((numero) => {
  console.log(numero); // * 12 3 5 7 123 55 90 0 13
});

const estados = [
    'Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Espírito Santo',
    'Goías',
    'Maranhão',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraíma',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocantins',
];

// ? Fazer o log de todos os estados do array abaixo no formato.
// 1 - Acre
// 2 - Alagoas

// Com FOR Tradicional.
console.log('Lista de estados brasileiros');
for (let index = 0; index < estados.length; index++) {
  console.log(`${index + 1} - ${estados[index]}`);
};

// Com forEach.
estados.forEach((estado, index) => console.log(`${index + 1} - ${estado}`));

// * Conceitos de SOME e EVERY, utilizados para expressoes booleanas (TRUE/FALSE).

const pessoas = [
  {nome: 'Robert', sobreNome: 'De Niro', dirige: true },
  {nome: 'Michelle', sobreNome: 'Pfeiffer', dirige: true },
  {nome: 'Will', sobreNome: 'Smith', dirige: true },
  {nome: 'Mariah', sobreNome: 'Carey', dirige: false },
  {nome: 'Lady', sobreNome: 'Gaga', dirige: true },
  {nome: 'Gaga', sobreNome: 'Bieber', dirige: false },
]

// Usando FOR OF.
let pessoaqueSabeDirigir = false;
for (const pessoa of pessoas) {
  if (pessoa.dirige === true) {
    pessoaqueSabeDirigir = true;
    break;
  };
};

console.log('Alguem sabe dirigir?', pessoaqueSabeDirigir);

// & Usando SOME para verificar se UMA pessoa sabe dirigir.
let alguemqueDirige = pessoas.some((pessoa) => {
  return pessoa.dirige === true;
});

console.log('Alguem sabe dirigir?', alguemqueDirige);


// * Usando o EVERY para verificar se TODAS as pessoas sabem dirigir.
const todasAsPessoasDirigem = pessoas.every((pessoa) => pessoa.dirige === true);
console.log(`Todas as pessoas da lista dirigem? ${todasAsPessoasDirigem}`);

// ^ Usando o FIND para verificar a PRIMEIRA pessoa que nao sabe dirigir.
const pessoaqueNaoSabeDirigir = pessoas.find((pessoa) => pessoa.dirige === false);

console.log(pessoaqueNaoSabeDirigir);

// Pra Fixar...
// 1 - Escreva uma funcao que, dado um array de nomes e um nome retorne TRUE se ele estiver contido e caso contrario, retorne FALSE, use SOME.

const arrayNomes = ['Matheus', 'Jose', 'Ana', 'Claudia', 'Bruna', 'Lucas'];

const hasName = (array, nome) => array.some((name) => {
  return name === nome;
});

console.log(hasName(arrayNomes, 'Ana'));

// 2 - Escrever uma funcao que, dado um array de pessoas e uma idade minima retorne TRUE se todas tiverem a idade maior ou igual a minima, e caso contrario FALSE, use EVERY.

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (array, idadeMinima) => {
  return array.every((person) => person.age >= idadeMinima);
};

console.log(verifyAges(people, 18));