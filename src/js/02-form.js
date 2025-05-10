const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

//get the data that has been saved from localstorage
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  try {
    const parseData = JSON.parse(savedData);
    form.elements.email.value = parseData.email || '';
    form.elements.message.value = parseData.message || '';
  } catch (error) {
    console.log('Veri alınamadı.', error);
  }
}
//save the data that was inputted
form.addEventListener('input', event => {
  const { email, message } = form.elements;
  const data = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
});

//event listener submit event

form.addEventListener('submit', event => {
  event.preventDefault(); //Prevent from default action
  const { email, message } = form.elements;
  // gets value from submit action
  const submitData = {
    email: email.value,
    message: message.value,
  };
  // consele log the value get from submit action
  console.log(submitData);
  //clears local storage after submit event is done we can use .removeItem(STORAGE_KEY) instead of use clear method.
  localStorage.clear();
  // reset the form
  form.reset();
});
