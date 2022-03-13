import { renderer } from "../renderer.js"
import { art } from "../art.js"
import { center } from "../util.js"

let menu = 1

export function mainMenu() {
    renderer.drawObject(menu, 10, 11)

    logic()

    renderer.drawObject(art.logo.img, center(art.logo.width), parseInt(window.h / 8))

    let temp = 'Play'
    if (menu === 1)
        temp = '> Play <'

    renderer.drawObject(temp, center(temp.length), parseInt(window.h / 2 - 2))


    temp = 'Amongus'
    if (menu === 2)
        temp = '> Amongus <'
    renderer.drawObject(temp, center(temp.length), parseInt(window.h / 2))

    temp = 'Info'
    if (menu === 3)
        temp = '> Info <'
    renderer.drawObject(temp, center(temp.length), parseInt(window.h / 2 + 2))

    temp = 'WASD - move, enter/space - confirm '
    renderer.drawObject(temp, center(temp.length), parseInt(window.h - 2))

    // renderer.drawObject(art.planets[5].img, 10, 10)
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
            window.page = 'game'
        }
        if (menu === 2) {
            window.page = 'settings'
        }
        if (menu === 3) {
            window.page = 'info'
        }
    }
}