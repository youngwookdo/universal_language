// ── Demo typewriter ────────────────────────────────────────────────────────
// Shows a phrase being "typed", then converts each character to a soccer emoji.

const phrases = [
  "Hello",
  "Hola",
  "Bonjour",
  "こんにちは",
  "مرحبا",
  "Привет",
  "안녕하세요",
  "Ciao",
  "Hallo",
  "你好",
  "Olá",
  "Merhaba",
];

const soccerEmojis = ["⚽", "⚽", "⚽", "⚽", "⚽", "⚽", "🥅", "🏆"];

function randomEmoji() {
  return soccerEmojis[Math.floor(Math.random() * soccerEmojis.length)];
}

const demoText = document.getElementById("demoText");
let phraseIndex = 0;

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function runDemo() {
  while (true) {
    const phrase = phrases[phraseIndex % phrases.length];
    phraseIndex++;

    // Type out the phrase
    demoText.textContent = "";
    for (const char of phrase) {
      demoText.textContent += char;
      await sleep(80);
    }

    await sleep(800);

    // Convert each character to a soccer emoji one by one
    const chars = [...demoText.textContent];
    for (let i = 0; i < chars.length; i++) {
      if (chars[i].trim() !== "") {
        chars[i] = randomEmoji();
      }
      demoText.textContent = chars.join("");
      await sleep(55);
    }

    await sleep(1400);

    // Erase
    while (demoText.textContent.length > 0) {
      demoText.textContent = [...demoText.textContent].slice(0, -1).join("");
      await sleep(30);
    }

    await sleep(300);
  }
}

runDemo();

// ── CTA placeholder notice ────────────────────────────────────────────────
document.getElementById("ctaBtn").addEventListener("click", (e) => {
  e.preventDefault();
  alert("Chrome Web Store link coming soon!");
});
