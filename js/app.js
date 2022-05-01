const form = document.querySelector('.form');
const firstNameInput = form.querySelector('#first-name');
const lastNameInput = form.querySelector('#last-name');
const emailInput = form.querySelector('#email');
const passwordInput = form.querySelector('#password');
const repeatPasswordInput = form.querySelector('#confirm-password');

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

firstNameInput.addEventListener('input', handleInput);
lastNameInput.addEventListener('input', handleInput);
emailInput.addEventListener('input', handleEmail);

function handleInput(e) {
  const spanName = form.querySelector(`#${e.target.id} + span`);

  if (e.target.value.trim() === '') {
    spanName.innerHTML =
      'Cannot be empty! <i class="fa-solid fa-triangle-exclamation"></i>';
    spanName.style.color = 'var(--primary-light)';
    spanName.style.backgroundColor = 'var(--invalid-color)';
  } else {
    spanName.innerHTML = '<i class="fa-solid fa-check"></i>';
    spanName.style.color = 'var(--primary-light)';
    spanName.style.backgroundColor = 'var(--valid-color)';
  }
}

function handleEmail(e) {
  const spanEmail = form.querySelector('#email + span');

  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (e.target.value.match(regex)) {
    spanEmail.innerHTML = '<i class="fa-solid fa-check"></i>';
    spanEmail.style.color = 'var(--primary-light)';
    spanEmail.style.backgroundColor = 'var(--valid-color)';
  } else {
    spanEmail.innerHTML =
      'Invalid email! <i class="fa-solid fa-triangle-exclamation"></i>';
    spanEmail.style.color = 'var(--primary-light)';
    spanEmail.style.backgroundColor = 'var(--invalid-color)';
  }
}

repeatPasswordInput.addEventListener('input', (e) => {
  const spanConfirmPassword = form.querySelector('#confirm-password + span');

  if (passwordInput.value !== repeatPasswordInput.value) {
    spanConfirmPassword.textContent = "Passwords don't match!";
    spanConfirmPassword.style.color = 'var(--primary-light)';
    spanConfirmPassword.style.backgroundColor = 'var(--invalid-color)';
  } else {
    spanConfirmPassword.innerHTML = '<i class="fa-solid fa-check"></i>';
    spanConfirmPassword.style.backgroundColor = 'var(--valid-color)';
  }
});
