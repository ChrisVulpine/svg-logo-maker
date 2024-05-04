const Shape = require('./shapes.js');


class Square extends Shape {
    render() {
        return `<rect x="50" y="0" width="200" height="200" stroke="black" stroke-width="2" fill="${this.color}"/>`

    }

}

module.exports = Square;