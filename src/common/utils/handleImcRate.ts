export const handleImcRate = (height: number, weight: number) => {
  const HEIGHT_IN_METERS = height / 100;
  const imc = Number((weight / Math.pow(HEIGHT_IN_METERS, 2)).toFixed(1));

  switch (true) {
    case imc < 18.5:
      return { imc, reference: 'Abaixo do Peso' };
    case imc > 18.5 && imc < 24.9:
      return { imc, reference: 'Peso Normal' };
    case imc > 25 && imc < 29.9:
      return { imc, reference: 'Excesso de peso' };
    case imc > 30 && imc < 34.9:
      return { imc, reference: 'Obesidade de Classe 1' };
    case imc > 35 && imc < 39.9:
      return { imc, reference: 'Obesidade de Classe 2' };
    case imc > 40:
      return { imc, reference: 'Obesidade de Classe 3' };
  }
};
