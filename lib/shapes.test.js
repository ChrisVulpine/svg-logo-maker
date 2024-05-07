const Shapes = require('./shapes');
const Circle = require('./circle');
const Square = require('./square');
const Triangle = require('./triangle');



describe('Shapes', () => {

    describe('', () => {
        it('should render a circle in svg format', () => {
            let tempCircle = new Circle('green');
            let circle = tempCircle.render();
            let passed = false;

            if (circle && circle.includes('<circle')) {
                passed = true;
            };

            // const = 
            // const Shapes = new Shapes();
            // expect(Shapes.toEqual(rederedShape));
            // expect(1).toEqual(2);
            expect(passed).toEqual(true);
        })
    })
})