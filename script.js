const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
console.log(ctx);
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = "/shadow_dog.png";

x = 0;
y = 0;

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.fillRect(x, 10 +
        y, 30, 40);
    requestAnimationFrame(animate);
    x++;
    if (x > 500) {
        x = 0;
        y++;
    }
}

animate();