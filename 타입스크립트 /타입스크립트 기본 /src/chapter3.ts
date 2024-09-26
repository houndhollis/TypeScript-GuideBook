// 객체

let user: { id?: number; name: string } = {
  id: 1,
  name: "a",
};
// 중괄호를 이용해서 타입을 정의하는 것을 = 객체 리터럴 타입
user.id; // id 에 마우스 올려보면 number 이 나온다.

user = {
  name: "홍길동",
};

// 3번째 줄 id 뒤에 ? 를 통해서 10번째 줄에서 id를 넣지않아도 오류가 나지 않는다,
// 이런거를 "선택적 프로퍼티, 옵셔널 프로퍼티" 라고한다.

let config: { readonly apiKey: string } = {
  apiKey: "MY API Key",
};

// readonly 추가 시 값 변경 불가
