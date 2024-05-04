const Shape = require('./shapes.js');


class Triangle extends Shape {
    render() {
        return `<polygon points="150,0 50,200 250,200" stroke="black" stroke-width="2" fill="${this.color}"/>`

    }

}

module.exports = Triangle;