/**
 * Pick<T ,K>
 * -> 뽑다, 고르다
 * -> 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Pick<T, K extends keyof T> = {
  // K extends 'title' | 'tags' | 'content' | 'thumbnailURL'
  // T 객체의 프로퍼티 들만 K로 진입 가능,
  [key in K]: T[key];
};

const legacyPost: Pick<Post, "title" | "content"> = {
  // 필요한 프로퍼티만 뽑아내는 타입
  title: "옛날 글",
  content: "옛날 컨텐츠",
};

/**
 * Omit<T, K>
 * -> 생략하다, 빼다
 * -> 객체 타입으로부터 특정 프로퍼티를 제거
 */

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = 'title'
// Pick<Post, Exclude<keyof Post, 'title'>>
// Pick<Post, Exclude<'title' | 'content' | 'tags' | 'thumbnailURL', 'title'>>

const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

/**
 * Record<K, V>
 *
 */

type Thumbnail = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
  watch: {
    url: string;
  };
};

// 새로운 프로퍼티가 추가되거나 그럴경우, 사용하면 좋다

type Record<K extends keyof any, V> = {
  [key in K]: V;
};

type ThumbanilNew = Record<"large" | "medium" | "small", { url: string }>;
// 객체타입을 만들어주는 유틸리티다, 첫번째 인자는 키들이 되는거고, 두번째 는 value 값으로 들어간다.
// watch 를 넣는다고 한다면, 유니온 타입에 넣으면된다.
