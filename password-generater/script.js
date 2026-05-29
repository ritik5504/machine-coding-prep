// DOM ELEMENTS

const passwordOutput = document.getElementById("password-output");

const lengthSlider = document.getElementById("length-slider");

const lengthValue = document.getElementById("length-value");

const uppercasecheckbox = document.getElementById("uppercase");

const lowercasecheckbox = document.getElementById("lowercase");

const numbercheckbox = document.getElementById("numbers");

const symbolscheckbox = document.getElementById("symbols");

const generatebtn = document.getElementById("generate-btn");

const copybtn = document.getElementById("copy-btn");

const strengthText = document.getElementById("strength");


// CHARACTER SETS

const uppercasechar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lowercasechar = "abcdefghijklmnopqrstuvwxyz";

const numberchar = "0123456789";

const symbolchar = "!@#$%^&*()_+";



// UPDATE SLIDER VALUE

lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value;
});



// GENERATE PASSWORD

function generatePassword() {

    let characters = "";

    if (uppercasecheckbox.checked) {
        characters += uppercasechar;
    }

    if (lowercasecheckbox.checked) {
        characters += lowercasechar;
    }

    if (numbercheckbox.checked) {
        characters += numberchar;
    }

    if (symbolscheckbox.checked) {
        characters += symbolchar;
    }

    // Validation

    if (characters === "") {
        alert("Select at least one option");
        return;
    }

    let password = "";

    for (let i = 0; i < lengthSlider.value; i++) {

        const randomIndex = Math.floor(
            Math.random() * characters.length
        );

        password += characters[randomIndex];
    }

    passwordOutput.value = password;

    updateStrength(password);
}



// STRENGTH CHECK

function updateStrength(password) {

    let score = 0;

    if (uppercasecheckbox.checked) score++;

    if (lowercasecheckbox.checked) score++;

    if (numbercheckbox.checked) score++;

    if (symbolscheckbox.checked) score++;

    if (password.length >= 12) score++;

    if (score >= 5) {

        strengthText.textContent = "Strong";
        strengthText.className = "strong";

    } else if (score >= 3) {

        strengthText.textContent = "Medium";
        strengthText.className = "medium";

    } else {

        strengthText.textContent = "Weak";
        strengthText.className = "weak";
    }
}



// COPY PASSWORD

copybtn.addEventListener("click", () => {

    if (passwordOutput.value === "") {
        return;
    }

    navigator.clipboard.writeText(
        passwordOutput.value
    );

    copybtn.textContent = "Copied!";

    setTimeout(() => {
        copybtn.textContent = "Copy";
    }, 1500);
});



// GENERATE BUTTON

generatebtn.addEventListener(
    "click",
    generatePassword
);



// INITIAL PASSWORD

generatePassword();