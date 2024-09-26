// void -> 공허 -> 아무것도 없다.

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
  // 아무것도 반환하지 않는 함수
}

let a: void;
// a = '1'
// a = 1
a = undefined; // 유일하게 undefined 만 가능
// tsconfig 옵션에서 널체크 옵션 끄면 null 도 할당 가능

// never -> 존재하지 않는 -> 불가능한 타입 -> 모순을 의미한다 / never 타입은 15,16 번줄도 불가능하다
function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}
