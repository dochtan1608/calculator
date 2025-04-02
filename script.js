let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);

input.addEventListener("keydown", (e) => {
  e.preventDefault();
});

input.addEventListener("paste", (e) => {
  e.preventDefault();
});

input.addEventListener("click", (e) => {
  e.preventDefault();
  input.blur();
});

const themeToggle = document.getElementById("themeToggle");
const themeText = document.getElementById("themeText");

themeToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  document.body.classList.toggle("bright-mode");
  themeToggle.setAttribute(
    "aria-label",
    document.body.classList.contains("bright-mode")
      ? "Switch to dark mode"
      : "Switch to light mode"
  );
  themeText.textContent = document.body.classList.contains("bright-mode")
    ? "Light Mode"
    : "Dark Mode";
});

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      try {
        if (string === "168") {
          input.value = "Mahal Kita";
        } else if (string === "156") {
          input.value = "Em Yêu Anh";
        } else {
          string = eval(string);
          input.value = string;
        }
      } catch {
        input.value = "Error";
        input.style.background =
          "linear-gradient(145deg, rgba(255, 99, 71, 0.2), rgba(0, 0, 0, 0.3))";
        setTimeout(() => {
          input.style.background =
            "linear-gradient(145deg, rgba(255, 255, 255, 0.03), rgba(0, 0, 0, 0.3))";
          string = "";
          input.value = "";
        }, 1000);
      }
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
/* chitan168 */
/* nothing */
