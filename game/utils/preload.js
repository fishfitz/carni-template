import starSprite from '../assets/sprites/star.png'
import bombSprite from '../assets/sprites/bomb.png'

import click from '../assets/sounds/click.mp3'
import birds from '../assets/sounds/birds.mp3'

export default function () {
  this.load.on('progress', (progress) => {
    $world.loadingProgress = progress
  })

  this.load.image('star', starSprite)
  this.load.image('bomb', bombSprite)

  this.load.audio('click', click)
  this.load.audio('birds', birds)
}
