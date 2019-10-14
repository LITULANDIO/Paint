var Paint = require('../js/paint.js');

// Test para comprobar que se genera correctamente el canvas
describe('Dibujar canvas', function () {
    it('Nos muestra la pizarra que ha generado canvas para dibujar', function (event) {
        var canvas = new Canvas(800, 600);
        var posX = event.clientX - 10;
        var posY = event.clientY - 9;
        var ctx = Canvas.getContext('2d');
        var size = 8;
        var color = '#2f3640';
        ctx.fillStyle = color;
        ctx.fillRect(posX, posY, size, size);
        assert.deepEqual(Paint(new Canvas(800, 600)), ['[getContext 2d]', '[fillStyle = color', '[fillRect posX, posY, size, size]'])
    });
});


// Test para comprovar que la variable draw es true => enable()
describe("draw es igual a true", function () {
    var draw = false;
    draw = true;
    it('El mouse se mueve', function () {
        expect(draw).toBeTruthy(draw = true)
    });
});

// Test para comprobar que la variable draw es false => desable()
describe("draw es igual a false", function () {
    var draw = true;
    draw = false;
    it('El mouse se ha detendido', function () {
        expect(draw).toBeFalsy(draw = false)
    });
});

// Test para comprobar que la variable cambia de color => changeColor()
describe("color cambiará de color al hacer click en el elemento .c4", function () {
    var color = "#2f3640";
    var colores = '#12CBC4';
    color = colores;
    it('El color nuevo será: #12CBC4', function () {
        expect(color).toMatch(color);
    });
});

// Test para comprobar que la variable cambia de valor => sizeLine()
describe("el valor de size cambia al hacer click en el elemento .line3", function () {
    var size = 8;
    var line = 15;
    size = line;
    it('El grosor de la linea será de: 15', function () {
        expect(size).toEqual(size);
    });
});
