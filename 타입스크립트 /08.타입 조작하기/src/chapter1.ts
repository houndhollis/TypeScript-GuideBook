/**
 * 인덱스드 엑세스 타입
 */

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

function printAuthorInfo(author: Post["author"]) {
  // 인덱스 느낌으로 진입 타입을 찾아준 느낌이다, 이럴경우, author 마우스 올리면
  // Post interface가 바뀌더라도 확인할 수 있다.
  // *주의사항* 인덱스드 엑세스 같은 경우, 변수는 들어올수 없고 스트링 리터럴과 같은
  // 타입만 들어올 수 있다. 존재하지 않는 프로퍼티도 안된다.
  console.log(`${author.name}-${author.id}`);
}

const post: PostList[number] = {
  // 배열 타입 인덱스에 넘버타입을 넣어주면 배열타입에서 하나의 요소를 가지고 온다고 할수있다.
  title: "게시글",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "김영웅",
    age: 12,
  },
};

printAuthorInfo(post.author);

// 만약 Post interface author 객체 안에 다른 age등 값이 추가되면 추가해야 할 곳이 많아진다.
// 이럴경우 인덱스드 엑세스 타입을 쓰면 좋다, 객체타입 으로부터 특정 프로퍼티 타입을 뽑아서
// 변수에 정의할수 있도록 하는 문법이다.

type Tup = [number, string, boolean];

type Tup0 = Tup[0];

type Tup1 = Tup[1];

type Tup2 = Tup[2];

type TupNum = Tup[number];
// 최적의 유니온 타입이 된다
