const radios = document.querySelectorAll("input[type=radio][name=tip]");
const radioLabel = document.querySelectorAll(".radio-label");
const input = document.querySelectorAll(".input");
const resultTip = document.querySelector("#resultTip");
const resultTotal = document.querySelector("#resultTotal");
const reset = document.querySelector("#reset");

input[2].addEventListener("keyup", function (event) {
  const bill = parseFloat(document.querySelector("#bill").value);
  const tip = parseInt(getRadios());
  const tipCustom = parseFloat(document.querySelector("#custom").value);
  const people = parseInt(input[2].value);

  reset.classList.remove("opacity-20");
  reset.classList.remove("cursor-not-allowed");

  if (isNaN(people) || people == 0) {
    document.querySelector(".error").classList.remove("hidden");
    input[2].parentElement.classList.add("ring-2", "ring-red-500");
    resultTip.textContent = "$0";
    resultTotal.textContent = "$0";
  } else {
    document.querySelector(".error").classList.add("hidden");
    input[2].parentElement.classList.remove("ring-2", "ring-red-500");
    if (!isNaN(tipCustom)) {
      const tipAmount = (bill * (tipCustom / 100)) / people;
      const total = (bill + bill * (tipCustom / 100)) / people;

      resultTip.textContent = "$" + tipAmount.toFixed(2);
      resultTotal.textContent = "$" + total.toFixed(2);
    } else {
      const tipAmount = (bill * (tip / 100)) / people;
      const total = (bill + bill * (tip / 100)) / people;

      resultTip.textContent = "$" + tipAmount.toFixed(2);
      resultTotal.textContent = "$" + total.toFixed(2);
    }
  }
  resetFunc();
});

function resetFunc() {
  if (reset.classList.contains("opacity-20")) {
    return;
  } else {
    reset.addEventListener("click", function (event) {
      const uncheck = document.querySelector(
        "input[type=radio][name=tip]:checked"
      );

      input[0].value = "";
      input[1].value = "";
      input[2].value = "";
      resultTip.textContent = "$0";
      resultTotal.textContent = "$0";
      reset.classList.add("opacity-20");
      reset.classList.add("cursor-not-allowed");

      uncheck.checked = false;
      uncheck.nextElementSibling.classList.remove(
        "bg-tealish",
        "text-sherpa-blue"
      );
    });
  }
}

function getRadios() {
  if (radios[0].checked) return radios[0].value;
  if (radios[1].checked) return radios[1].value;
  if (radios[2].checked) return radios[2].value;
  if (radios[3].checked) return radios[3].value;
  if (radios[4].checked) return radios[4].value;
}

radios.forEach((e) => {
  e.addEventListener("change", function (event) {
    const custom = document.querySelector("#custom");
    const uncheck = document.querySelector(
      "input[type=radio][name=tip]:checked"
    );

    if (radios[0].checked) {
      radioLabel[0].classList.add("bg-tealish", "text-sherpa-blue");
      radioLabel[1].classList.remove("bg-tealish", "text-sherpa-blue");
      radioLabel[2].classList.remove("bg-tealis", "text-sherpa-blue");
      radioLabel[3].classList.remove("bg-tealish", "text-sherpa-blue");
      radioLabel[4].classList.remove("bg-tealish", "text-sherpa-blue");
      custom.value = "";
    } else if (radios[1].checked) {
      radioLabel[0].classList.remove("bg-tealish", "text-sherpa-blue");
      radioLabel[1].classList.add("bg-tealish", "text-sherpa-blue");
      radioLabel[2].classList.remove("bg-tealish", "text-sherpa-blue");
      radioLabel[3].classList.remove("bg-tealish", "text-sherpa-blue");
      radioLabel[4].classList.remove("bg-tealish", "text-sherpa-blue");
      custom.value = "";
    } else if (radios[2].checked) {
      radioLabel[0].classList.remove("bg-tealish", "text-sherpa-blue");
      radioLabel[1].classList.remove("bg-tealish", "text-sherpa-blue");
      radioLabel[2].classList.add("bg-tealish", "text-sherpa-blue");
      radioLabel[3].classList.remove("bg-tealish", "text-sherpa-blue");
      radioLabel[4].classList.remove("bg-tealish", "text-sherpa-blue");
      custom.value = "";
    } else if (radios[3].checked) {
      radioLabel[0].classList.remove("bg-tealish", "text-sherpa-blue");
      radioLabel[1].classList.remove("bg-tealish", "text-sherpa-blue");
      radioLabel[2].classList.remove("bg-tealish", "text-sherpa-blue");
      radioLabel[3].classList.add("bg-tealish", "text-sherpa-blue");
      radioLabel[4].classList.remove("bg-tealish", "text-sherpa-blue");
      custom.value = "";
    } else if (radios[4].checked) {
      radioLabel[0].classList.remove("bg-tealish", "text-sherpa-blue");
      radioLabel[1].classList.remove("bg-tealish", "text-sherpa-blue");
      radioLabel[2].classList.remove("bg-tealish", "text-sherpa-blue");
      radioLabel[3].classList.remove("bg-tealish", "text-sherpa-blue");
      radioLabel[4].classList.add("bg-tealish", "text-sherpa-blue");
      custom.value = "";
    }

    custom.addEventListener("click", function (event) {
      uncheck.checked = false;
      uncheck.nextElementSibling.classList.remove(
        "bg-tealish",
        "text-sherpa-blue"
      );
    });
  });
});
