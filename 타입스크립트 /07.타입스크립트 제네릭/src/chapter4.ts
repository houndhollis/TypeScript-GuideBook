/**
 * 제네릭 인터페이스
 */

interface KeyPair<K, V> {
  // <> : 타입 변수, 타입 파라미터, 제네릭 타입 파라미터, 제네릭 타입 변수 파라미터
  // 다 같은말임
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  // 제네릭 인터페이스는 꼭 꺽새에 타입을 넣어줘야 한다.
  key: "myKey",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

/**
 * 인덱스 시그니쳐 와 제네릭 인터페이스
 */

interface NumberMap {
  [key: string]: number;
  // 키와 벨류의 타입의 관련된 규칙만 만족하면 되는 유연한 타입
}

let numberMap1: NumberMap = {
  key: -1231,
  key2: 123123,
};

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
};

/**
 * 제네릭 타입 별칭
 */

type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "hello",
};

/**
 * 언제 사용하면 좋은가? 활용 예시
 * -> 유저 관리 프로그램
 * -> 유저 구분: 학생 유저 / 개발자 유저
 */

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const developerUser: User<Developer> = {
  name: "김영웅",
  profile: {
    type: "developer",
    skill: "TypeScript",
  },
};

const studentUser: User<Student> = {
  name: "김영웅",
  profile: {
    type: "student",
    school: "대학교",
  },
};

// 결론
// 제네릭 인터페이스를 사용하면 복잡한 객체 타입을 사용할때, 제네릭 인터페이스를 사용하면
// 비교적 코드들, 타입들을 깔끔하게 사용할 수 있다.
