import operate from './operate';

const calculate = (data, btnName) => {
  const values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const { total, next, operation } = data;
  const symbols = ['+', '-', 'x', '÷', '%'];

  if (symbols.includes(btnName) && total && next) {
    return {
      total: operate(total, next, operation).toString(),
      operation: btnName,
      next: null,
    };
  }

  if (symbols.includes(btnName) && !next && total) {
    return {
      total,
      operation: btnName,
      next,
    };
  }

  if (symbols.includes(btnName) && next && !total) {
    return {
      total: next,
      operation: btnName,
      next: null,
    };
  }

  if (total === 'ERROR') {
    return {
      total: null,
      operation: null,
      next: null,
    };
  }

  if (btnName === '+/-' && !next && total && total !== 'ERROR') {
    return {
      total: (total * -1).toString(),
      next,
      operation,
    };
  }

  if (values.includes(btnName)) {
    return {
      total,
      next: next ? `${next}${btnName}` : `${btnName}`,
      operation,
    };
  }

  if (btnName === '+/-' && next && total !== 'ERROR') {
    return {
      total,
      next: (next * -1).toString(),
      operation,
    };
  }

  if (btnName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (btnName === '=') {
    return {
      total: operate(total, next, operation),
      next: null,
      operation: null,
    };
  }

  if (btnName === '.') {
    if (!next) {
      return {
        total,
        next: '0.',
        operation,
      };
    }
    if (next && !next.includes('.')) {
      return {
        total,
        next: `${next}.`,
        operation,
      };
    }
  }

  return [total, next, operation];
};

export default calculate;
