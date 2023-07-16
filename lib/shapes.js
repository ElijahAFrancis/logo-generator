class shape {
    constructor(color){
        this.color = color;
    }
}

class triangle extends shape {
    render(){
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
    }
}
class circle extends shape {
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
    }
}
class square extends shape {
    render(){
        return `<rect x="50" width='200' height='200' fill="${this.color}"/>`
    }
}

module.exports = {triangle, circle, square}