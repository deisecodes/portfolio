document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const body = document.body;
    const audio = new Audio('win95.mp3');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      body.classList.add('hidden');
  
      setTimeout(() => {
        if (audio.canPlayType('audio/mpeg')) {
          audio.play();
        } else {
          console.error('Audio format not supported.');
        }
  
        window.location.href = 'mainpage.html';
      }, 500);
    });
  });