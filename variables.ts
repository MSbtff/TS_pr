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

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x: 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates); //{x: 10, y: 20};

coordinates.askdfjhaskfjhasfkasjhfkasjhf; //error any 타입이라서 에러가 안남

// 위에  json과 coordinates를 보면 any 타입이라서 좋지 않다.
// 그렇기에 annotation을 사용해서 좋은 코드를 만들어야 한다.
