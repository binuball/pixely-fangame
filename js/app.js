const init = () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  let squareX = 25;
  let squareY = 25;

  const animation = () => {
    requestAnimationFrame(() => {
      drawSquare(squareX, squareY, squareWidth, squareHeight, squareColor);
    });
  }
  const drawSquare = (x, y, width, height, color) => {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
    ctx.fill();
  }
  const drawBackground = () => {
    // canvas.style.background = 'url("../images/background.jpg")';
    canvas.style.background = '#111';
  }
  
  canvas.width = 400;
  canvas.height = 400;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBackground();

  drawSquare(squareX, squareY, squareWidth, squareHeight, squareColor);

  document.addEventListener('keydown', (e) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (e.key == 'ArrowRight' || e.key == 'd') {
      squareX += squareSpeed;
    } else if (e.key == 'ArrowLeft' || e.key == 'a') {
      squareX -= squareSpeed;
    } else if (e.key == 'ArrowDown' || e.key == 's') {
      squareY += squareSpeed;
    } else if (e.key == 'ArrowUp' || e.key == 'w') {
      squareY -= squareSpeed;
    }

    animation();
  });

  animation();
}

init();