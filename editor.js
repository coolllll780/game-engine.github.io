let selectedTile = 1;

document.querySelectorAll(".tile").forEach(tile => {
  tile.onclick = () => {
    selectedTile = Number(tile.dataset.id);
  };
});

canvas.addEventListener("click", (e) => {
  if (playing) return;

  const rect = canvas.getBoundingClientRect();
  const x = Math.floor((e.clientX - rect.left) / 32);
  const y = Math.floor((e.clientY - rect.top) / 32);

  if (x >= 0 && y >= 0 && y < grid.length && x < grid[0].length) {
    grid[y][x] = selectedTile;
  }
});
