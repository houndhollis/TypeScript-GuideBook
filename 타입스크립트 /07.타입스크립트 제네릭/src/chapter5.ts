/**
 * 제네릭 클래스
 */

// class NumberList {
//   constructor(private list: number[]) {}

//   push(data: number) {
//     this.list.push(data);
//   }

//   pop() {
//     return this.list.pop();
//   }

//   print() {
//     console.log(this.list);
//   }
// }

class List<T> {
  constructor(private list: T[]) {}
  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new List([1, 2, 3]);
// 제네릭 클래스는 인수로 타입을 지정해줄 필요가 없다 (꺽새 X)
numberList.pop();
numberList.push(4);
numberList.print();

// 만약 string list 클래스를 만들어야 한다면?

const stringList = new List(["1", "2"]);
stringList.push("hello");
