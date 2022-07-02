// todo Introdução ao Throw e Try/Catch

// & Exemplo de uma arrrow function operante.

const sum = (value1, value2) => value1 + value2;

console.log (sum(2, '3'));

// & Exemplo 2.

const sum2 = (value3, value4) => {
    if (typeof value3 !== 'number' || typeof value4 !== 'number') {
        return 'Os valores devem ser numéricos'; 
    }
    return value3 + value4;
};

console.log(sum2(2, '3'));

// ! Fluxo de exceção (THROW)

const sum3 = (value5, value6) => {
    if (typeof value5 !== 'number' || typeof value6 !== 'number') {
        throw new Error ('Os valores devem ser numéricos.');
    }
    return value5 + value6;
};

console.log(sum3(2, '3'));

// ! Bloco TRY/CATCH

const verifyNumber = (value7, value8) => {
    if (typeof value7 !== 'number' || typeof value8 !== 'number') {
        throw new Error('Os valores devem ser numéricos.');
    }
};

const sum4 = (value7, value8) => {
    try {
        verifyNumber(value7, value8);
        return value7 + value8;
    } catch (error) {
        return error.message;
    }
};

console.log(sum4(2, '9'));

// ! Objetos - Adicionando novas chaves (keys).

// & Exemplo de adição de uma nova propriedade, alterando no código.

const costumerA = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
};

const costumerB = {
    firstName: 'Roberto',
    lastName: 'Faria', // * Adição de uma propriedade.
    age: 22,
    job: 'Teacher',
};

// & Exemplos de adição de uma nova propriedade, sem a necessidade de mudar no código.

const costumerC = {
    firstName: 'Breno',
    age: 27,
    job: 'Teacher',
};

console.log(costumerC);

customerC.lastName = 'Gabriel'; // * Adição de uma propriedade, com a sintaxe objeto.nomePropriedade;
console.log(customerC);

costumerC['lastName'] = 'Gabriel'; // * Adição de uma propriedade, com a sintaxe objeto[variavelNomePropriedade];
console.log(costumerC);


const costumer2 = {
    firstName: 'Breno',
    age: 27,
    job: 'Teacher',
};
  
let newKey = 'lastName';
const lastName = 'Gabriel';

customer2[newKey] = lastName;
newKey = 'fullName';

const fullName = `${customer2.firstName} ${customer2.lastName}`;
customer2[newKey] = fullName;

console.log(customer2);