function generateFunc() {
  const mainArray =
    "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%&*()-=+<>?§";

  let passArray = [];

  function getRandomNumb(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // Максимум и минимум включаются
  }

  for (let i = 0; i < 8; i++) {
    let index = getRandomNumb(0, 78);
    let addingElem = mainArray[index];
    passArray.push(addingElem);
  }

  return passArray.join("");
}

export default generateFunc;
