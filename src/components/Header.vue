<template>
  <header class="pixel-border-thick bg-amber-200 p-3 md:p-4 sticky top-0 z-30 scanlines">
    <div class="container mx-auto flex justify-between items-center">
      <div class="retro-text pixel-border bg-white px-3 py-1 md:px-4 md:py-2 pixel-shadow text-sm md:text-base flex items-center gap-2">
        <span>◉</span> JOKI.GARONG <span class="blink-cursor ml-1">_</span>
      </div>
      
      <div class="flex items-center gap-3">
        <button @click="toggleLanguage" class="pixel-border bg-white px-2 py-1 md:px-3 pixel-shadow font-bold retro-text text-xs hover:bg-gray-100 transition">
          {{ currentLang.toUpperCase() }}
        </button>
        
        <nav class="desktop-nav hidden md:block">
          <ul class="flex gap-2 md:gap-3">
            <li><a href="#" class="pixel-border bg-white px-2 py-1 md:px-3 pixel-shadow retro-text text-xs hover:bg-purple-200">{{ t('nav-home') }}</a></li>
            <li><a href="#services" class="pixel-border bg-white px-2 py-1 md:px-3 pixel-shadow retro-text text-xs hover:bg-green-200">{{ t('nav-services') }}</a></li>
            <li><a href="#testimonials" class="pixel-border bg-white px-2 py-1 md:px-3 pixel-shadow retro-text text-xs hover:bg-pink-200">{{ t('nav-contact') }}</a></li>
          </ul>
        </nav>
      </div>
      
      <div class="hamburger md:hidden flex flex-col gap-1 cursor-pointer" @click="toggleMobileMenu">
        <span class="w-7 h-0.5 bg-black"></span>
        <span class="w-7 h-0.5 bg-black"></span>
        <span class="w-7 h-0.5 bg-black"></span>
      </div>
    </div>
    
    <div v-show="mobileMenuOpen" class="mobile-menu mt-3 md:hidden">
      <ul class="flex flex-col gap-2">
        <li><a href="#" class="block pixel-border bg-white py-2 text-center pixel-shadow retro-text text-sm" @click="closeMenu">{{ t('nav-home') }}</a></li>
        <li><a href="#services" class="block pixel-border bg-white py-2 text-center pixel-shadow retro-text text-sm" @click="closeMenu">{{ t('nav-services') }}</a></li>
        <li><a href="#testimonials" class="block pixel-border bg-white py-2 text-center pixel-shadow retro-text text-sm" @click="closeMenu">{{ t('nav-contact') }}</a></li>
        <li><button @click="toggleLanguage" class="w-full pixel-border bg-white py-2 text-center pixel-shadow retro-text text-sm">{{ currentLang.toUpperCase() }}</button></li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { currentLang, t, toggleLanguage } = useLanguage()
const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<style scoped>
.blink-cursor {
  animation: blink 1.2s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.retro-text {
  font-family: 'Press Start 2P', monospace;
  letter-spacing: 0.02em;
}
</style>