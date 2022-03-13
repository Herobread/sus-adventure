import { renderer } from "../renderer.js"
import { art } from "../art.js"
import { center } from "../util.js"

let menu = 1

export function info() {
    renderer.drawObject(menu, 10, 11)

    logic()

    renderer.drawObject(art.logo.img, center(art.logo.width), parseInt(window.h / 8))

    let temp = 'version: aplha'
    renderer.drawObject(temp, center(temp.length), parseInt(window.h / 8) + 7)

    temp = 'Simple infinite game'
    renderer.drawObject(temp, center(temp.length), parseInt(window.h / 2) - 1)

    temp = 'Created by Herobred'
    renderer.drawObject(temp, center(temp.length), parseInt(window.h / 2))

    temp = 'If you want to donate:'
    renderer.drawObject(temp, center(temp.length), parseInt(window.h / 2) + 3)

    temp = '5375411406973391'
    renderer.drawObject(temp, center(temp.length), parseInt(window.h / 2) + 4)

    temp = 'Esc - exit'
    renderer.drawObject(temp, center(temp.length), parseInt(window.h - 2))
}

function logic() {
    if (window.pressedKeys['Escape']) {
        window.page = 'mainMenu'
    }
}