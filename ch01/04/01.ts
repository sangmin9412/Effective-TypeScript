interface Vector2D {
  x: number;
  y: number;
}
function calculeteLength(v: Vector2D) {
  return Math.sqrt(v.x * v.x + v.y * v.y);
}
interface NamedVector {
  name: string;
  x: number;
  y: number;
}
const v: NamedVector = { x: 3, y: 4, name: "Zee" };
calculeteLength(v);

export default {};
