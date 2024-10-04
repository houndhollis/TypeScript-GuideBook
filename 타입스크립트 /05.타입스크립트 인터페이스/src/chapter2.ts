/**
 * 인터페이스 확장
 * 인터페이스는 객체타입이면 다 할당이 가능하다.
 * 7번째 줄이 interface가 아닌 type 이여도 가능하다.
 */

interface Animal {
  name: string;
  age: number;
}

interface Dog {
  name: string;
  age: number;
  isBark: boolean;
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  name: "꼬끼오"; // 스트링 리터럴로 다시 정의, Animal 에 string 타입의 서브타입 이여서 가능
  isFly: boolean;
}

// 확장을 쓰면 중복적인 프로퍼티를 줄일수 있다.
// 확장한다는 것은 기존에 것에서 추가한다는 뜻이다.
// Cat 을 보면 Animal 타입에 isScratch 를 추가한 객체 타입이 된다
// 다른 말로는 상속이라고도 한다.

const cat: Cat = {
  name: "까마",
  age: 5,
  isScratch: false,
};

const chicken: Chicken = {
  name: "꼬끼오", // 이값은 위에서 확장 할 때, name 값을 다시 정의했을 경우
  // 스트링 리터럴이 되면서 다른 값으로는 할당은 안된다.
  age: 11,
  isFly: true,
};

/**
 * 다중 확장
 */

interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "꼬미까마?",
  age: 5,
  isBark: true,
  isScratch: true,
};
