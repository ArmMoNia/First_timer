let day;
switch (new Date().getDay()) {
  case 0:
    day = "SUN";
    break;
  case 1:
    day = "MON";
    break;
  case 2:
    day = "TUE";
    break;
  case 3:
    day = "WED";
    break;
  case 4:
    day = "THU";
    break;
  case 5:
    day = "FRI";
    break;
  case 6:
    day = "SAT";
    break;
}

const monthName = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

setInterval(function () {
  const now = new Date();
  const date = `${now.getDate()}`.padStart(2, 0);
  let month;
  for (i = 0; i <= now.getMonth(); i++) {
    if (now.getMonth() === i) {
      month = monthName[i];
    }
  }
  const year = now.getFullYear();
  const hour = `${now.getHours()}`.padStart(2, 0);
  const min = `${now.getMinutes()}`.padStart(2, 0);
  const sec = `${now.getSeconds()}`.padStart(2, 0);

  const dateformat = document.getElementById("date");
  const timeformat = document.getElementById("time");
  dateformat.innerHTML = `${day} ${date} ${month} ${year}`;
  timeformat.innerHTML = `${hour}:${min}:${sec}`;
}, 1000);
