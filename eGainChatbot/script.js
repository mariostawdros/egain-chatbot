// script.js

const chatWindow = document.getElementById('chat-window');
const userInput = document.getElementById('user-input');

// Start conversation with a system prompt and bot greeting
const conversationHistory = [
  { role: "system", content: CONFIG.SYSTEM_PROMPT },
  { role: "assistant", content: "Hi, I can help you track your package. Please enter your numeric order/tracking number." }
];

// Format messages (bold, line breaks, spacing)
function formatMessageContent(text) {
  let formatted = text.trim();

  formatted = formatted.replace(/(['"])(In transit|Out for delivery|Delivered|Delayed)(['"])/g, '<b>$2</b>');
  formatted = formatted.replace(/(In transit|Out for delivery|Delivered|Delayed)/g, '<b>$1</b>');
  formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
  formatted = formatted.replace(/\n/g, '<br/>');

  return formatted;
}

// Display messages in chat window
function displayConversation() {
  chatWindow.innerHTML = '';
  conversationHistory.forEach(message => {
    if (message.role !== 'system') {
      const messageElement = document.createElement('div');
      messageElement.className = 'message ' + message.role;
      messageElement.innerHTML = formatMessageContent(message.content);
      chatWindow.appendChild(messageElement);
    }
  });
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Show bot typing indicator
function addBotLoadingMessage() {
  const loadingMessage = document.createElement('div');
  loadingMessage.id = 'bot-loading';
  loadingMessage.className = 'message bot loading';
  loadingMessage.innerHTML = `<span class="dot"></span><span class="dot"></span><span class="dot"></span>`;
  chatWindow.appendChild(loadingMessage);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Remove typing indicator
function removeBotLoadingMessage() {
  const loadingMessage = document.getElementById('bot-loading');
  if (loadingMessage) loadingMessage.remove();
}

// Get response from OpenAI
async function getChatbotResponse() {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + CONFIG.API_KEY
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: conversationHistory,
        max_tokens: 150,
        temperature: 0.7
      })
    });

    if (!response.ok) throw new Error(`Error: ${response.status}`);

    const data = await response.json();
    return data.choices[0].message.content.trim();
  } catch (error) {
    console.error("API call failed:", error);
    return "I'm sorry, I'm having trouble getting a response right now. Please try again later.";
  }
}

// Handle user input and show bot reply
async function processUserInput(text) {
  conversationHistory.push({ role: "user", content: text });
  displayConversation();

  addBotLoadingMessage();

  const reply = await getChatbotResponse();
  removeBotLoadingMessage();

  conversationHistory.push({ role: "assistant", content: reply });
  displayConversation();
}

// Submit message on Enter
userInput.addEventListener('keydown', async function(event) {
  if (event.key === 'Enter' && userInput.value.trim() !== '') {
    const userText = userInput.value.trim();
    userInput.value = '';
    await processUserInput(userText);
  }
});

// Load chat when page opens
window.onload = displayConversation;
