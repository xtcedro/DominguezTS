document.addEventListener('DOMContentLoaded', function() {
    const chatbox = document.getElementById('chatbox');
    const inputField = document.getElementById('user-input');
    const sendButton = document.getElementById('send-btn');

    async function sendMessage() {
        const userMessage = inputField.value.trim();
        if (!userMessage) return;

        // Display user message
        chatbox.innerHTML += `<div class="user-text">${userMessage}</div>`;
        inputField.value = '';

        try {
            const response = await fetch('/api/chatbot/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMessage }),
            });

            const data = await response.json();
            if (data.reply) {
                chatbox.innerHTML += `<div class="bot-text">${data.reply}</div>`;
                chatbox.scrollTop = chatbox.scrollHeight;
            }
        } catch (error) {
            console.error("Chatbot Error:", error);
            chatbox.innerHTML += `<div class="bot-text error">Error connecting to chatbot.</div>`;
        }
    }

    sendButton.addEventListener('click', sendMessage);
    inputField.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') sendMessage();
    });
});