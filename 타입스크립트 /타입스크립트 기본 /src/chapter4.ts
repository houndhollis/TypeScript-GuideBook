// 타입 별칭

type User = {
  id: number;
  name: string;
}; // 같은 스코프 내에서는 중복 선언 불가

let user: User = {
  id: 1,
  name: "김영웅",
};

let user2: User = {
  id: 2,
  name: "김여웅",
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKimgdom: "uk",
};

// 대규모 일 경우, 규칙을 이용해서 타입정의하는 방법

type CountryNumberCodes = {
  [key: string]: number;
  // Korea: string;
  // Korea 를 입력해놔서 아래 객체는 빈객체일수가 없다,
};

let countryNumberCodes: CountryNumberCodes = {
  // Korea: 'ko'
};
