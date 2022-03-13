import { renderer } from "../renderer.js"
import { art } from "../art.js"
import { center } from "../util.js"

let menu = 1

export function settings() {
    renderer.drawObject(menu, 10, 11)

    logic()

    renderer.drawObject(art.logo.img, center(art.logo.width), parseInt(window.h / 8))

    renderer.drawObject('Coming soon, esc - exit', center(8), parseInt(window.h / 2))
    renderer.drawObject(menu, center(1), parseInt(window.h / 2) + 1)
}

function logic() {
    if (window.pressedKeys['w'] && menu > 1) {
        menu -= 1
    }
    if (window.pressedKeys['s'] && menu < 3) {
        menu += 1
    }
    if (window.pressedKeys[' '] || window.pressedKeys['Enter']) {
        if (menu === 1) {
            window.page = 'settings'
        }
        if (menu === 2) {
            window.page = 'settings'
        }
        if (menu === 3) {
            window.page = 'settings'
        }
    }
    if (window.pressedKeys['Escape']) {
        window.page = 'mainMenu'
    }
}