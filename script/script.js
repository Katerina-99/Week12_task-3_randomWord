const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
const randomIndex = Math.floor(Math.random() * alphabet.length);
const randomIndex1 = Math.floor(Math.random() * alphabet.length);
const randomIndex2 = Math.floor(Math.random() * alphabet.length);
const randomIndex3 = Math.floor(Math.random() * alphabet.length);

const randomWord =
  alphabet[randomIndex] +
  alphabet[randomIndex1] +
  alphabet[randomIndex2] +
  alphabet[randomIndex3];

console.log(`Cлучайное слово из четырёх букв: ${randomWord}`);
alert(`Cлучайное слово из четырёх букв: ${randomWord}`);
