import Phaser from 'phaser'

export default class TestGame extends Phaser.Scene {
    constructor() {
        super('test-game')
    }

    init(gameOptions) {
        this.gameOptions = gameOptions
    }

    preload() {
        this.load.image('bg', '/assets/sprites/ocean-background.jpg')
    }

    create() {
        const bg = this.add.image(400, 300, 'bg')
    }
}
