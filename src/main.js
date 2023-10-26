import Phaser from 'phaser'

import HelloWorldScene from './scenes/HelloWorldScene'
import TestGame from './scenes/TestGame'

window.onload = () => {
    const gameOptions = {}

    const gameConfig = {
        type: Phaser.AUTO,
        parent: 'app',
        width: 800,
        height: 600,
        backgroundColor: 0xecf0f1,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 },
                debug: true,
            },
        },
        scene: [HelloWorldScene, TestGame],
    }

    const game = new Phaser.Game(gameConfig)
    // game.scene.start('hello-world')
    game.scene.start('hello-world', gameOptions)

    window.focus()
    resizeGame()
    window.addEventListener('resize', resizeGame)
}

const resizeGame = () => {
    const canvas = document.querySelector('canvas')
    const gameRatio = canvas.width / canvas.height

    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
    const windowRatio = windowWidth / windowHeight

    if (windowRatio < gameRatio) {
        canvas.style.width = windowWidth + 'px'
        canvas.style.height = windowWidth / gameRatio + 'px'
    } else {
        canvas.style.width = windowHeight * gameRatio + 'px'
        canvas.style.height = windowHeight + 'px'
    }
}
