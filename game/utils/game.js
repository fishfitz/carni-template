import Phaser from 'phaser'
import preload from './preload'

const game = new Phaser.Game({
  parent: null,
  backgroundColor: 0xffffff,
  width: $world.width,
  height: $world.height,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: true
    }
  },
  scene: {
    preload,

    init () {
      $world.phaserContext = this
    },

    create () {
      if (!$world.playing) {
        this.scene.stop()
        return
      }

      const star = this.physics.add.sprite(100, 450, 'star')
      star.setBounce(0.2)
      star.setCollideWorldBounds(true)

      const bomb = this.physics.add.sprite(200, 450, 'bomb')
      bomb.setBounce(0.2)
      bomb.setCollideWorldBounds(true)
    },

    update () {
      if (!$world.playing) this.scene.stop()

      const cursors = this.input.keyboard.createCursorKeys()

      if (cursors.left.isDown) {
        console.log('left')
      } else if (cursors.right.isDown) {
        console.log('right')
      }
    }
  }
})

export default game
