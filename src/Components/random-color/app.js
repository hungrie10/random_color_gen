// rgb(25, 45, 67) - rgb
// let r = Math.floor(Math.random() * 255)
// let g = Math.floor(Math.random() * 255)
// let b = Math.floor(Math.random() * 255)

// export default finalRGB = () => `rgb(${r}, ${g}, ${b})`

// export { myNewColor }

const arrayOfModes = ['rgb', 'hex'];
let chooseInd = Math.floor(Math.random() * arrayOfModes.length)
let changeMode = arrayOfModes[chooseInd];
console.log(changeMode);

// changeMode == 'rgb' ? handleCreateRandomRgbColor() : handleCreateRandomHexColor()