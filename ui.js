let menuScreen = document.getElementById("menu-screen");
let mainScreen = document.getElementById("main-screen");
document.getElementById("menu").addEventListener("click", () => {
  menuScreen.classList.toggle("active");
});

let font = document.getElementById("font");
let input = document.getElementById("input");
let fontSize = document.getElementById("font-size");
font.addEventListener("change", () => {
  input.style.fontFamily = font.value;
});

fontSize.addEventListener("input", () => {
  input.style.fontSize = `${fontSize.value}px`;
});

function about() {
  input.value =
    "LiteNote is a sleek, ultra-minimalist web application designed for fast, distraction-free note-taking. Built with a focus on speed and simplicity, it strips away the clutter of traditional text editors to give you an immediate canvas for your thoughts, scripts, or code snippets.";
}

function newnote(){
    input.value = "";
}
