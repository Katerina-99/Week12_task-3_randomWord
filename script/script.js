const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";

const getRandomLetter = () => {
  const randomIndex = Math.floor(Math.random() * alphabet.length);
  return alphabet[randomIndex];
};

const randomWord =
  getRandomLetter() + getRandomLetter() + getRandomLetter() + getRandomLetter();

console.log(`Cлучайное слово из четырёх букв: ${randomWord}`);
alert(`Cлучайное слово из четырёх букв: ${randomWord}`);
