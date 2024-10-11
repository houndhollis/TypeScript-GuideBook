/**
 * infer
 * inference -> 추론하다
 */

type FuncA = () => string;

type FuncB = () => number;

type ReturnType<T> = T extends () => string ? string : never;

type ReturnInfer<T> = T extends () => infer R ? R : never;
// infer 와 함께쓴 함수타입의 타입이 R타입의 서브타입이냐? 라고 묻는거다,
// 만약 R 타입의 T타입을 넣을수 있으면 참이 된다.
type A = ReturnType<FuncA>;

type B = ReturnInfer<FuncB>;
// ReturnTpye은 B 는 never 타입이다,
// 하지만 B는 number 가 나온다.

type C = ReturnInfer<number>;
// 추론이 불가해서 never 타입이 된다. () => any 여도 number의 서브타입이 될수가 없다,

/**
 * 예제
 */

type PromiseUnPack<T> = T extends Promise<infer R> ? R : never;
// 1. T 는 프로미스 여야 한다,
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.

// 결론 타입 변수로 넣은 T값이, Promise<infer R> 가 서브타입이 되는 R타입을 추론하라
// 해당 내용이 참이 될수 있으면, R을 반환하고 아니면 never다

type PromiseA = PromiseUnPack<Promise<number>>;

type PromiseB = PromiseUnPack<Promise<string>>;
