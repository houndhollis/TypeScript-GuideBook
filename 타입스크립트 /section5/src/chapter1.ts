/**
 * 인터페이스
 */

interface Person {
  readonly name: string;
  age?: number;
  // sayHi: () => void;
  // 호출 시그니쳐도 사용가능 (10번줄)
  sayHi(): void;
  sayHi(a: number, b: number): void;
  // * 오버로드를 사용하고 싶으면 호출 시그니처로 사용하는걸 권장한다 화살표x
}

const person: Person = {
  name: "김영웅",
  age: 27,
  sayHi: () => {
    console.log("123");
  },
};

// 타입 별칭과 기본적인 문법은 같다.

// person.name = '이거안돼!'

person.sayHi();
person.sayHi(1, 2);

// 타입 별칭과 차이점 (인터페이스는 만들수가 없다) 사용하고 싶으면 타입 별칭 뒤에 붙이는건 가능하다
type Tpye1 = number | string; // 유니온
type Type2 = number & string; // 인터섹션
type Type3 = number | Person;
type Type4 = string & Person;
