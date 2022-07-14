class C {
  foo: string;
  constructor(foo: string) {
    this.foo = foo;
  }
  abs() {}
}

const c = new C("instance of C");
const d: C = { foo: "object literal" };

export default {};
