/**
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기
function func(a: number, b: number) {
  return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */

const add = (a: number, b: number) => a + b;

// 매개변수를 타입을 정해주면 결과값은 타입스크립트가 추론한다

/**
 * 함수의 매개변수
 */

function introduce(name = "김영웅", tall?: number) {
  // 기본값을 넣으면 해당 타입으로만 넣어줘야 한다.
  console.log(`name:${name}, tall : ${tall}`);

  if (typeof tall === "number") {
    console.log(tall + 10);
  }
}

introduce("김영웅", 171);
introduce("김영웅"); // tall 선택적 매개변수로 만들어서 생략 가능

function getSum(...rest: number[]) {
  // 개수를 제한하고 싶으면 튜플타입으로 만들어주면 된다. [number, number, number]
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}

getSum(1, 2, 3); // 6
getSum(1, 2, 3, 4, 5); // 15
