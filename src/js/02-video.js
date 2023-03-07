const iframe = document.querySelector('iframe');
const players = new Vimeo.Player(iframe);

players.on('play', function() {
    console.log('played the video!');
});

players.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('player', {
  id: 123456789,
});

player.on('timeupdate', throttle(() => {
  const currentTime = Math.floor(player.getCurrentTime());
  localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000));

const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
  player.setCurrentTime(currentTime);
}