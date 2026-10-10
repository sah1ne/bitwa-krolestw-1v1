const game = document.getElementById("map");

let units = [];

function spawnUnit(player) {
    const unit = document.createElement("div");
    unit.className = "unit";
    unit.style.left = player === 1 ? "50px" : "800px";
    unit.style.top = Math.random() * 450 + "px";
    unit.style.background = player === 1 ? "crimson" : "mediumseagreen";
    game.appendChild(unit);

    units.push({
        player,
        x: parseInt(unit.style.left),
        y: parseInt(unit.style.top),
        element: unit,
        hp: 100,
        speed: player === 1 ? 1 : -1
    });
}

function fullAttack(player) {
    for (let i = 0; i < 5; i++) spawnUnit(player);
}

function updateUnits() {
    units.forEach((u, i) => {
        u.x += u.speed;
        u.element.style.left = u.x + "px";

        if ((u.player === 1 && u.x > 850) || (u.player === 2 && u.x < 0)) {
            u.element.remove();
            units.splice(i, 1);
        }
    });
}

function gameLoop() {
    updateUnits();
    requestAnimationFrame(gameLoop);
}

gameLoop();
