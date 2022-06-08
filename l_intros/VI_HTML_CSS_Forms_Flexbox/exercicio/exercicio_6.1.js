const button = document.querySelector("#buttonSubmit");
let inputButtonSubmit = document.querySelector("#inputButtonSubmit");
const buttonSubmit = document.querySelector("#buttonSubmit");

function getUserValue(event) {
    event.preventDefault();
    console.log(inputButtonSubmit.value);
    nameUser.innerHTML = inputButtonSubmit.value;
}
button.addEventListener('click', getUserValue);