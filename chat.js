// chat.js
document.addEventListener("DOMContentLoaded", function() {
    var messageInput = document.getElementById("message-input");
    var recipientInput = document.getElementById("recipient-input");
    var sendButton = document.getElementById("send-button");
    var chatMessages = document.getElementById("chat-messages");
    var usernameElement = document.getElementById("username");
    var recipientElement = document.getElementById("recipient");
  
    var currentUser = {
      username: "Felhasználó: " // Felhasználónév beállítása
    };
  
    sendButton.addEventListener("click", function() {
      var message = messageInput.value.trim();
      var recipient = recipientInput.value.trim();
      if (message !== "" && recipient !== "") {
        sendMessage(currentUser.username, recipient, message);
        messageInput.value = "";
        recipientInput.value = "";
      }
    });
  
    function sendMessage(sender, recipient, message) {
      var chatMessage = document.createElement("div");
      chatMessage.classList.add("chat-message");
      chatMessage.innerHTML = `
        <span class="sender">${sender}</span>
        <span class="recipient">${recipient}</span>
        <span class="message">${message}</span>
      `;
      chatMessages.appendChild(chatMessage);
    }
  
    // Felhasználónév és címzett beállítása
    usernameElement.textContent = currentUser.username;
  
    recipientInput.addEventListener("input", function() {
      recipientElement.textContent = recipientInput.value;
    });
  });
  