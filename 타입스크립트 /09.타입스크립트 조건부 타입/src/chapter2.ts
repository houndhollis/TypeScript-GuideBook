/**
 * 분산적인 조건부 타입
 */

type StringNumberSwith<T> = T extends number ? string : number;

let a: StringNumberSwith<number>;

let b: StringNumberSwith<string>;
// 복습

let c: StringNumberSwith<number | string>;
// 거짓이라 넘버가 나와야하지만, 유니온 타입이 나온다. 두개가 분리되어서 들어가기 때문에
// 유니온 타입이 나오게 된다,

let d: StringNumberSwith<boolean | string | number>;
// 각각의 결과가, 넘버, 넘버, 스트링이된다.

/**
 * 실용적인 예제
 */

type Exclude<T, U> = T extends U ? never : T;
// T 가 넘버고, U 의 스트링이면 결과는 T가 된다,

type A = Exclude<number | string | boolean, string>;
// 유니언 타입에 never 타입이 포함되면 사라져버린다 never가

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;

// 분산 방지 할려면, T extends 부분 양쪽에 중괄호를 하면된다.
type StringNumberSwithTest<T> = T extends [number] ? string : number;

let test1: StringNumberSwithTest<number | string | boolean>;
// 이럴경우 넘버 타입이 모든걸 다 포함하지 않으니 넘버 타입이다.
