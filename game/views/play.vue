<template>
  <div class="centered">
    <div ref="parent"/>
    <view-link to="menu"> Back to menu </view-link>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

const parent = $ref()

let game
onMounted(() => {
  game = require('../utils/game').default
  parent.appendChild(game.canvas)

  $world.playing = true
  $world.phaserContext.scene.start()
})

onUnmounted(() => {
  $world.playing = false
})
</script>

<style scoped lang="scss">
  .dialog {
    display: inline-block;
  }
</style>
