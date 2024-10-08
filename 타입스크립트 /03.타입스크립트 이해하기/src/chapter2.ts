/**
 * 기본 타입간의 호환성 복습
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;
// num2 = num1; 다운 캐스팅

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은지
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: " 사자",
  color: "Yello",
};

let dog: Dog = {
  name: "꼬미",
  color: "white",
  breed: "폼피츠",
};

animal = dog;

// dog = animal;
/**
 * 도그 타입이 더 큰타입이 아닌가 생각할수 있지만,
 * 타입스크립트는 구조적 타입시스템을 따른다 애니멀 타입같은 경우 dog 타입에
 * 포함된다고 보기 힘들다. 추가 프로퍼티가 있는 편이 서브 타입이 된다.
 */

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skills: string;
};

let book: Book = {
  name: "js",
  price: 100,
};

let proBook: ProgrammingBook = {
  name: "react",
  price: 150,
  skills: "js",
};

book = proBook; // 업 캐스팅
// proBook = book // 다운 캐스팅

/**
 * 초과 프로퍼티 검사 업캐스팅은 되지만 객체 타입에 정의된 프로퍼티만 넣어야된다.
 */

type Book2 = {
  name: string;
  price: number;
};

let book2: Book2 = {
  name: "타입스크립트",
  price: 100,
  // skill: "react",
};
