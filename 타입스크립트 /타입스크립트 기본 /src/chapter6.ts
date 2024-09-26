// any
// 특정 변수의 타입을 우리가 확실히 모를때 사용한다.

let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};
anyVar = () => {};

anyVar.toUpperCase();
anyVar.toFiexd();

let num: number = 10;
num = anyVar;

// any 타입은 타입검사는 피하지만 런타임에서는 오류가 발생한다.

// unknown
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// 모든 값을 저장할순 있지만, 아래처럼 집어넣을 수가 없다. 연산도 불가능하다.
// num = unknownVar; -> 에러 하지만 "타입 정제"를 통해선 가능하다
if (typeof unknownVar === "number") {
  num = unknownVar; // -> 에러 X
}
