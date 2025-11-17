// Frontend JS: simple chat UI and fetch calls to backend
// Handles sending user messages to POST /api/chat and rendering replies

const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');
const chatWindow = document.getElementById('chatWindow');

function addBubble(text, who = 'bot'){
  const div = document.createElement('div');
  div.className = `bubble ${who}`;
  div.textContent = text;
  chatWindow.appendChild(div);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

chatForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const text = chatInput.value.trim();
  if (!text) return;

  // Show user bubble
  addBubble(text, 'user');
  chatInput.value = '';

  try {
    const resp = await fetch(`${window.location.origin.replace(window.location.pathname,'')}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: text })
    });

    if (!resp.ok) {
      const err = await resp.json();
      addBubble('Error: ' + (err.error || 'Server error'), 'bot');
      return;
    }

    const data = await resp.json();
    addBubble(data.reply || 'No reply', 'bot');
  } catch (err) {
    addBubble('Network error', 'bot');
  }
});
