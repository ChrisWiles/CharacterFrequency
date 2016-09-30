// returns an object with each unique char stored as a key
// and value is number of times it occurs
export const characterFrequency = (string) => {
   if (string) {

     // "$" can't be a object key in Mongo, going to just remove char for now
     string = string.toLowerCase().split('').filter(char => char !== '$')

      return string.reduce((frequency, letter) => {
         frequency[letter] = frequency[letter] + 1 || 1
         return frequency
      }, {})
   } else {
      return {}
   }
}
// This 216 hex values cross-browser color palette was created to ensure that all computers would display the colors correctly when running a 256 color palette
export const colorList = [ '#FFCCCC', '#996666', '#996699', '#FF66CC', '#CCCCCC', '#3399CC', '#006666', '#660099', '#336633', '#66FF33', '#00CCCC', '#339933', '#000000', '#3333FF', '#333399', '#66FFFF', '#33FF66', '#CC0099', '#99CC99', '#FF3366', '#999933', '#666633', '#FF9900', '#66CC33', '#99CCCC', '#660000', '#993399', '#3333CC', '#333300', '#6666CC', '#66CC99', '#CC00CC', '#CC9999', '#6600CC', '#663399', '#00FF66', '#003366', '#99FFFF', '#99CC33', '#66CC66', '#FFFF66', '#9933FF', '#663366', '#CC00FF', '#33CCFF', '#FFCC66', '#33FF00', '#99FF66', '#CC9900', '#00CC00', '#993366', '#00CC99', '#FF9999', '#99FF00', '#33FFFF', '#33FFCC', '#660033', '#FF99CC', '#FFFFFF', '#CCCC99', '#FF00CC', '#3399FF', '#336666', '#009999', '#660066', '#0033CC', '#999966', '#FF9966', '#0000CC', '#66CC00', '#66CCCC', '#FF99FF', '#999999', '#666699', '#CCFF33', '#CC9933', '#FF6633', '#CCFF00', '#00FFFF', '#FF3399', '#FFCC99', '#CCFFFF', '#330066', '#CCCC66', '#3366FF', '#CC9966', '#000066', '#339966', '#CC33FF', '#996600', '#6633FF', '#009966', '#999900', '#336600', '#CC33CC', '#FFFFCC', '#0099FF', '#6699CC', '#990066', '#6633CC', '#CC99FF', '#669900', '#3300CC', '#00FF99', '#663300', '#CC6600', '#FF0099', '#99CCFF', '#006699', '#006600', '#CCCC33', '#CCFF99', '#FF3300', '#CC3366', '#669933', '#00CC33', '#00CCFF', '#CC0000', '#990033', '#CC3333', '#CC66FF', '#3300FF', '#FF0033', '#FF0066', '#9999CC', '#99CC66', '#33CC66', '#33CCCC', '#FF0000', '#33CC00', '#00FF33', '#336699', '#0066CC', '#330000', '#003399', '#9999FF', '#333333', '#FFCC33', '#666600', '#66FF66', '#330099', '#003300', '#9900FF', '#666666', '#009933', '#FF6699', '#66FF00', '#FF33CC', '#FF66FF', '#993333', '#CC6699', '#66CCFF', '#0099CC', '#FF6666', '#CC6633', '#333366', '#66FFCC', '#CCCCFF', '#FF3333', '#FFFF00', '#CCCC00', '#339999', '#FF33FF', '#330033', '#FF6600', '#6600FF', '#99FF99', '#993300', '#CC0033', '#6699FF', '#00CC66', '#0066FF', '#663333', '#3366CC', '#FFCCFF', '#669966', '#9933CC', '#CC66CC', '#0033FF', '#000099', '#00FFCC', '#33CC33', '#99FF33', '#FF9933', '#CCFF66', '#9966FF', '#CC3300', '#009900', '#6666FF', '#FF00FF', '#CC0066', '#996633', '#003333', '#9966CC', '#CC3399', '#00FF00', '#9900CC', '#99CC00', '#FFCC00', '#006633', '#33CC99', '#FFFF33', '#FFFF99', '#CCFFCC', '#33FF33', '#CC6666', '#669999', '#000033', '#339900', '#990000', '#33FF99', '#66FF99', '#0000FF', '#99FFCC', '#CC99CC', '#990099' ]
//export const colorList = ["#ffcdd2","#ef5350","#b71c1c","#ff1744","#f06292","#c2185b","#880e4f","#e1bee7","#ab47bc","#7b1fa2","#4a148c","#d500f9","#bbdefb","#42a5f5","#0d47a1","#3f51b5","#9fa8da","#b2ebf2","#26c6da","#0097a7","#006064","#84ffff","#00e5ff","#69f0ae","#00e676","#00c853","#ffe0b2","#ffc107","#ef6c00","#ffee58","#fff59d","#ffff00","#01579b","#004d40","#00796b","#26a69a","#80cbc4","#1de9b6","#00bfa5","#64ffda","#00b0ff","#0288d1","#0277bd","#81d4fa","#eeff41","#f4ff81","#ccff90","#76ff03","#ff6f00","#ffab91","#ff5722","#bf360c","#ff9e80","#b0bec5","#78909c","#607d8b","#455a64","#263238"]

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
