<template>
  <div class="ad-fallback">
    <iframe 
      :src="iframeUrl"
      :width="width"
      :height="height"
      frameborder="0"
      scrolling="no"
      marginwidth="0"
      marginheight="0"
      class="mx-auto"
    ></iframe>
  </div>
</template>

<script setup>
defineProps({
  iframeUrl: {
    type: String,
    required: true
  },
  width: {
    type: [String, Number],
    default: '100%'
  },
  height: {
    type: [String, Number],
    default: '250'
  }
})
</script>