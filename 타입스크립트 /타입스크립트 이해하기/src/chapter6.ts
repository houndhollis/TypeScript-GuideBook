/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기
 */

type Person = {
  name: string;
  age: number;
};

// value => number 타입일 때는 toFiexd
// value => string : toUpperCase
// value => Date : getTime
// value => Person : name 은 age 살입니다.
function func(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    // number 타입 이외에는 올수 없다는 타입가드 라고도 한다.
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
    // } else if (typeof value === "object") {
    // 유니온 타입으로 Date 랑 null 이 올 경우에는 value 값을 Date 값이라고 보장할수 없다.
  } else if (value instanceof Date) {
    // instanceof 는 왼쪽에 있는 값이 오른쪽의 인스턴스냐 라고 물어보는 것이다.
    console.log(value.getTime());
    // } else if (value instanceof Person) {
    // instance 연산자는 오른쪽에 타입이 오면안된다.
  } else if (value && "age" in value) {
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }
}
