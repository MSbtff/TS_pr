// Type annotation vs Type inference

// code we add to tell Typescript what type of argument a function will receive and what type of values it will return
// 함수가 어떤 타입의 인수를 받을 것인지와 어떤 타입의 값을 반환할 것인지를 알려주기 위해 추가하는 코드

// Type inference
// Typescript tries to figure out what type of value a function will return
// 타입스크립트는 함수가 어떤 타입의 값을 반환할지 알아내려고 시도한다.

// return type inference
// 타입 추론을 통해 함수가 어떤 타입의 값을 반환할지 알아낸다.
// 그렇기에 함수의 반환 값에 대한 타입을 명시할 필요가 없다.
const add = (a: number, b: number) => {
  return a + b;
};

// 함수 안에서 return을 사용하지 않는 경우에는 return annotation을 사용하지 않아도 된다.
// 그러나 return annotation을 사용하는 것이 좋다.
// return annotation을 사용하면 함수가 어떤 타입의 값을 반환할지 알 수 있다.
const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};
