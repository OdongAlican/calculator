import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result = 0;
  const firstNumber = Big(numberOne);
  const secondNumber = Big(numberTwo);

  if (operation === '+') {
    result = firstNumber.plus(secondNumber);
  }

  if (operation === '-') {
    result = firstNumber.minus(secondNumber);
  }

  if (operation === 'x') {
    result = firstNumber.times(secondNumber);
  }

  if (operation === '÷') {
    result = firstNumber.div(secondNumber);
  }

  if (operation === '%') {
    result = firstNumber.mod(secondNumber);
  }

  return result;
};

export default operate;
