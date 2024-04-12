function validateFormChat(formChat) {
  const nameInput = formChat.querySelector('[name="name"]');
  const emailInput = formChat.querySelector('[name="email"]');
  const telInput = formChat.querySelector('[name="phone"]');

  let name = nameInput.value.trim();
  let email = emailInput.value.trim();
  let tel = telInput.value.trim();

  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let telRegex = /^\d{10}$/;

  if (name === "") {
    alert('Пожалуйста, введите ваше имя.');
    return false;
  }

  if (!emailRegex.test(email)) {
    alert('Пожалуйста, введите действительный email.');
    return false;
  }

  if (!telRegex.test(tel)) {
    alert('Пожалуйста, введите действительный номер телефона (10 цифр без пробелов и дефисов).');
    return false;
  }

  return true;
}

const formChat = document.querySelector('.form-block--form form')
formChat.addEventListener('submit', function(event) {
  event.preventDefault()
  validateFormChat(this)
})

function validateFormCall(formCall) {
  const telInput = formCall.querySelector('[name="phone"]');

  let tel = telInput.value.trim();

  let telRegex = /^\d{10}$/;

  if (!telRegex.test(tel)) {
    alert('Пожалуйста, введите действительный номер телефона (10 цифр без пробелов и дефисов).');
    return false;
  }

  return true;
}

const formCall = document.querySelector('.form-block--call form')
formCall.addEventListener('submit', function(event) {
  event.preventDefault()
  validateFormCall(this)
})
