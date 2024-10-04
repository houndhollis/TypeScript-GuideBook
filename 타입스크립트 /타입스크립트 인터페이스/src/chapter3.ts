/**
 * 인터페이스 선언 합치기
 */

interface Person {
  name: string;
}

interface Person {
  age: number;
}

// type 별칭과 다르게 에러가 나지않는다.
// interface 선언 합침에서 충돌은 허용하지 않는다
// 상속 부분에서는 string -> string 리터럴로 가는거는 허용이지만 합치기 부분에서는 안된다.

const person: Person = {
  name: "",
  age: 22,
};

/**
 * 모듈 보강
 */

interface Lib {
  a: number;
  b: number;
}
// 라이브러리 에서 타입선언이 끝난뒤에 추가하고 싶을 경우 합치기 가능

// 예시
interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
};
