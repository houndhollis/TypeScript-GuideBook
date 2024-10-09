/**
 * 템플릿 리터럴 타입
 */

type Color = "red" | "black" | "white";

type Animal = "dog" | "cat";

// type ColorredAnimal = "red-dog" | "red-cat";

type ColorredAnimal = `${Color}-${Animal}`;
// 모든 타입이 조합된 타입이 생긴다.
