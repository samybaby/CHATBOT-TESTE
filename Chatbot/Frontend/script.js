function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (message === "") return;

  appendMessage("user", message);
  input.value = "";

  // Fazendo a requisição para o backend
  fetch("http://localhost:3000/message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message })
  })
    .then(response => response.json())
    .then(data => {
      appendMessage("bot", data.response);
    })
    .catch(error => {
      console.error("Erro ao conectar com o backend:", error);
      appendMessage("bot", "Ocorreu um erro. Tente novamente.");
    });
}

function appendMessage(sender, message) {
  const chatBox = document.getElementById("chat-box");
  const msgDiv = document.createElement("div");
  msgDiv.classList.add(sender === "user" ? "user-msg" : "bot-msg");
  msgDiv.textContent = message;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}
