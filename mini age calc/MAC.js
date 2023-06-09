let inputEL = document.getElementById("input-el")
let checkBtn = document.getElementById("check")
let resultField = document.querySelector(".result")


function calcAge() {
    let birthYear = inputEL.value;
    let finalResult = 2023 - birthYear;
    resultField.textContent = `You are ${finalResult} years old`;
}
checkBtn.addEventListener("click", () => {
    calcAge()

})