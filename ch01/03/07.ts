function setLightSwitch(value: boolean) {
  switch (value) {
    case true:
      // ...
      break;
    case false:
      // ...
      break;
    default:
      console.log("I`m afraid I can`t do that.");
  }
}

interface LightApiResponse {
  lightSwitchValue: boolean;
}

async function setLight() {
  const response = await fetch("/light");
  const result: LightApiResponse = await response.json();
  // 서버에서 받아온 값의 타입을 보장할 수 없다.
  setLightSwitch(result.lightSwitchValue);
}

export default {};
