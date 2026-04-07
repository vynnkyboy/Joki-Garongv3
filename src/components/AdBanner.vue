<template>
  <div class="ad-container" :class="containerClass">
    <div v-if="showLabel" class="text-center mb-2">
      <span class="retro-text text-[8px] bg-black text-white px-2 py-0.5">ADVERTISEMENT</span>
    </div>
    <div class="pixel-border bg-white p-1">
      <slot>
        <!-- Default ad content will be injected here -->
        <div :id="adId"></div>
      </slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  adId: {
    type: String,
    default: 'ad-container'
  },
  containerClass: {
    type: String,
    default: ''
  },
  showLabel: {
    type: Boolean,
    default: true
  }
})
</script>

<style scoped>
.retro-text {
  font-family: 'Press Start 2P', monospace;
}
</style>