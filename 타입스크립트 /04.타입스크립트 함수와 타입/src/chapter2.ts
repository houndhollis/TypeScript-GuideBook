/**
 * 함수 타입 표현식
 */

// 자바스크립트 함수를 만들듯이 타입을 타입 별칭으로 정의 가능
type Operation = (a: number, b: number) => number;

// 12번째 줄 처럼 넣을수 있는 이유, 타입 별칭으로 정의한 6번째 줄은 사실 우항에 값을 좌항으로 부르겠다는
// 뜻이기 때문에 12번째 처럼 작성해도 무방하다

const add: Operation = (a, b) => a + b;
const sub: (a: number, b: number) => number = (a, b) => a - b;

/**
 * 호출 시그니쳐
 * (콜 시그니쳐)
 * 함수의 타입을 별도로 정의하는 방법
 */

type Operation2 = {
  (a: number, b: number): number;
};

// 함수 타입 표현식과 동일한 기능을 한다. 아래 ( 부분부터 옮기면 그대로 호출 시그니처 처럼 보인다.
function func(a: number): void {}

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
