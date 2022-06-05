const randomNumberGenerator = () => {
  return Math.floor(Math.random() * 100);
};

const uppercaseWord = (word) => {
  return word.toUpperCase();
};
const theFirstLetterOfTheWord = (word) => {
  return word[0];
};

const concatenateTwoWords = (word1, word2) => {
  return word1 + word2;
};

const fetchDogImage = async () => {
  const endpoint = "https://dog.ceo/api/breeds/image/random";
  return fetch(endpoint).then((response) => {
    return response.json().then((json) => {
      return response.ok ? Promise.resolve(json) : Promise.reject(json);
    });
  });
};

module.exports = {
  randomNumberGenerator,
  uppercaseWord,
  theFirstLetterOfTheWord,
  concatenateTwoWords,
  fetchDogImage,
};
