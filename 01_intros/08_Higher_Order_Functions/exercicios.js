
  // ^ Criar uma funcao que retorne um objeto no formato { nomeCompleto, email };
  // ^ Passe sua função como parâmetro da HOF newEmployees;
  // ^ Use tambem para criar cada pessoa contratada em seu respectivo id;
  // ^ A sua função deve receber como parâmetro o nome completo da pessoa funcionária;
  // ^ E gerar automaticamente um email no formato nome_da_pessoa@trybe.com;

const nomeEmpregado = (nome) => {
    return { nome };
}

const emailEmpregado = (nome) => {
    const email = nome.replace(' ', '_');
    return { nome, email: `${email}@trybe.com`};
}

const newEmployees = (callback) => {
    const employees = {
      id1: (callback('Pedro Guerra')), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: (callback('Luiza Drumond')), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: (callback('Carla Paiva')), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

console.log (newEmployees(emailEmpregado));