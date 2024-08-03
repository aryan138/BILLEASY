// Selecting elements
const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

// Adding event listener for register link
registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');
});

// Adding event listener for login link
loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
});

// Handling sign up form submission
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    const user = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem('user', JSON.stringify(user));
    logregBox.classList.remove('active');
});

// Handling sign in form submission
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
        window.location.href = '../Admin Dashboard html css/index.html';
    } else {
        alert('Invalid email or password');
    }
});
