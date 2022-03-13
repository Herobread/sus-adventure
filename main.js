import { renderer } from './renderer.js'
import { art } from './art.js'
import { center } from './util.js'
import { mainMenu } from './pages/main.js'
import { game } from './pages/game.js'
import { settings } from './pages/settings.js'
import { info } from './pages/info.js'

const container = document.getElementById('container')
const asciicontainer = document.getElementById('asciicontainer')

window.asciiScreen = asciicontainer

let inputCooldown = 0

window.pressedKeys = {
    'w': null,
    'a': null,
    's': null,
    'd': null,
    ' ': null,
    'ArrowUp': null,
    'ArrowDown': null,
    'ArrowRight': null,
    'ArrowLeft': null,
}

window.onload = function () {
    resizer()

    window.addEventListener('resize', resizer, false)

    function resizer() {
        asciicontainer.style.width = window.innerWidth - 1 + 'px'
        asciicontainer.style.height = window.innerHeight - 1 + 'px'

        window.w = Math.floor(window.innerWidth / (window.fsize * 0.66))
        window.h = Math.floor(window.innerHeight / (window.fsize * 1.22)) + 1
    }

    window.page = 'mainMenu'
    // window.page = 'game'

    window.onkeyup = function (e) {
        window.pressedKeys[e.key] = false
    }
    window.onkeydown = function (e) {
        // console.log(e.key)
        window.pressedKeys[e.key] = true
    }

    updateFps(10)
}

let interval = setInterval(main, 1000 / 1000)

export function updateFps(fps) {
    clearInterval(interval)
    interval = setInterval(main, 1000 / fps)
}

function main() {
    if (window.page === 'mainMenu') {
        updateFps(10)
        mainMenu()
    } else if (window.page === 'game') {
        updateFps(60)
        game()
    } else if (window.page === 'settings') {
        updateFps(12)
        settings()
    } else if (window.page === 'info') {
        updateFps(12)
        info()
    }

    renderer.render()
}