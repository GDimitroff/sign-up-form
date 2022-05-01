const form = document.querySelector('.form');
const firstNameInput = document.querySelector('#first-name');
const passwordInput = form.querySelector('#password');
const repeatPasswordInput = form.querySelector('#confirm-password');

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

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
