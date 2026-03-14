// Hugging Face in-browser GPT chat
// Requires npm: @xenova/transformers or cdn: <script src="https://cdn.jsdelivr.net/npm/@xenova/transformers/dist/transformers.min.js"></script>

let model;

async function loadAIModel() {
  // Load GPT-2 small model in browser
  model = await window.transformers.AutoModelForCausalLM.from_pretrained('gpt2');
  console.log('AI model loaded!');
}

loadAIModel();

// DOM references
const aiInput = document.getElementById('ai-input');
const aiSend = document.getElementById('ai-send');
const aiMessages = document.getElementById('ai-messages');

function addMessage(text, sender) {
  const div = document.createElement('div');
  div.textContent = text;
  div.className = sender;
  aiMessages.appendChild(div);
  aiMessages.scrollTop = aiMessages.scrollHeight;
}

async function getAIResponse(prompt) {
  if (!model) return "AI is still loading, please wait...";

  const output = await model.generate(prompt, {
    max_new_tokens: 50,
  });

  return output[0].generated_text.replace(prompt, '');
}

// Event listener
aiSend.addEventListener('click', async () => {
  const text = aiInput.value.trim();
  if (!text) return;

  addMessage(text, 'user');
  aiInput.value = '';

  addMessage('...', 'bot'); // temporary loading message

  const botDiv = aiMessages.querySelector('.bot:last-child');
  const response = await getAIResponse(text);
  botDiv.textContent = response || "I couldn't generate a response.";
});

// Optional: press Enter to send
aiInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') aiSend.click();
});
