<template>
  <div class="centered">
    <template v-if="$world.loadingProgress !== 1">
      Loading stuff...
      <br/>
      {{ $world.loadingProgress * 100 }}%
    </template>
    <view-link v-else to="menu">
      Click to start
    </view-link>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  require('../utils/game')
})
</script>
