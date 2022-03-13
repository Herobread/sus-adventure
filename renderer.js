const asciicontainer = document.getElementById('asciicontainer')
window.fsize = 10

export const asciiMap = {
    map: [[]],
    putSymbol: function (char, x, y) {
        this.map[[x, y]] = { char: char }
    },
    init: function () {
        for (var x = 0; x <= window.width; x++) {
            for (var y = 0; y <= window.height; y++) {
                this.map[[x, y]] = { char: null }
            }
        }
    },
}

export const renderer = {
    map: asciiMap,
    int: function () {

    },
    put: function (text) {
        window.asciiScreen.textContent = text
    },
    draw: function (char, x, y) {
        asciiMap.putSymbol(char, x, y)
    },
    drawObject: function (object, x, y) {
        var _y = 0;
        var _x = 0;
        for (var i = 0; i < object.length; i++) {
            if (object.charAt(i) != '\n') {
                this.draw(object.charAt(i), x + _x, y + _y)
                _x++
            } else {
                _x = 0
                _y++
            }
        }
    },
    drawObjectWithoutSpace: function (object, x, y) {
        var _y = 0;
        var _x = 0;
        for (var i = 0; i < object.length; i++) {
            if (object.charAt(i) === ' ') {
                _x++
            } else if (object.charAt(i) !== '\n') {
                this.draw(object.charAt(i), x + _x, y + _y)
                _x++
            } else {
                _x = 0
                _y++
            }
        }
    },
    clear: function () {
        for (let y = 0; y < window.h; y += 1) {
            for (let x = 0; x < window.w; x += 1) {
                this.map.map[[x, y]] = { char: ' ' }
            }
        }
    },
    render: function () {
        let res = ''

        for (let y = 0; y < window.h; y += 1) {
            for (let x = 0; x < window.w; x += 1) {
                if (this.map.map[[x, y]])
                    res += this.map.map[[x, y]].char
                else
                    res += ' '
            }
            res += '\n'
        }

        asciicontainer.textContent = res

        this.clear()
    }
}
