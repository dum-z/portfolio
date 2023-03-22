const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');
const messageContainer = document.getElementById('message-container');

messageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const message = document.createElement('div');
  message.classList.add('message');
  const messageBubble = document.createElement('div');
  messageBubble.classList.add('message-bubble');
  messageBubble.innerHTML = messageInput.value.replace(/\n/g, '<br>');
  message.appendChild(messageBubble);
  messageContainer.appendChild(message);
  messageInput.value = '';
});

messageInput.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    messageInput.value += '\n';
  }
});
