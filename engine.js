const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const TILE_SIZE = 32;
const ROWS = 20;
const COLS = 25;

let grid = Array.from({ length: ROWS }, () =>
  Array(COLS).fill(0)
);

let playing = false;

function drawGrid() {
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      if (grid[y][x] === 1) ctx.fillStyle = "green";
      else if (grid[y][x] === 2) ctx.fillStyle = "gray";
      else ctx.fillStyle = "black";

      ctx.fillRect(
        x * TILE_SIZE,
        y * TILE_SIZE,
        TILE_SIZE,
        TILE_SIZE
      );

      ctx.strokeStyle = "#222";
      ctx.strokeRect(
        x * TILE_SIZE,
        y * TILE_SIZE,
        TILE_SIZE,
        TILE_SIZE
      );
    }
  }
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGrid();

  if (playing) {
    // Game logic will go here later (player, enemies, physics)
  }

  requestAnimationFrame(gameLoop);
}

gameLoop();

document.getElementById("playBtn").onclick = () => playing = true;
document.getElementById("stopBtn").onclick = () => playing = false;
