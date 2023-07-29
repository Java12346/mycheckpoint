function analyzeSentence(sentence) {
  // Initialize counters
  let sentenceLength = 0;
  let wordCount = 0;
  let vowelCount = 0;

  // Iterate through each character in the sentence
  for (let i = 0; i < sentence.length; i++) {
    const character = sentence[i];

    // Increment sentence length counter
    sentenceLength++;

    // Check if the character is a vowel (case-insensitive)
    if (/[aeiou]/i.test(character)) {
      vowelCount++;
    }

    // Check if the character is a space or the last character (point)
    if (character === ' ' || character === '.') {
      // Increment word count if the character is a space
      if (character === ' ') {
        wordCount++;
      }
      // Break the loop when the last character (point) is encountered
      if (character === '.') {
        break;
      }
    }
  }

  // Output the results
  console.log(`Sentence Length: ${sentenceLength}`);
  console.log(`Number of Words: ${wordCount}`);
  console.log(`Number of Vowels: ${vowelCount}`);
}

// Example usage:
const inputSentence = "This is a sample sentence with multiple words.";
analyzeSentence(inputSentence);
