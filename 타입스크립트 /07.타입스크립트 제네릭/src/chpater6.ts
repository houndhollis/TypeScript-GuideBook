/**
 * 프로미스
 */

const promise = new Promise((resolve, reject) => {
  // 프로미스 생성자를 호출할 때 비동기 작업의 결과값을 타입변수에 할당해주면
  // 아래 response 의 타입이 추론이된다.
  setTimeout(() => {
    // resolve(20);
    reject("~~ 때문에 실패");
  }, 3000);
});

promise
  .then((response) => {
    // response 값이 20이니 number 타입일꺼 같지만,
    // 비동기 작업의 결과값을 자동으로 추론할수 없어서 unknown 타입으로
    // 추론을 한다 -> 제네릭을 사용하면 된다.
    console.log(response * 10);
  })
  .catch((error) => {
    // 실패 타입을 정의할수 없다.
    if (typeof error === "string") {
      console.log(error);
    }
  });

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> {
  // 특별한 경우가 아니면 함수의 반환값 타입을 명시하는걸 추천한다.
  // 협업의 관점에서 가독성이 더 좋다.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 컨텐츠 ",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  post.id;
});
