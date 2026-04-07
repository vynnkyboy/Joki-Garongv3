<template>
  <section>
    <div class="pixel-border-thick bg-blue-100 p-5 md:p-8 pixel-shadow-lg crt-effect">
      <div class="grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h1 class="text-3xl md:text-6xl font-black leading-tight retro-title glitch-text" :data-text="`WELCOME TO JOKI GARONG`">
            <span class="text-blue-700">WELCOME TO</span><br>
            <span class="text-purple-700">JOKI</span> <span class="text-pink-600">GARONG</span>
          </h1>
          <div class="mt-4 md:mt-6 retro-text text-xs md:text-sm leading-relaxed" v-html="t('hero-description')"></div>
          <div class="flex flex-col sm:flex-row gap-3 mt-6 md:mt-8">
            <a href="#services" class="pixel-border-thick bg-green-300 px-4 py-2 md:px-6 md:py-3 pixel-shadow font-bold text-center retro-text text-sm hover:bg-green-400 transition">{{ t('hero-portfolio') }}</a>
            <a href="https://wa.me/6282190520365?text=Saya%20ingin%20order%20jasanya%20om" class="pixel-border-thick bg-yellow-300 px-4 py-2 md:px-6 md:py-3 pixel-shadow font-bold text-center retro-text text-sm hover:bg-yellow-400 transition">{{ t('hero-contact') }}</a>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="pixel-border-thick bg-white p-3 pixel-shadow-lg max-w-sm pixel-grid-bg">
            <img 
              src="https://krnqkczrwoyhwezbldqv.supabase.co/storage/v1/object/public/Asset/pika.gif" 
              alt="pixel pika" 
              class="pixelated-img w-36 h-36 md:w-44 md:h-44 mx-auto object-contain"
              loading="lazy"
            />
            <p class="text-center retro-text text-[10px] md:text-xs mt-2 text-black" v-html="t('hero-image-text')"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()
</script>

<style scoped>
.retro-title {
  font-family: 'Rubik Mono One', monospace;
  letter-spacing: -0.02em;
}

.pixelated-img {
  image-rendering: crisp-edges;
  image-rendering: pixelated;
}
</style>