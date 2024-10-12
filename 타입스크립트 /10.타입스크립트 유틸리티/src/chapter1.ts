/**
 * Partial<T>
 * -> 부분적인, 일부분의
 * -> 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티 바꿔주는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type DraftType = {
  [key in keyof Post]?: Post[key];
};

// 이건 한번,, Post 타입을 맵드로 선택적으로 다 바꿔보기,

const draft: DraftType = {
  title: "제목 나중에 ㅋ",
  content: "초안...",
};

type Partial<T> = {
  [key in keyof T]?: T[key];
};

const draft2: Partial<Post> = {
  title: "제목 나중에 ㅋ",
  content: "초안...",
};

/**
 * Required<T>
 * -> 필수의, 필수적인
 * -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */

type Required<T> = {
  [key in keyof T]-?: T[key];
  // - 를 붙이면, 모든 프로퍼티가 필수로 바뀐다,
};

const withThumbnailPost: Required<Post> = {
  title: "hi",
  tags: ["a"],
  content: "",
  thumbnailURL: "",
};

/**
 * Readonly<T>
 * -> 읽기전용 수정불가
 * -> 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입
 */

type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

const readonlyPost: Readonly<Post> = {
  title: "보호된 게시글 입니다.",
  tags: [],
  content: "",
};
