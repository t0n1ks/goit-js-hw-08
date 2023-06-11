import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

// Функція для збереження часу відтворення у локальне сховище
const saveCurrentTime = throttle(async () => {
  try {
    const currentTime = await player.getCurrentTime();
    localStorage.setItem('videoplayer-current-time', currentTime);
  } catch (error) {
    console.error('Помилка при збереженні часу відтворення:', error);
  }
}, 1000);

// Встановлюємо збережений час відтворення після перезавантаження сторінки
const storedTime = localStorage.getItem('videoplayer-current-time');
if (storedTime) {
  player.setCurrentTime(storedTime).catch(error => {
    console.error('Помилка при встановленні часу відтворення:', error);
  });
}

// Відстежуємо подію оновлення часу відтворення
player.on('timeupdate', saveCurrentTime);

