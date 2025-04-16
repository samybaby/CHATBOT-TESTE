const express = require("express");
const app = express();
const port = 3000;

// Configuração para poder processar JSON no corpo das requisições
app.use(express.json());
app.use(express.static("public")); // Serve os arquivos da pasta public

// Rota para receber as mensagens do usuário
app.post("/message", (req, res) => {
  const userMessage = req.body.message;
  console.log("Mensagem recebida: ", userMessage);

  // Resposta simples (simulando o chatbot)
  let botResponse = "Desculpe, não entendi.";

  if (userMessage.toLowerCase().includes("horário")) {
    botResponse = "Nosso horário de atendimento é de segunda a sexta, das 8h às 18h.";
  } else if (userMessage.toLowerCase().includes("entrega")) {
    botResponse = "Seu pedido será entregue em até 5 dias úteis.";
  } else if (userMessage.toLowerCase().includes("atendente")) {
    botResponse = "Estou transferindo para um atendente humano...";
  }

  res.json({ response: botResponse });
});

// Rota principal para ver se o servidor está funcionando
app.get("/", (req, res) => {
  res.send("Servidor funcionando!");
});

// Inicia o servidor na porta 3000
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
