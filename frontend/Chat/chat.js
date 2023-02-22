const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the input value
  const inputValue = input.value;

  // Create a new list item and add it to the list
  const li = document.createElement('li');
  li.textContent = inputValue;
  ul.appendChild(li);

  // Clear the input
  input.value = '';

  // Scroll to the bottom of the chatbox
  ul.scrollTop = ul.scrollHeight;
});
