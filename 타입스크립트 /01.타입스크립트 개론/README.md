## 초기설정

`npm i @types/node` 설치 해준다
패키지를 설치하지 않으면 타입스크립트의 기본기능을 사용할 수가 없다.

### 컴파일러 설치

`sudo npm i typescript -g` 전역으로 설치 해준다.

설치가 완료되면 터미널에 tsc -v 를 입력해서 버전을 확인하고
상단 `section1 src index.tsx 부분 부터 시작하면 된다.`

### 컴파일 옵션

얼마나 엄격하게 타입 오류를 검사할지, 자바스크립트 코드의 버전은 어떻게 할지

`tsc --init` 을 입력하면 tsconfig.json 파일이 생성된다.
이후 옵션 설명은 tsconfig.json 파일에서 진행하겠다.

추가 include 추가한 이후, 터미널에 `tsc`를 입력하면 모든 해당 include 하위 ts파일들은 실행이 된다.

### tsconfig 파일 참고
