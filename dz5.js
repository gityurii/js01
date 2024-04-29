function drawTriangle(h, s) {
    let line = '';
    for (let i = 0; i < h; i++) {
        line += s;
        console.log(line);
    }
}

function drawTriangle2(h, s) {
    let line = '';
    while (line.length < h) {
        line += s;
        console.log(line);
    }
}

let symbol = '*';
let height = 5;

drawTriangle(height, symbol);
console.log();
drawTriangle2(height, symbol);