const name = document.getElementById("myName");
const myClock = document.getElementById("myClock");

const userName = prompt("Adınız nedir?");
name.textContent = userName;

function showTime() {
  const date = new Date();
  const day = date.getDay();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  myClock.textContent = `${addZero(hour)} : ${addZero(minutes)} : ${addZero(
    seconds
  )} ${getDate(day)}`;

  setInterval(showTime, 1000);
}

function getDate(day) {
  switch (day) {
    case 1:
      return "Pazartesi";
    case 2:
      return "Salı";
    case 3:
      return "Çarşamba";
    case 4:
      return "Perşembe";
    case 5:
      return "Cuma";
    case 6:
      return "Cumartesi";
    case 7:
      return "Pazar";
  }
}

function addZero(isZero) {
  return isZero < 10 ? `0${isZero}` : `${isZero}`;
}

showTime();
