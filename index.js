import "./styles.css";

let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));
let arr = [];

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        arr = [];
        break;

      case "=":
        try {
          display.innerText = eval(arr.join(""));
        } catch {
          display.innerText = "Error";
        }
        break;
      case "Back":
        if (display.innerText) {
          display.innerText = arr.join("").slice(0, -1);
          arr.pop();
        }
        break;
      default:
        display.innerText = e.target.innerText;
        arr.push(e.target.innerText);
    }
  });
});
