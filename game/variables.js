const sounds = {}

export default {
  height: 768,
  width: 1024,
  loadingProgress: 0,
  playing: false,
  phaserContext: null,
  sound: {
    start (id, options) {
      if (!sounds[id]) sounds[id] = $world.phaserContext.sound.add(id, options)
      sounds[id].play()
    },
    stop (id) {
      sounds[id]?.stop()
    }
  }
}
