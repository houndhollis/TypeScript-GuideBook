/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 기준1. 반환값이 호환되는가

type A = () => number;

type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; // number
// b = a; // number 리터럴 이거는 다운 캐스팅 성립이 안됨.

// 기준2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때

// C, D 는 함수타입 표현식
// D2 는 호출 시그니쳐 방식으로 풀이,
type C = (value: number) => void;
type D = (value: number) => void;
type D2 = {
  (value: number): void;
};

let c: C = (value) => {};
let d: D = (value) => {};
let d2: D2 = (value) => {};

c = d;
d = c;
c = d2;
d = d2;
d2 = c;
d2 = d;

// 매개변수 타입으로만 보면, 평상시 안됐던 다운캐스팅이 되고 업캐스팅이 안된다.

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

/**
 * animalFunc = dogFunc; 이거는 안된다 66~68 줄과 같다.
  dogFunc =animalFunc  아래는 된다

  let testFunc = (animal: Animal) => {
    console.log(animal.name);
    console.log(animal.dog);
};
 */

// 2-2. 매개변수의 개수가 다를 때

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1;
