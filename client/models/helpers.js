
// returns an object with each unique char stored as a key
// and value is number of times it occurs
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

export const colorList = ["#ffcdd2","#ef5350","#b71c1c","#ff1744","#f06292","#c2185b","#880e4f","#e1bee7","#ab47bc","#7b1fa2","#4a148c","#d500f9","#bbdefb","#42a5f5","#0d47a1","#3f51b5","#9fa8da","#b2ebf2","#26c6da","#0097a7","#006064","#84ffff","#00e5ff","#69f0ae","#00e676","#00c853","#ffe0b2","#ffc107","#ef6c00","#ffee58","#fff59d","#ffff00","#01579b","#004d40","#00796b","#26a69a","#80cbc4","#1de9b6","#00bfa5","#64ffda","#00b0ff","#0288d1","#0277bd","#81d4fa","#eeff41","#f4ff81","#ccff90","#76ff03","#ff6f00","#ffab91","#ff5722","#bf360c","#ff9e80","#b0bec5","#78909c","#607d8b","#455a64","#263238"]

//  Fisher-Yates Shuffle
function shuffle(array) {
    let counter = array.length

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter)

        // Decrease counter by 1
        counter--

        // And swap the last element with it
        let temp = array[counter]
        array[counter] = array[index]
        array[index] = temp
    }

    return array
}

export const generateColorPalette = () => shuffle(colorList)
