function saudacao(name) {
    return `Hello, ${name}...`
}

console.log(saudacao('Batata'));

const greet = function (name) {
    return `Hello, ${name}...`
}

console.log(greet('Batata'));

const ola = (nome) => `Hello, ${nome}...`

function speakToMary(dialog) {
    const text = dialog('Mary')
    return `He says "${text}"`
};

console.log(speakToMary(name => {
    return `Goodbye, ${name}.`
}));

// * Filtrando os Hobbits do array de personagens.

const characters = [
    {name: 'Frodo', race: 'Hobbit' },
    {name: 'Sam', race: 'Hobbit' },
    {name: 'Aragorn', race: 'Man' },
    {name: 'Legolas', race: 'Elf' },
    {name: 'Gimli', race: 'Dwarf' },
    {name: 'Boromir', race: 'Man' },
    {name: 'Merry', race: 'Hobbit' },
    {name: 'Pippin', race: 'Hobbit' },
    {name: 'Gandalf', race: 'Ainur'},
];

// const Hobbits = [];

// for (let index = 0; index < characters.length; index += 1) {
//     if (characters[index].race === 'Hobbit') {
//         Hobbits.push (characters[index]);
//     };
    
// };

// const hobbits = characters.filter(function(characters) {
//     return characters.race === "Hobbit"
// });

const hobbitsArrow = characters.filter(characters => characters.race === "Hobbit");

console.log(hobbitsArrow);
