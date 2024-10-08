/**
 * 제네릭
 */

function func(value: unknown) {
  return value;
}

let num = func(10);

let bool = func(true);

// 전부다 any 타입인 이유는 함수의 반환값 타입은 해당함수 리턴값인데, Value
// 의 타입이 any 타입이니깐 어떻게 하든 any 타입이 반환되서 다 any 타입으로 추론된다.

// 그렇다고 unknown 으로 명시해주고
// num.toUppercase();
// num.toFixed(); !!둘다 에러!!

// unknown 은 어떤 연산 어떤 메소드를 할수없다, 만약 사용할려면 타입을 좁혀야한다.
if (typeof num === "number") {
  num.toFixed();
}

// 이런경우 사용하면 좋은것이 제네릭이다
// 제네릭 함수로 만들면 된다, 함수의 인수에 따라서 반환값에 타입을 가변적으로 정할수있다.
// 제네릭은 일반적인, 포괄적인 뜻을 가진다.
// 모든 타입을 두루두루 쓸수있는 범용적인 함수다

function func2<T>(value: T): T {
  return value;
}

let num2 = func2(10);
// 이렇게 했을 경우, num2 는 number 타입을 가진다
num2.toFixed();

let str2 = func2("str");

str2.toUpperCase();

// 제네릭 함수는 함수명 뒤에 타입변수를 꺽새뒤에 선언후 타입변수에 할당되는 타입은
// 타입을 호출할때 인수에 따라서 결정된다.

let arr = func2<[number, number, number]>([1, 2, 3]);
// 함수명 뒤에 붙인 튜플이 제네릭 함수의 함수뒤에 꺽새 T부분으로 할당이된다.
