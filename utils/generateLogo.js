function generateLogo(data) {
    if (data.shape = 'triange') {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

                    <polygon width='100%' height='100%' points='0,150 300,150 150,0' fill="${data.color}" />
      
                    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
      
                </svg>`
    } else if (data.shape = 'circle') {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

                    <circle cx="150" cy="100" r="80" fill="${data.color}" />
      
                    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
      
                </svg>`
    } else if (data.shape = 'square') {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

                    <rect x="50" width='200' height='200' fill="${data.color}" />
      
                    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
      
                </svg>`
    };
};


module.exports = generateLogo;