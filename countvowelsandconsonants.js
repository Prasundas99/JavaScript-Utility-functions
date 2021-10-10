const vowels = ['a', 'e', 'i', 'o', 'u'];

function countVowels(sentence) {
  let vowelCount = 0;
  let consonantCount = 0;
  for (let i = 0; i < vowels.length; i++) {
    if (vowels.toLowerCase().includes(sentence[i]))
      vowelCount++;
    else
      consonantCount++;

  }
  return console.log(vowelCount, consonantCount);
}