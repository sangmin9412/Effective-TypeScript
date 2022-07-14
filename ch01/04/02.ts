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

function normalize(v: Vector3D) {
  const length = calculeteLength(v); // Vector2D 타입을 받도록 되어있어 z 연산을 하지 않지만 오류로 인식 하지 않아 예상과 다른 결과 값이 나옴
  return {
    x: v.x / length,
    y: v.y / length,
    z: v.z / length,
  };
}

export default {};
