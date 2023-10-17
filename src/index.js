const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  const chunks = [];

  for (let i = 0; i < expr.length; i += 10) {
    chunks.push(expr.slice(i, i + 10));
  }

  const modChunks = chunks.map((el) => {
    let modifiedChunk = "";

    for (let i = 0; i < el.length; i += 2) {
      const chunk = el.slice(i, i + 2);

      if (chunk === "10") {
        modifiedChunk = modifiedChunk + ".";
      } else if (chunk === "11") {
        modifiedChunk += "-";
      } else if (chunk === "00") {
      } else {
        modifiedChunk += "**";
      }
    }

    return modifiedChunk;
  });

  console.log("wwwwww" + modChunks);

  let answerAr = [];

  for (let i = 0; i < modChunks.length; i++) {
    const currentKey = modChunks[i];
    const currentValue = MORSE_TABLE[currentKey];

    if (currentValue !== undefined) {
      answerAr.push(currentValue);
    }

    if (currentKey === "**********") {
      answerAr.push(" ");
    }
  }

  const answer = answerAr.join("");
  console.log("qqqqqqqqqqqqqq" + answer);
  return answer;
}

module.exports = {
  decode,
};
