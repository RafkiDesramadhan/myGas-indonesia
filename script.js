document
  .getElementById("whatsapp-toggle")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const chatBox = document.getElementById("whatsapp-chat-box");
    chatBox.classList.toggle("show");
  });
