<template>
  <div class="adsterra-native-container">
    <div :id="containerId"></div>
    <div v-if="debug" class="text-xs text-gray-500 mt-1">
      Status: {{ status }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  containerId: {
    type: String,
    default: 'container-e4dbd67f8863b6a73d9edbe6ae7facee'
  },
  debug: {
    type: Boolean,
    default: false
  }
})

const status = ref('Loading...')

onMounted(() => {
  status.value = 'Script loading...'
  
  // Check if container exists
  const container = document.getElementById(props.containerId)
  if (!container) {
    status.value = 'Container not found!'
    console.error('Ad container not found:', props.containerId)
    return
  }
  
  // Load script
  const script = document.createElement('script')
  script.src = 'https://pl29085675.profitablecpmratenetwork.com/e4dbd67f8863b6a73d9edbe6ae7facee/invoke.js'
  script.async = true
  script.setAttribute('data-cfasync', 'false')
  
  script.onload = () => {
    status.value = 'Ad loaded successfully'
    console.log('Adsterra native ad loaded')
  }
  
  script.onerror = (err) => {
    status.value = 'Failed to load ad'
    console.error('Adsterra load error:', err)
  }
  
  document.body.appendChild(script)
})
</script>