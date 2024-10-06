/**
 * 타입스크립트 클래스
 */

const employee = {
  name: "김영웅",
  age: 27,
  position: "developer",
  work() {
    console.log("일함");
  },
};

class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work(): void {
    console.log("일함");
  }
}

class ExecutiveOfficer extends Employee {
  //필드
  officeNumber: number;

  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

const employeeB = new Employee("김영웅", 27, "개발자");
console.log(employeeB);

// 만든 클래스가 타입으로도 활용이된다.

const employeeC: Employee = {
  name: "김영웅",
  age: 22,
  position: "집밥만들기",
  work: () => console.log("123"),
};
