const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d');

canvas.width = 500*1.618;
canvas.height = 500;

const position = canvas.getBoundingClientRect()

const mouse = {
    x: canvas.width/2,
    y: canvas.height/2,
    cliced: false,
}

canvas.addEventListener('mousedown', (e) => {
    mouse.cliced = true;
})

canvas.addEventListener('mouseup', (e) => {
    mouse.cliced = false;
    mouse.x = e.x  - position.left;
    mouse.y = e.y  - position.top;
})

class Player {
    constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        this.r = 60;
        this.speed = 30;
    }

    update() {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        if ( this.x != mouse.x) {
            this.x -= dx/this.speed;
        }

        if ( this.y != mouse.y) {
            this.y -= dy/this.speed;
        }
    }

    draw() {
        ctx.fillStyle = 'red'
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
        ctx.fill();
    }
}

const player = new Player();

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.update();
    player.draw();

    requestAnimationFrame(animate);
}

animate();