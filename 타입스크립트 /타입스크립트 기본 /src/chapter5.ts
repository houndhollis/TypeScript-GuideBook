// enum 타입 (열거형 타입)
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN,
  USER = 10,
  GUEST,
  // 숫자를 입력하지 않아도 자동으로 숫자가 위에서부터 0부터 시작 만약 첫번째 10을 입력하면 그 밑은 11이다.
  // 위의 같은 경우를 숫자형 enum 이라고 한다.
}

// 문자형 enum
enum Language {
  korea = "ko",
  english = "en",
}

// enum 은 컴파일 후 사라지지 않는다.

const user1 = {
  name: "김영웅",
  role: Role.ADMIN, // <- 관리자
  language: Language.korea,
};

const user2 = {
  name: "강혜원",
  role: Role.USER, // <- 일반유저
  language: Language.korea,
};

const user3 = {
  name: "꼬미",
  role: Role.GUEST, // <- 게스트
  language: Language.english,
};

console.log(user1, user2, user3);
