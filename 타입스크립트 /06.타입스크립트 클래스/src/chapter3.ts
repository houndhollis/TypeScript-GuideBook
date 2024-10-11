/**
 * 접근 제어자
 * access modifier
 * => public private protected
 */

class Employee {
  // 필드
  name: string;
  age: number;
  private position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work(): void {
    console.log(`${this.position} 로 일함`);
  }
}

class ExecutiveOfficer extends Employee {
  //필드
  officeNumber: number;
  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  // 메서드
  func() {
    // this.position;
    // 파생클래스 에서도 private 접근 불가능, 하지만 private 이아닌
    // protected 로 바꾸면 접근이 가능하다.
  }
}

const employee = new Employee("김영웅", 27, "개발자");
// 값 수정이 가능하다 객체 이기때문에
// 필드 프로퍼티 기본값이 public 이기도 하다,
employee.name = "워내강";
employee.age = 25;
// employee.position = "프론트엔드"; 해당 private는 접근제어되어 바꿀수가 없다.
// 하지만 메서드 안에서는 private 이여도 접근가능

// 결론 접근제어자

/**
 * 메서드에서는 접근 가능하다 private
 * 파생 클래스 메서드에서는 접근이 불가능 하기때문에
 * private -> protected 바꾸면 접근이 가능하지만, 외부에서는 둘다 안된다.
 */

// 추가

class Test {
  constructor(public name: string, public age: number) {}
  // 생성자 매개변수에서 접근 제어자를 해주면 필드, this.~ 할당, 생성하지 않아도 된다.
}
