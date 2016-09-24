export const characterFrequency = (string) => {
   return string.toLowerCase().split('').reduce((frequency, letter) => {
      frequency[letter] = frequency[letter] + 1 || 1
      return frequency
   }, {})
}
