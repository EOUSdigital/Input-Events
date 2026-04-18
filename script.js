"use strict";

//Title 🟧 Module 8 - Events: Lesson 07. Input Events


//? 🧠 Guided Practice (Mini Task)

const input = document.getElementById('textInput');
const char = document.getElementById('charCount');
const resetBtn = document.getElementById('updateBtn');

input.addEventListener('input', (e) => {
    char.textContent = `Characters: ${e.target.value.length}`;
});

resetBtn.addEventListener('click', () => {
    input.value = '';
    char.textContent = 'Characters: 0';
});


//? 🧠 Live Input Validation

const usernameInput = document.getElementById('usernameInput');
const validationMessage = document.getElementById('validationMessage');

usernameInput.addEventListener('input', (e) => {
    const trimmed = e.target.value.trim();
        
    if (trimmed.length === 0) {
        validationMessage.textContent = 'Please enter a username';
        validationMessage.style.color = 'black';
    } else if (trimmed.length < 3) {
        validationMessage.textContent = 'Too short ❌';
        validationMessage.style.color = 'red';
    } else {
        validationMessage.textContent = 'Valid username ✅';
        validationMessage.style.color = 'green';
    }
});


//? 🧠 Password Strength Checker

const passwordInput = document.getElementById('passwordInput');
const passwordMessage = document.getElementById('passwordMessage');
const strengthFill = document.getElementById('strengthFill');

const strengthStyles = {
    empty: { width: "0%", color: "transparent" },
    weak: { width: "30%", color: "red" },
    medium: { width: "60%", color: "orange" },
    strong: { width: "100%", color: "green" }
};

passwordInput.addEventListener('input', (e) => {
    const value = e.target.value.trim();
    
    const hasLetters = /[a-zA-Z]/.test(value);
    const hasNumbers = /[0-9]/.test(value);

    let strength = "empty";

    if (value.length === 0) {
        passwordMessage.textContent = "Enter a password";
        passwordMessage.style.color = 'black';
        strength = "empty";
    } 
    else if (value.length < 6) {
        passwordMessage.textContent = "Weak password ❌";
        passwordMessage.style.color = 'red';
        strength = "weak";
    } 
    else if (hasLetters && hasNumbers) {
        passwordMessage.textContent = "Strong password ✅";
        passwordMessage.style.color = 'green';
        strength = "strong";
    } 
    else {
        passwordMessage.textContent = "Medium strength ⚠️";
        passwordMessage.style.color = 'orange';
        strength = "medium";
    }

    const style = strengthStyles[strength];
    strengthFill.style.width = style.width;
    strengthFill.style.backgroundColor = style.color;
});


//? 🧩 New Exercise: Confirm Password Validator

const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const matchMessage = document.getElementById('matchMessage');

function checkMatch() {
    if (password.value === '' && confirmPassword.value === '') {
        matchMessage.textContent = "Enter passwords";
        matchMessage.style.color = "black";
    } 
    else if (password.value === confirmPassword.value) {
        matchMessage.textContent = "Passwords match ✅";
        matchMessage.style.color = "green";
    } 
    else {
        matchMessage.textContent = "Passwords do not match ❌";
        matchMessage.style.color = "red";
    }
}

password.addEventListener('input', checkMatch);
confirmPassword.addEventListener('input', checkMatch);

