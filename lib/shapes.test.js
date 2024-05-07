const Circle = require('./circle');
const Square = require('./square');
const Triangle = require('./triangle');


describe('Shapes', () => {

    describe('Circle', () => {
        it('should render a circle in svg format with the correct color', () => {
            let tempCircle = new Circle('green');
            let circle = tempCircle.render();
            let passed = false;

            if (circle && circle.includes('<circle cx="150" cy="100" r="100" stroke="black" stroke-width="2" fill="green"/')) {
                passed = true;
            };
            expect(passed).toEqual(true);
        })
    })
})

describe('Shapes', () => {

    describe('Square', () => {
        it('should render a square in svg format with the correct color', () => {
            let tempSquare = new Square('blue');
            let square = tempSquare.render();
            let passed = false;

            if (square && square.includes('<rect x="50" y="0" width="200" height="200" stroke="black" stroke-width="2" fill="blue"/')) {
                passed = true;
            };
            expect(passed).toEqual(true);
        })
    })
});

describe('Shapes', () => {

    describe('Triangle', () => {
        it('should render a triangle in svg format with the correct color', () => {
            let tempTriangle = new Triangle('red');
            let triangle = tempTriangle.render();
            let passed = false;

            if (triangle && triangle.includes('<polygon points="150,0 50,200 250,200" stroke="black" stroke-width="2" fill="red"/')) {
                passed = true;
            };
            expect(passed).toEqual(true);
        })
    })
});

