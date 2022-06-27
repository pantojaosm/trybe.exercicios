// todo Exercícios de Arrow Functions.

function testingScope(escopo) {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(`ótimo, fui utilizada no escopo! ${escopo}`);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
  }

  testingScope(true);

const testingScope = (escopo) => (
    escopo === true ? `ótimo, fui utilizada no escopo!` : `Não devo ser utilizada fora meu escopo (else)`
    );
  
    console.log(testingScope(true));

