import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result = 0;
  const firstNumber = Big(numberOne || '0');
  const secondNumber = Big(numberTwo || '0');

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
    try {
      result = firstNumber.div(secondNumber);
    } catch (err) {
      result = 'ERROR';
    }
  }

  if (operation === '%') {
    result = firstNumber.times(Big(0.01));
  }

  return result.toString();
};

export default operate;
