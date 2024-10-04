/**
 * 함수 오버로딩
 * 하나의 함수를 매개변수의 개수나 타입에 따라
 * 여러가지 버전으로 만드는 문법
 * -> 하나의 함수 func
 * -> 모든 매개변수의 타입 number
 * -> 매개변수가 1개 -> 이 매개변수에 20을 곱한값 출력
 * -> 매개변수가 3개 -> 이 매개변수들을 다 더한 값을 출력
 */

// 버전들 -> 오버로드 시그니처
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현부 -> 구현 시그니처
function func(a: number, b?: number, c?: number) {
  // 만약 b,c 를 선택적 프로퍼티로 만들어줘야 모든 오버로드 시그니처들이 의미가 있도록
  // 만들어야 한다.

  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

// func();
func(1);
// func(1, 2);
func(1, 2, 3);

// 18,20 번은 오버로드 시그니처에 해당안되서 에러가 발생한다.

// 오버로딩을 하지않고?
function test(a: number, b?: number, c?: number): void {
  if (typeof b === "number" && typeof c === "number") {
    console.log("테스트 동작하나?", a + b + c);
  } else {
    console.log(a * 10, "A만 들어왔나봐~");
  }
}

test(1);
test(1, 2);
test(1, 2, 3);
