/**
 * 대수 타입
 * -> 여러개의 타입을 형성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재한다.
 */

/**
 * 1. 합집합 - Union 타입
 */

let a: string | number | boolean;
a = 1;
a = "hi";
a = true;

let arr: (number | string | boolean)[] = [1, "hi", true];

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "나",
  color: "",
};

let union2: Union1 = {
  name: "zz",
  language: "ko",
};

let union3: Union1 = {
  name: "11",
  color: "red",
  language: "ko",
};

/**
 * 교집합 타입 - Intersection 타입
 */

let variable: number & string;

type Dog = {
  name: string;
  color: String;
};

type Person = {
  name: string;
  language: string;
};

type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};
