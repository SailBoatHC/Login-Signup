//Showing Password
let showPasswordBtn = document.getElementById('showPasswordBtn');
let passwordInput = document.getElementById('passwordInput');

showPasswordBtn.addEventListener('click', ()=>{
    if (passwordInput.type == 'password') {
        passwordInput.type = 'text';
    }
    else {
        passwordInput.type = 'password';
    }
});

// Showing Password
let showPasswordBtn2 = document.getElementById('showPasswordBtn2');
let passwordInput2 = document.getElementById('passwordInput2');

showPasswordBtn2.addEventListener('click', () => {
    if (passwordInput2.type === 'password') {
        passwordInput2.type = 'text';
    } else {
        passwordInput2.type = 'password';
    }
});


const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login__link');
const registerLink = document.querySelector('.reg__link');
const btnPopup = document.querySelector('.nav__btn');
const iconClose = document.querySelector('.icon-close');

iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
});

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});