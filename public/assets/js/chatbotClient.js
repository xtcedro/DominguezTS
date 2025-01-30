document.addEventListener("DOMContentLoaded", function () {
    const chatbox = document.getElementById("chatbox");
    const inputField = document.getElementById("user-input");
    const sendButton = document.getElementById("send-btn");

    async function sendMessage() {
        const userMessage = inputField.value.trim();
        if (!userMessage) return;

        chatbox.innerHTML += `<p class="user-text">${userMessage}</p>`;
        inputField.value = "";

        try {
            const response = await fetch("/api/chatbot/chat", {  // Make sure this endpoint is correct
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMessage }),
            });

            const data = await response.json();
            chatbox.innerHTML += `<p class="bot-text">${data.reply}</p>`;
            chatbox.scrollTop = chatbox.scrollHeight;
        } catch (error) {
            chatbox.innerHTML += `<p class="bot-text error">⚠️ Chatbot is unavailable.</p>`;
        }
    }

    sendButton.addEventListener("click", sendMessage);
    inputField.addEventListener("keypress", function (event) {
        if (event.key === "Enter") sendMessage();
    });
});