// void -> 공허 -> 아무것도 없다.

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
  // 아무것도 반환하지 않는 함수
}

// 추가 자바스크립트는 실젯값이 반환되지 않는 경우 기본으로 undefined를 반환한다.

let a: void;
// a = '1'
// a = 1
a = undefined; // 유일하게 undefined 만 가능
a = null;
// tsconfig 옵션에서 널체크 옵션 끄면 null 도 할당 가능

// never -> 존재하지 않는 -> 불가능한 타입 -> 모순을 의미한다 / never 타입은 15,16 번줄도 불가능하다

// 가설 : never 타입이 되니깐 never 타입은 모든 타입의 서브타입이니깐 다른 타입도 다 대입 가능하다?
function func3(): never {
  while (true) {} // 무한루프
}

function func4(): never {
  throw new Error(); // 에러 표기 별표
}
