export function alphabetArray(charA: string, charZ: string) {
  const alphabet = [];
  let charAIndex = charA.toLowerCase().charCodeAt(0);
  const charZIndex = charZ.toLowerCase().charCodeAt(0);

  while (charAIndex <= charZIndex) {
    alphabet.push(String.fromCharCode(charAIndex));
    charAIndex++;
  }

  return alphabet;
}
