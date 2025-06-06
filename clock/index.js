const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

function updateClock() {
  const currentDate = new Date();
  //   způsobí, že se funkce zavolá každou sekundu
  //   setTimeout(updateClock, 1000);
  const hour = currentDate.getHours();
  const minute = currentDate.getMinutes();
  const second = currentDate.getSeconds();

  //   výpočet úhlů
  const hourDeg = (hour / 12) * 360;
  //   otočení ručiček
  hourEl.style.transform = `rotate(${hourDeg}deg)`;
  const minuteDeg = (minute / 60) * 360;
  minuteEl.style.transform = `rotate(${minuteDeg}deg)`;
  const secondDeg = (second / 60) * 360;
  secondEl.style.transform = `rotate(${secondDeg}deg)`;
}

// updateClock();
setInterval(updateClock, 1000);

// Každou sekundu:

// Co funkce dělá: 1. Získá aktuální čas

// 2. Spočítá, o kolik stupňů se má každá ručička otočit

// 3. Otočí ručičky pomocí CSS transformace
