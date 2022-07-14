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

interface Vector3D {
  x: number;
  y: number;
  z: number;
}

function calculeteLengthL1(v: Vector3D) {
  let length = 0;
  for (const axis of Object.keys(v)) {
    const coord = v[axis]; // 인자로 들어온 v는 Vector3D 인터페이스 조건을 충족 하기만 하면 되기 때문에 xyz 이상의 값이 들어있더라도 통과되므로 forof를 사용하면 오류로 인식한다.

    length += Math.abs(coord);
  }
  return length;
}
const vec3D = { x: 3, y: 4, z: 1, address: "123 Broadway" };
calculeteLengthL1(vec3D);

function normalize(v: Vector3D) {
  const length = calculeteLength(v);
  return {
    x: v.x / length,
    y: v.y / length,
    z: v.z / length,
  };
}

export default {};
