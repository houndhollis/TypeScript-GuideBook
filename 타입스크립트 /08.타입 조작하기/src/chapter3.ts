/**
 * 맵드 타입
 */

interface User {
  id: number;
  name: string;
  age: number;
}

// 맵드 타입은 interface 에서 사용할 수 없다.
type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
  // 키를 정의하는 곳 : 그 키의 value
  // 대괄호가 끝나는 부분에 ? 를 붙이면, 모든 타입이 선택적 프로퍼티가 된다.
  // 만약 모든 타입을 쓰기 힘들면 keyof 연산자를 쓰면된다.
};

type BooleanUser = {
  [key in keyof User]?: boolean;
  // 모든 값이 bool 값을 갖는다.
};

type ReadOnlyUser = {
  readonly [key in keyof User]: User[key];
  // 모든 프로퍼티 읽기전용으로 가능
};

// 한명의 유저 정보를 불러오는 기능

function fetchUser(): User {
  // ... 기능
  return {
    id: 1,
    name: "김영웅",
    age: 28,
  };
}

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  // PartialUser 를 만들어서 모든 프로퍼티가 선택적 프로퍼티다
  // ... 수정하는 기능
}

// 수정할때 User타입을 매개변수값으로 넣어줘야 하기 때문에 값이 많으면 불필요한 값까지
// 넣어야 한다. 그렇기 때문에 맵드타입을 사용하면 해결할 수 있다.
updateUser({
  age: 5,
});
