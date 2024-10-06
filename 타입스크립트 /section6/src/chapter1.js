/**
 * 클래스
 */

let studentA = {
  name:'김영웅',
  grade:'A+',
  age: 27,
  study() {
    console.log('많이 하시나요..?')
  },
  introduce() {
    console.log('안녕하세요.!')
  }
}

class Student {
  // 필드 : 만들어낼 프로퍼티
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log('공부합니다.!')
  }
  introduce() {
    console.log(`안녕하세요 ${this.name}입니다.`)
  }
}
// 클래스를 사용하여 똑같은 객체를 찍어내듯이,

// 사용해서 만들기
// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
let studentB = new Student('워내강','A+',25);
console.log(studentB);
studentB.introduce();

class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age)
    // 부모 클래스의 생성자가 생성이된다.
    this.favoriteSkill = favoriteSkill
  }

    programing() {
      console.log(`${this.favoriteSkill}로 프로그래밍 함`)
    }
}

const studentDeveloper = new StudentDeveloper('김영웅','SSS',27,'TypeScript')
console.log(studentDeveloper)
studentDeveloper.programing();

// Student 와 StudentDeveloper 는 비슷한 필드, 생성자, 메서드가 많다
// 앞으로도 비슷하게 계속 만들경우, 상속을 이용하면 좋다