// API from https://emoji-api.com/

const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");

const emoji = [];

async function getEmoji() {
  let response = await fetch(
    "https://emoji-api.com/emojis?access_key=2b87f71845fc60b79e136a8250dd3c9049d1d893"
  );

  let data = await response.json();
  console.log(data);

  for (let i = 0; i < 1500; i++) {
    emoji.push({
      emojiName: data[i].character,
      emojiCode: data[i].unicodeName
    });
  }
}

getEmoji();

btnEl.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * emoji.length);
  btnEl.innerText = emoji[randomNumber].emojiName;
  emojiNameEl.innerText = emoji[randomNumber].emojiCode;
});
