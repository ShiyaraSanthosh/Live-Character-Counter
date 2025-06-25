const inputField = document.getElementById("input_field");
const charCount = document.getElementById("char-count");
const maxLength = 150;
inputField.addEventListener("input", function () {
    const inputLength = inputField.value.length;
    charCount.innerHTML = inputLength;
    //background color change
    if(inputLength==maxLength){
        document.body.style.backgroundColor = "#e74c3c";
    }
});