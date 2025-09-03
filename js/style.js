const card = document.querySelector('.card');
let rotation = 0;

card.addEventListener('click', () => {
  rotation += 180;
  card.style.transform = `rotateY(${rotation}deg)`;
});