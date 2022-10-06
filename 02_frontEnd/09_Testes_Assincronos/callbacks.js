// ^ Callbacks

// ^ Uma função passada como parâmetro para outra função.

// & despesas.js

const minhasDespesas = [
    {
      academia: 99,
    },
    {
      ifood: 200,
    },
    {
      celular: 60,
    },
    {
      internet: 100,
    },
  ];
  
  const minhaRenda = 1000;

  const despesaMensal = (renda, despesas, callback) => {
    const despesaTotal = callback(despesas);
    const saldoFinal = renda - despesaTotal;
  
    console.log(`Balanço do mês:
      Recebido: R$${renda},00
      Gasto: R$${despesaTotal},00
      Saldo: R$${saldoFinal},00 `);
  };