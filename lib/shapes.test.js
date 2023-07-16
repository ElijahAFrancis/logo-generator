const {triangle, circle, square} = require('./shapes');

describe('triangle', ()=> {
    it('should return svg for a blue triangle', () => {
        let color = 'blue'
        const shape = new triangle(color)
        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue"/>`)
    });
});

describe('circle', ()=> {
    it('should return svg for a green circle', () => {
        const color = 'green'
        const shape = new circle(color)
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="green"/>`)
    });
});

describe('square', ()=> {
    it('should return svg for a red square', () => {
        const color = 'red'
        const shape = new square(color)
        expect(shape.render()).toEqual(`<rect x="50" width='200' height='200' fill="red"/>`)
    });
});