// Símbolos das Marcações: &, todo, ^, ~, *, !.

// todo: Introdução ao VAR, LET e CONST.

function userInfo() {
    let userEmail = 'maria@email.com';
  
    // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail.
    console.log(userEmail);
  }
  
  userInfo();

function minhaIdade() {
    for (let idade = 78; idade <= 100; idade +=1) {
        
        console.log(idade);
    }

    // console.log('Fora do for', idade);

}

minhaIdade();

const estudante = {
    nome: 'Maria',
    idade: 23
};

estudante.idade = 24;

console.log(estudante);


let favoriteTechnology = 'Machine learning';
favoriteTechnology = 'Facial recognition';
console.log(favoriteTechnology); // Facial recognition


// ! Template Literals - Escrita de strings mais complexas.

// & Sem ES6...
const myName = 'Isabella';
console.log('Hello' + ' ' + myName + '!');

// * Com ES6...
const myNameTL = 'Isabella';
console.log(`Welcome ${myNameTL}!`);

// todo: Template literals(com quebras de linha):

// & Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');

// * Com o template literals:
console.log(`Primeira linha;
Segunda linha;
Terceira linha;`
);

// ! Arrow Functions - Escrita de funções mais diretas e simples.

// Exemplo 1
// & Sem ES6...
    const printName = function () {
        const myName = 'Lucas';
        return myName;
    };
  
    console.log(printName());

// * Com ES6...
const printNameAF = (myNameAF) => myNameAF;

console.log(printNameAF("Lucas"));


// Exemplo 2
// & Sem ES6...
    function contaPalavras(frase) {
    return frase.split(' ').length;
    };

    console.log(contaPalavras("Hello World!"));

// * Com ES6...
    const contaPalavras = frase => frase.split(' ').length;

    console.log(contaPalavras("Hello World!"));

// Exemplo de objeto:
// & Sem ES6...
    function objetoPessoa(nomePessoa, idadePessoa) {
        return {
            nome: nomePessoa,
            idade: idadePessoa
        }
    }

    console.log(objetoPessoa('Joana', 25));

// * Com ES6...
    const objetoPessoa = (nomePessoa, idadePessoa) => ({nome: nomePessoa, idade: idadePessoa});
    // ~ Atenção: Deve-se usar parênteses em caso de declaração de um objeto, porque o Javascript entende como o corpo da função, porém trata-se de um objeto.

    console.log(objetoPessoa('Joana', 25));

// ! Ternary Operator (ou Operador Ternário) - Escrita de operações condicionais (IF/ELSE) mais simples.

// & A sintaxe básica do operador ternário é muito simples:
    `expressão verdadeira ou falsa` ? `retorno se verdadeira` : `retorno se falsa`;

// * Assim, por exemplo, podemos ter expressões com a seguinte estrutura...

    const trueExpression = (1 + 1 === 2) ? `isso é verdade` : `isso é mentira`;
    console.log(trueExpression); // * isso é verdade.

    const falseExpression = (2 + 2 === 3) ? `isso é verdade` : `isso é mentira`;
    console.log(falseExpression); // ! isso é mentira.

//&  A sintaxe do operador ternário é bem simples: x ? y : z.
//~     O x é uma condição que será avaliada como verdadeira ou falsa;
//~     O y é o retorno se a condição for verdadeira;
//~     O z é o retorno se a condição for falsa;

//& Exemplo em que é mais simples usar o operador ternário:
    const checkIf_Else = (age) => {
        if (age >= 18) {
            return `Você tem idade para dirigir!`;
        } else {
            return `Você ainda não tem idade para dirigir...`;
        }
    };

    console.log(checkIf_Else(19));

    const check_Ternary = (age) => (
        age >= 18 ? `Você tem idade para dirigir!` : `Você ainda não tem idade para dirigir...`
        );
    
        console.log(check_Ternary(17));
  
  //& Exemplo em que usar o operador ternário não faz muito sentido:
    const checkIfElse = (fruit) => {
        if (fruit === `maçã`) {
            return `Essa fruta é vermelha`;
        } else if (fruit === `banana`) {
            return `Esta fruta é amarela`;
        } else {
            return `Não sei a cor`;
        }
    };
  
    const checkTernary = (fruit === `maçã`) ? `Essa fruta é vermelha`
        : ((fruit === `banana`) ? `Esta fruta é amarela` : `Não sei a cor`);
  
  //! Aninhar operadores ternários, como no exemplo acima, não é uma boa prática, pois torna o seu código truncado e difícil de ler, tirando todo o sentido de um operador cujo objetivo é facilitar a sua vida e a da pessoa que lerá seu código no futuro!