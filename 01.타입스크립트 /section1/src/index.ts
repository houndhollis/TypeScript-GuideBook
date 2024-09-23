console.log("Hello TypeScript");
const a: number = 1;

// tsc src/index.ts 을 입력하면 js 파일이 생성되는 것을 볼수 있다.

// node src/index.js 를 입력하면 js 파일이 실행되는 것을 볼수 있다.

// 개발중 일떄는 위에처럼 하기 힘들다 sudo npm i ts-node -g 를 설치해주면 편리하다
// 설치 후 ts-node src/index.ts 를 입력하면 한번에 컴파일과 js 파일 실행까지 된다.

// ** ts-node는 Node 20 버전 이상에서는 더 이상 동작하지 않습니다.

/* 해결 방법
sudo npm i -g tsx 

> tsx -v
 tsx v4.19.1
 node v20.9.0

 > tsx src/index.ts 입력하면 한번에 컴파일과 실행이 되는 것을 볼수 있다.
*/
