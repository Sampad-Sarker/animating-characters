document.body.style.textAlign = "center";
document.body.style.maxHeight = "100vh";
document.body.style.padding = "2%";

const fontWeightSet = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const fontFamilySet = [
  "Arial",
  "Ink free Regular",
  "Lato",
  "Montserrat",
  "Nunito",
  "Oswald",
  "Raleway+Dots",
  "Raleway",
  "Roboto",
  "Script Regular"
];

const text = document.createElement("h1");
text.textContent = `javascript is awesome`;
text.style.textTransform = "uppercase";
text.style.fontSize = "calc(7rem + 1vw)";
text.style.marginBottom = "0";
text.style.wordBreak = "break-word";
document.body.appendChild(text);

//random color generator
const generateRandomColor = () => {
  const hexCharacters = `0123456789abcdef`;
  let randomCode = "#";
  for (let i = 0; i < 6; i++) {
    randomCode += hexCharacters[parseInt(Math.random() * hexCharacters.length)];
  }

  return randomCode;
};

const characterOfText = text.textContent;
// console.log(characterOfText);

let indexOfColor = 0;
let indexOfFontFamilySet = 0;
let indexOfLetterColor = 0;
setInterval(() => {
  console.log(generateRandomColor());
  //background color changing start
  document.body.style.backgroundColor = `${generateRandomColor()}`;
  //background color changing end

  //each letter color changing start
  text.textContent = "";
  for (const character of characterOfText.split("")) {
    const span = document.createElement("span");
    span.textContent = character;
    span.style.color = `${generateRandomColor()}`;

    text.appendChild(span);
  }
  //each letter color changing end

  //text animation start
  text.style.animationName = "textAnimay";
  text.style.animationDuration = "3000ms";
  text.style.animationTimingFunction = "ease-in-out";
  text.style.animationIterationCount = "infinite";
  //text animation end

  //font weight changing start
  text.style.fontWeight =
    fontWeightSet[parseInt(Math.random() * fontWeightSet.length)];
  //font weight changing end

  //font family changing start
  text.style.fontFamily = fontFamilySet[indexOfFontFamilySet];
  ++indexOfFontFamilySet;
  if (indexOfFontFamilySet === fontFamilySet.length - 1) {
    indexOfFontFamilySet = 0;
  }
  //font family changing end
}, 3000);

const content = `<p>
developed with <span style=display:inline-block; class="anime animate__animated animate__heartBeat animate__infinite">❤️</span> by <a href="https://github.com/Sampad-Sarker" target="_blank">SampadSarker</a>
</p>`;

//footer
const footer = document.createElement("footer");
footer.innerHTML = content;
footer.style.textAlign = "center";
footer.style.marginTop = "5%";
document.body.appendChild(footer);
