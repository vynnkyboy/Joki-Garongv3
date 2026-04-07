<template>
  <div class="adsterra-banner-container">
    <div :id="bannerId"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const props = defineProps({
  bannerId: {
    type: String,
    default: 'banner-160x600'
  }
})

onMounted(() => {
  // Inject Adsterra banner script
  const script = document.createElement('script')
  script.innerHTML = `
    atOptions = {
      'key' : '66e14b32d3206101aacf41466999c464',
      'format' : 'iframe',
      'height' : 600,
      'width' : 160,
      'params' : {}
    };
  `
  document.head.appendChild(script)
  
  const invokeScript = document.createElement('script')
  invokeScript.src = 'https://www.highperformanceformat.com/66e14b32d3206101aacf41466999c464/invoke.js'
  document.head.appendChild(invokeScript)
})
</script>