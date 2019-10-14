// Scope global
var canvas = document.getElementById("paint");
var ctx = canvas.getContext("2d");
var color = "#2f3640";
var size = 8;
var draw = false;
var paint = [];

// Al presionar el ratón dibujamos
function enable() {
    draw = true;
    // Guardamos los trazos
    paint.push([]);
}
// Inicialización para poder dibujar
function drawing(event) {
    var mouseX = event.clientX -2;
    var mouseY = event.clientY +8;
    if (draw) {
        // Asignando color a las lineas
        ctx.fillStyle = color;
        // Dibujar en canvas
        ctx.fillRect(mouseX, mouseY, size, size);
        // Guardamos todos los trazos en un objeto.
        paint[paint.length - 1].push({x: mouseX, y: mouseY});
    }
}
// Al soltar el mouse deja de dibujar
function disable() {
    draw = false;
}
// Eliminar dibujo del canvas
function delet() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
// Recuperar dibujo borrado
function recovery() {
    ctx.beginPath();
    // Redibuja todas las lineas trazadas
    paint.forEach(function (mouse) {
        ctx.moveTo(mouse[0].x, mouse[0].y);
        mouse.forEach(function (line, index) {
            ctx.lineTo(line.x, line.y);
        });
    });
    // Nos muestra los trazos del moveTo y lineTo
    ctx.strokeStyle = color;
    ctx.stroke();
}
// Cambio de color de la paleta de colores
function changeColor(colores) {
    color = colores
}
// Cambio de grosor de linea de dibujo
function sizeLine(line) {
    size = line;
}
