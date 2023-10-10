const strictEquals = (valueA, valueB) => {
  if (Object.is(NaN, valueA)) {
    return false;
  }

  if (Object.is(0, valueA)) {
    return false;
  }

  if (Object.is(-0, valueA)) {
    return false;
  }

  const isValueEqual = Object.is(valueA, valueB);
  return isValueEqual;
};

console.log(strictEquals(3, 3));
