let apples: number = 5; //콜론 다음에 있는 것이 타입 애너테이션(annotaition)

apples = 10;
//apples = 'asdfasfdsa'; //error

let speed: string = 'fast';
let hasNmae: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

//built in objects
let now: Date = new Date();

//Array
let colors: string[] = ['red', 'green', 'blue']; //[]는 문자열 배열만 있다고 선언한 것
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

//Class
class Car {}

let car: Car = new Car();

//Object literal
let point: {x: number; y: number} = {
  x: 10,
  y: 20,
};

//Function
// 함수에 대한 설명
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations (annotation을 사용하는 경우)
// 1) Function that returns the 'any' type
const json = '{"x: 10, "y": 20}';
const coordinates: {x: number; y: number} = JSON.parse(json);
console.log(coordinates); //{x: 10, y: 20};

coordinates.askdfjhaskfjhasfkasjhfkasjhf; //error any 타입이라서 에러가 안남

// 위에  json과 coordinates를 보면 any 타입이라서 좋지 않다.
// 그렇기에 annotation을 사용해서 좋은 코드를 만들어야 한다.
// 함수를 호출할때마다 any 타입을 리턴하기에 애너테이션을 사용하는 거다.

// 2) When we declare a variable on one line
// and initialize it later (한 줄에 변수를 선언하고 나중에 초기화할 때 )
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly(유형을 올바르게 유출할 수 없는 변수)
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i]; //형식 추론을 할 수 없기에 에러가 난다.
    //우리는 numberAboveZero가 boolean이라는 것을 알고 있지만
    // 타입스크립트는 numberAboveZero가 boolean이라는 것을 알지 못한다.
  }
}

// |(파이프) 는 or를 의미한다.
