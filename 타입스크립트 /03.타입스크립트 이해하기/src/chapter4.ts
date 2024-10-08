/**
 * 타입 추론
 */

let a = 10;
let b = "hi";

// 일반적으로 변수를 선언 하고 초기화하는 상황에서는 타입을 추론한다.
// 초기값을 기준으로 변수의 타입을 추론 한다

let c = {
  id: 1,
  name: "김영웅",
  profile: {
    nickname: "hound",
  },
  urls: "www.naver.com",
};

// 'c' 부분 마우스 올리면 타입 추론하는 모습을 볼 수 있고 아래에서도 볼 수 있다.

let { id, name, profile } = c;

let [one, two, three] = [1, "hi", true];

function func(message = "hi") {
  return "hello";
  // 반환값, 매개변수도 기본값 추론 가능
}

let d; // 초기값 어려울 경우 any 타입으로 된다
d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();
// 위처럼 암묵적 any 타입으로 시작했다가 변수값 할당 따라 any값이 진화한다.

const num = 10; // const 로 선언할 경우 number 타입 리터럴로 된다.
const str = "Hello";

let arr = [1, "string"]; // 유니온 타입으로 된다.
