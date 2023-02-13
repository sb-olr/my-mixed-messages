const messages = [
  '"The purpose of our lives is to be happy." — Dalai Lama',
  '"If you want to live a happy life, tie it to a goal, not to people or things." – Albert Einstein',
  "“The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it.” – Steve Jobs",
  "“If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.” – Steve Jobs",
  "“If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it.” – Steve Jobs",
];

const updateMessage = (i) => {
  const message = document.getElementById("message");
  message.innerHTML = messages[i];
};

document.querySelector("#message").innerHTML +=
  messages[Math.floor(Math.random() * messages.length)];

document.getElementById("nextMessage").addEventListener("click", function () {
  const i = Math.floor(Math.random() * messages.length);
  updateMessage(i);
  console.log(i);
});
