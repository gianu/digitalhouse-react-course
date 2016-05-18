export function addNumber(num) {
  return {
    type: 'ADD',
    payload: +num
  };
}
