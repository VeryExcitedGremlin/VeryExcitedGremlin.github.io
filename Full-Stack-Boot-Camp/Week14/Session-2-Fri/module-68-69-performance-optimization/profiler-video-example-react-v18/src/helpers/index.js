export function getReadingTime(text) {
  const numberOfWords = text.split(' ').length;
  const letters = text
    .split('')
    .filter((l) => l !== ' ')
    .reduce((acc, letter) => acc + 1, 0);
  const averageWordLength = letters / numberOfWords;
  const approximateWords = letters / averageWordLength;
  const totalMinutes = approximateWords / 238;

  for (let i = 0; i < text.length * 10000; i++) {
    Math.random();
  }

  if (totalMinutes > 60) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = Math.floor(totalMinutes - hours * 60);
    return `${hours} hours, ${minutes} minutes`;
  } else if (totalMinutes > 1) {
    return `${Math.floor(totalMinutes)} minute${
      Math.floor(totalMinutes) === 1 ? '' : 's'
    }`;
  } else {
    return `Less than a minute`;
  }
}
