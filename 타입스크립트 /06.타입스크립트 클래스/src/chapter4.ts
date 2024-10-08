/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Charater implements CharacterInterface {
  // 캐릭터 클래스는 캐릭터 인터페이스를 구현한다.

  constructor(public name: string, public moveSpeed: number) {}
  // 인터페이스로 정의하는 클래스는 무조건 퍼블릭 필드만 정의할 수 있다.
  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동`);
  }
}
