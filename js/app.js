const form = document.querySelector('.form');
const firstNameInput = form.querySelector('#first-name');
const lastNameInput = form.querySelector('#last-name');
const passwordInput = form.querySelector('#password');
const repeatPasswordInput = form.querySelector('#confirm-password');

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

firstNameInput.addEventListener('input', handleInput);
lastNameInput.addEventListener('input', handleInput);

function handleInput(e) {
  const spanFirstName = form.querySelector(`#${e.target.id} + span`);

  if (e.target.value.trim() === '') {
    spanFirstName.innerHTML =
      'Cannot be empty! <i class="fa-solid fa-triangle-exclamation"></i>';
    spanFirstName.style.color = 'var(--primary-light)';
    spanFirstName.style.backgroundColor = 'var(--invalid-color)';
  } else {
    spanFirstName.innerHTML = '<i class="fa-solid fa-check"></i>';
    spanFirstName.style.color = 'var(--primary-light)';
    spanFirstName.style.backgroundColor = 'var(--valid-color)';
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
