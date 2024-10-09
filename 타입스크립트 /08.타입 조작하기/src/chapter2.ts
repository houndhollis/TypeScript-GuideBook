/**
 * keyof 연산자
 * 객체 타입에 적용하는 연산자다
 * 오른쪽에 있는 객체 타입으로 부터 프로퍼티 키들을 유니언 타입으로 반환해준다.
 */

// interface Person {
//   name: string;
//   age: number;
// }

// 추가로 typeof 연산자는 어떤 변수의 타입을 뽑아내는 용도로도 쓰인다.
type Person = typeof person;

function getPropertyKey(person: Person, key: keyof Person) {
  // keyof 연산자를 쓰면 Person 타입 객체의 키를 유니온 타입으로 쓴다.
  // keyof typeof person 도 사용가능 하다, 원래는 변수가아닌 타입만 가능하다
  return person[key];
}

const person = {
  name: "김영웅",
  age: 27,
};

getPropertyKey(person, "name"); // 김영웅
