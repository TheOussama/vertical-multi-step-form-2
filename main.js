let form1 = document.querySelector(".form-1");
let form2 = document.querySelector(".form-2");
let form3 = document.querySelector(".form-3");
let next1 = document.querySelector("#next1");
let next2 = document.querySelector("#next2");
let back1 = document.querySelector("#back1");
let back2 = document.querySelector("#back2");

let progress = document.querySelector(".form__progress");
const inputs = document.querySelectorAll("input");

slide(progress, next1, form1, form2, "-42rem", "10rem", "66.666667%");
slide(progress, back1, form1, form2, "10rem", "42rem", "33.333337%");
slide(progress, next2, form2, form3, "-42rem", "10rem", "99.999997%");
slide(progress, back2, form2, form3, "10rem", "42rem", "66.666667%");

function slide(progress, link, form1, form2, leftform1, leftform2, height) {
  link.addEventListener("click", () => {
    form1.style.left = leftform1;
    form2.style.left = leftform2;
    progress.style.height = height;
  });
}

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
