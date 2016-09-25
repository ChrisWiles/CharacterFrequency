export const characterFrequency = (string) => {
   if (string) {
      return string.toLowerCase().split('').reduce((frequency, letter) => {
         frequency[letter] = frequency[letter] + 1 || 1
         return frequency
      }, {})
   } else {
      return {}
   }
}
