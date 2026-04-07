<template>
  <section>
    <div class="pixel-border-thick bg-fuchsia-200 p-6 md:p-8 text-center pixel-shadow-lg">
      <h2 class="text-2xl md:text-4xl font-black retro-title mb-3">{{ t('cta-title') }}</h2>
      <p class="retro-text text-xs md:text-sm max-w-xl mx-auto mb-5">{{ t('cta-desc') }}</p>
      <a href="https://wa.me/6282190520365?text=Saya%20ingin%20order%20jasanya%20om" class="pixel-border-thick bg-white px-6 py-3 md:px-8 md:py-4 pixel-shadow font-bold retro-text text-sm inline-block hover:bg-pink-50 transition">
        {{ t('cta-button') }}
      </a>
    </div>
  </section>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()
</script>