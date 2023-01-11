var typed = new Typed(".type", {
    strings: ["any", "political", "economic"],
    typeSpeed: 160,
    typeDelay: 3500,
    backDelay: 2000,
    backSpeed: 60,
    loop: true,
    loopCount: Infinity,
    showCursor: true,
    cursorChar: '|',
});
const formShowcase = document.querySelector('.button1');
const formReveal = document.querySelector('.content1b');
const button = document.querySelector('#button');
const form = document.getElementById('form');
const background = document.querySelector('.blur');
const username = document.getElementById('username');
const email = document.getElementById('email');
const secondUsername = document.getElementById('secondusername');
const country = document.getElementById('country');
const f = document.querySelector('.form')
const scrollEffect = document.querySelector('.menu')

window.addEventListener('scroll', () => {
    if (window.scrollY < 20) {
        scrollEffect.classList.remove('active')

    } else {
        scrollEffect.classList.add('active')
    }
})

formShowcase.addEventListener('click', (e) => {
    e.preventDefault();


    f.classList.toggle('hidden')
    background.classList.toggle('hidden')

});

background.addEventListener('click', (e) => {
    e.preventDefault();
    f.setAttribute('closing', '')
    f.classList.toggle('hidden')
    background.classList.toggle('hidden')
})

formReveal.addEventListener('click', (e) => {
    e.preventDefault();


    f.classList.toggle('hidden')
    background.classList.toggle('hidden')

});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputField = element.parentElement;
    const errorDisplay = inputField.querySelector('.error');

    errorDisplay.innerText = message;
    inputField.classList.add('error');
    inputField.classList.remove('success');
}
const setSuccess = element => {
    const inputField = element.parentElement;
    const errorDisplay = inputField.querySelector('.error');

    errorDisplay.innerText = '';
    inputField.classList.add('success');
    inputField.classList.remove('error');
};

const validEmail = (email) => {
    const re = /^(([^<>([\]\\.,;:\s@)]+(\.[^<>()[\]\\.,;:\s@]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const secondUsernameValue = secondUsername.value.trim();
    const emailValue = email.value.trim();
    const countryValue = country.value.trim();


    if (usernameValue === '') {
        setError(username, ' name must be provided, na by force oo')
    } else {
        setSuccess(username)
    };
    if (secondUsernameValue === '') {
        setError(secondUsername, 'your papa name must be provided, na by force too')
    } else {
        setSuccess(secondUsername)
    };
    if (emailValue === '') {
        setError(email, 'Email must be provided')
    } else if (!validEmail(emailValue)) {
        setError(email, 'provide a valid email address, no vex me')
    } else {
        setSuccess(email)
    };
    if (countryValue.length = 1) {
        setError(country, 'Please, select a country')
    } else {
        setSuccess(country)
    };

}