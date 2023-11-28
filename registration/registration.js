function focusGreen(id) {
    document.getElementById(id).style = "border: 3px solid green";
}

function submitForm() {
    let submitForm = document.registration;
    let flag = true;
    idCheck();
    nameCheck();
    passwordCheck();
    rePasswordCheck();
    monthCheck();
    dayCheck();
    yearCheck();
    genderCheck();
    phoneCheck();
    
    if(!idCheck() || !nameCheck() || !passwordCheck() || !rePasswordCheck() || !monthCheck() ||
        !dayCheck() || !yearCheck() || !genderCheck() || !phoneCheck()) {
            flag = false;
            window.alert('Please complete the form');
            return;
        }

    if(flag) {
        if(confirm("Create account?")) {
            submitForm.submit();
        }
    }
}

function idCheck() {
    let check = document.registration;
    let usernameErrorMsg = document.getElementById('username_error_msg');

    usernameErrorMsg.innerHTML = '';

    let requirements = /^[a-zA-Z][0-9a-zA-Z]{6,12}$/;

    if(requirements.test(check.username.value)) {
        usernameErrorMsg.innerHTML = "That username is available!";
        usernameErrorMsg.className = 'success';
        return true;
    }
    if(check.username.value === ''){
        usernameErrorMsg.innerHTML = 'Please enter a username';
    }
    else {
        usernameErrorMsg.innerHTML = 'Your username must start with a letter and be between 7-12 characters';
    }
    usernameErrorMsg.className = 'error';
    return false;
}

function nameCheck() {
    let check = document.registration;
    let nameErrorMsg = document.getElementById('name_error_msg');

    nameErrorMsg.innerHTML = '';

    let requirements = /^[a-zA-Z]{1,30}$/;

    if(requirements.test(check.name.value)) {
        nameErrorMsg.innerHTML = 'That seems like a valid name...';
        nameErrorMsg.className = 'success';
        return true;
    }
    if(check.name.value === ''){
        nameErrorMsg.innerHTML = 'Please enter your name';
    }
    else {
        nameErrorMsg.innerHTML = 'Your name is invalid';
    }
    nameErrorMsg.className = 'error';
    return false;
}

function passwordCheck() {
    let check = document.registration;
    let passwordErrorMsg = document.getElementById('password_error_msg');

    passwordErrorMsg.innerHTML = '';

    let requirements = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9\W]{6,25}$/;

    if(requirements.test(check.password.value)) {
        passwordErrorMsg.innerHTML = 'That password is valid';
        passwordErrorMsg.className = 'success';
        return true;
    }
    if(check.password.value === '') {
        passwordErrorMsg.innerHTML = 'Please enter a password';
    }
    else {
        passwordErrorMsg.innerHTML = '6-25 characters containing at least one digit and letter';
    }
    passwordErrorMsg.className = 'error';
    return false;
}

function rePasswordCheck() {
    let check = document.registration;
    let rePasswordErrorMsg = document.getElementById('re-password_error_msg');
    
    rePasswordErrorMsg.innerHTML = '';
    
    if(check.re_password.value === '') {
        rePasswordErrorMsg.className = 'error';
        rePasswordErrorMsg.innerHTML = 'Re-enter password';
        return false;
    }
    if(check.password.value != check.re_password.value){
        rePasswordErrorMsg.innerHTML = 'Passwords do not match';
        rePasswordErrorMsg.className = 'error';
        return false;
    }
    rePasswordErrorMsg.className = 'success'
    rePasswordErrorMsg.innerHTML = 'Password matches'
    return true;
}

function monthCheck() {
    let check = document.registration;
    let birthdayErrorMsg = document.getElementById('birthday_error_msg');
    
    birthdayErrorMsg.innerHTML = '';

    let monthRequirements = /^(January|February|March|April|May|June|July|August|September|October|November|December)$/; 
    if(monthRequirements.test(check.month.value)) {
        birthdayErrorMsg.className = 'success';
        return true;
    }
    if(check.month.value === '') {
        birthdayErrorMsg.innerHTML = 'Select a month';
    }
    else {
        birthdayErrorMsg.innerHTML = 'Invalid month';
    }
    birthdayErrorMsg.className = 'error';
    return false;
}

function dayCheck() {
    let check = document.registration;
    let birthdayErrorMsg = document.getElementById('birthday_error_msg');
    
    birthdayErrorMsg.innerHTML = '';

    let dayRequirements = /^(?:[1-9]|1\d|2[0-9]|3[0-1])$/;
    if(dayRequirements.test(check.day.value)) {
        birthdayErrorMsg.className = 'success';
        return true;
    }
    if(check.day.value === '') {
        birthdayErrorMsg.innerHTML = 'Select a day';
    }
    else {
        birthdayErrorMsg.innerHTML = 'Invalid day';
    }
    birthdayErrorMsg.className = 'error';
    return false;
}

function yearCheck() {
    let check = document.registration;
    let birthdayErrorMsg = document.getElementById('birthday_error_msg');
    
    birthdayErrorMsg.innerHTML = '';

    let yearRequirements = /^(19[0-9][0-9]|20[0-1][0-9]|202[0-3])$/;
    if(yearRequirements.test(check.year.value)) {
        birthdayErrorMsg.className = 'success';
        return true;
    }
    if(check.year.value === '') {
        birthdayErrorMsg.innerHTML = 'Enter a year';
    }
    else {
        birthdayErrorMsg.innerHTML = 'Invalid year';
    }
    birthdayErrorMsg.className = 'error';
    return false;
}
function genderCheck() {
    return true;
}

function phoneCheck() {
    let check = document.registration;
    let phoneErrorMsg = document.getElementById('phone_error_msg');
    
    phoneErrorMsg.innerHTML = '';

    let requirements = /^([0-9]{8})$/;
    if(requirements.test(check.phone.value)) {
        phoneErrorMsg.className = 'success';
        return true;
    }
    phoneErrorMsg.className = 'error';
    phoneErrorMsg.innerHTML = 'Invalid phone number';
    return false;
}
