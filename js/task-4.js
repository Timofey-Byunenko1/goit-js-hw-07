const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  
  const {
    email: { value: email },
    password: { value: password }
  } = form.elements;
  
  const trimmedEmail = email.trim();
  const trimmedPassword = password.trim();
  
  if (!trimmedEmail || !trimmedPassword) {
    alert('All form fields must be filled in');
    return;
  }
  
  const formData = {
    email: trimmedEmail,
    password: trimmedPassword,
  };
  
  console.log(formData);
  
  form.reset(); 
});