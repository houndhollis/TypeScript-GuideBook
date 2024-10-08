// 원시타입

// number
let num1: number = 1;
let num2: number = -1;
let num3: number = 0.1;
let num4: number = -0.1;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// string
let str1: string = "Hello";
let str2: string = "hello"; // 싱글 쿼터
let str3: string = `hello ${num1}`;

// str1.toFixed(); string 타입에 number 타입 메소드 사용불가

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let un1: undefined = undefined;

// 만약 중간에 넣을 타입이 없어서 잠깐 null 이라도 넣고 싶다면?
// tsconfig.json -> strictNullChecks 옵션

let test: number = null;
// number 타입에 null 임시로 넣을수 있다.

// 리터럴 타입 값 자체가 타입이 되는 타입이다 리러럴 자체가 값이다.
let numA: 10 = 10;

// numA = 20;
let strA: "hello" = "hello";
// strA = "123";

// 위에 에러가 나는 것을 볼 수 있다.
