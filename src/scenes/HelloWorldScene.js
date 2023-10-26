import Phaser from 'phaser'

export default class HelloWorldScene extends Phaser.Scene {
    constructor() {
        super('hello-world')
    }

    init(gameOptions) {
        this.gameOptions = gameOptions
    }

    preload() {
        this.load.setBaseURL('https://labs.phaser.io')

        this.load.image('sky', 'assets/skies/space3.png')
        this.load.image('logo', 'assets/sprites/phaser3-logo.png')
        this.load.image('red', 'assets/particles/red.png')
    }

    create() {
        const bg = this.add.image(400, 300, 'sky')
        bg.setInteractive()

        const particles = this.add.particles(0, 0, 'red', {
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD',
        })

        const logo = this.physics.add.image(400, 100, 'logo')

        logo.setVelocity(100, 200)
        logo.setBounce(1, 1)
        logo.setCollideWorldBounds(true)

        particles.startFollow(logo)

        this.input.on('pointerdown', this.nextScene, this)
    }

    nextScene() {
        this.scene.start('test-game', this.gameOptions)
    }
}
