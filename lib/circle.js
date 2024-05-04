const Shape = require('./shapes.js');


class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="100" stroke="black" stroke-width="2" fill="${this.color}"/>`

    }

}

module.exports = Circle;