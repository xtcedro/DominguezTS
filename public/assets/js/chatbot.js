document.addEventListener("DOMContentLoaded", () => {
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-btn");
    const chatBox = document.getElementById("chat-box");

    sendButton.addEventListener("click", sendMessage);
    userInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") sendMessage();
    });

    async function sendMessage() {
        const message = userInput.value.trim();
        if (!message) return;

        // Append user message
        chatBox.innerHTML += `
            <div class="user-message">
                <span class="user-label">You:</span>
                <div class="user-text">${message}</div>
            </div>
        `;
        userInput.value = "";
        chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message }),
            });

            const data = await response.json();
            const markdownReply = renderMarkdown(data.reply); // Convert Markdown

            // Append bot response
            chatBox.innerHTML += `
                <div class="bot-message">
                    <span class="bot-label">Gemini ✨</span>
                    <div class="bot-text">${markdownReply}</div>
                </div>
            `;
            chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll
        } catch (error) {
            chatBox.innerHTML += `
                <div class="error-message">
                    <b>Error:</b> AI service is unavailable.
                </div>
            `;
        }
    }

    // Convert Markdown to HTML (Basic Support)
    function renderMarkdown(text) {
        return text
            .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>") // Bold **text**
            .replace(/\*(.*?)\*/g, "<i>$1</i>") // Italic *text*
            .replace(/__(.*?)__/g, "<b>$1</b>") // Bold (Alt) __text__
            .replace(/_(.*?)_/g, "<i>$1</i>") // Italic (Alt) _text_
            .replace(/`(.*?)`/g, "<code>$1</code>") // Inline code `text`
            .replace(/\n/g, "<br>"); // Line breaks
    }
});