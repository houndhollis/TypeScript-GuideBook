/**
 * 타입 단언, assertion
 */

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "김영웅";
person.age = 27;

// 해당 person의 경우 처음부터 Person 타읍을 넣으면 객체의 빈값이라 에러가 나고,
// 타입을 지정해주지 않고 11,12 번 줄처럼 넣을 경우 에러가 발생한다 프로퍼티없음
// 이러한 경우일 떄는

// 뒤 에다가 as Person 으로 단언 하면된다.

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B A가 B의 슈퍼타입 이거나
 * A 가 B의 서브타입 이여야 한다
 */

let num1 = 10 as never;
let num2 = 10 as unknown;

// let num3 = 10 as string; 해당은 서로 겹치지 않음으로 실패한다.

/**
 * const 단언
 */

let num4 = 10 as const; // number 리터럴 타입 10으로 추론이된다.

let cat = {
  name: "야옹이",
  color: "Yellow",
} as const;

// 모든 프로퍼티가 읽기전용이 된다. 프로퍼티 값 수정 불가능,

/**
 * Non Null 단언
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "김영웅",
};

const len: number = post.author!.length;
// 해당 상위 값 자체가 undefined 이 될수도 있다. number | undefined?
// Non Null 단언을 사용 할 경우 진짜 있어 라고 강조 한다.
