// Получить элемент с ID "timer"
var timerElement = document.getElementById("timer");

// Создать переменные для отслеживания времени
var hours = 0;
var minutes = 0;
var seconds = 0;

// Обновление таймера каждую секунду
setInterval(updateTimer, 1000);

// Функция для обновления таймера
function updateTimer() {
  // Увеличить счетчик секунд
  seconds++;

  // Увеличить минуты и часы при достижении 60 секунд
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }

  // Отформатировать время в формат hh:mm:ss
  var time = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);

  // Отобразить время на странице
  timerElement.innerHTML = time;
}

// Функция для форматирования числа в формат "00"
function formatTime(time) {
  return time < 10 ? "0" + time : time;
}