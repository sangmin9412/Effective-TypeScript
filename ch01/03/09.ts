function add(a: number, b: number): number;
function add(a: string, b: string): string;

// 오버로드시 any 타입을 사용해야 할 수 있다
function add(a: any, b: any) {
  return a + b;
}

const three = add(1, 2); // Type is number
const twelve = add("1", "2"); // Type is string

export default {};
