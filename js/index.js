const buttonElement = document.querySelector("button");
let theInputs = document.querySelectorAll("input");
let pElement = document.querySelector("p");
let thePercent;
function resultShower() {
  pElement.innerHTML += "%";
  pElement.style.maxHeight = "50px";
}
function emptyCheck() {
  let fillCounter = 0;
  for (var element of theInputs) {
    if (element.value) {
      fillCounter++;
    }
  }
  if (fillCounter == 3) {
    return true;
  }
}
function inputValidate() {
  let allQ = Number(theInputs[0].value);
  let answeredQ = Number(theInputs[1].value) + Number(theInputs[2].value);

  if (allQ >= answeredQ) {
    return true;
  } else {
    return false;
  }
}

function PercentCalculate() {
  if (emptyCheck()) {
    if (inputValidate()) {
      pElement.innerHTML =
        100 *
        ((theInputs[1].value * 3 - theInputs[2].value) /
          (theInputs[1].value * 3));

      resultShower();
    } else {
      alert("مجموعه  تست ها درست و غلط نمیتواند از کل سوالات بیشتر باشد.");
    }
  } else {
    alert("لطفا تمامی فیلد ها را تکمیل نمایید.");
  }
}
buttonElement.addEventListener("click", PercentCalculate);
