const txt = document.querySelector("h3");
const color1 = document.querySelector(".input1");
const color2 = document.querySelector(".input2");
const wholeBody = document.querySelector("body");

// function linearGradient() {
//     // console.log(color1.value, color2.value);

//     wholeBody.style.background = "linear-gradient (to right, " + color1.value + ", " + color2.value + ")";

//     // css.textContent = wholeBody.style.background;
// }

color1.addEventListener("input", () => {
    // alert(`The text color is ${color1.value}`);
    txt.textContent = wholeBody.style.backgroundImage;
    setGradient();
});

color2.addEventListener("input", () => {
    txt.textContent = wholeBody.style.backgroundImage;
    setGradient();
});

function setGradient() {
    wholeBody.style.backgroundImage = "linear-gradient(90deg, " + color1.value + " , " + color2.value + ")";
}

