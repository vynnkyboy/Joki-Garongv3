<template>
  <footer class="pixel-border-thick bg-lime-200 mt-8 p-5 md:p-6 scanlines">
    <div class="container mx-auto grid md:grid-cols-3 gap-6">
      <div>
        <h3 class="retro-text text-lg font-bold mb-2">JOKI.GARONG</h3>
        <p class="retro-text text-xs">{{ t('footer-desc') }}</p>
      </div>
      <div>
        <h3 class="retro-text text-base font-bold mb-2">{{ t('footer-links-title') }}</h3>
        <ul class="retro-text text-xs space-y-1">
          <li><a href="#">HOME</a></li>
          <li><a href="#services">{{ t('nav-services') }}</a></li>
          <li><a href="#testimonials">{{ t('nav-contact') }}</a></li>
        </ul>
      </div>
      <div>
        <h3 class="retro-text text-base font-bold mb-2">{{ t('footer-contact-title') }}</h3>
        <p class="retro-text text-xs">EMAIL: jokigarong12@mail.com</p>
        <p class="retro-text text-xs">TELEPON: +6282190520365</p>
        <div class="flex gap-2 mt-2">
          <span class="pixel-border bg-white w-8 h-8 flex items-center justify-center retro-text text-xs cursor-pointer hover:bg-gray-100">IG</span>
          <span class="pixel-border bg-white w-8 h-8 flex items-center justify-center retro-text text-xs cursor-pointer hover:bg-gray-100">GH</span>
          <span class="pixel-border bg-white w-8 h-8 flex items-center justify-center retro-text text-xs cursor-pointer hover:bg-gray-100">FB</span>
        </div>
      </div>
    </div>
    
    <!-- Smartlink Banner di Footer -->
    <div class="mt-6 pt-4 border-t-2 border-black">
      <div class="text-center">
        <a :href="smartlinkUrl" target="_blank" class="pixel-border bg-yellow-300 px-4 py-2 inline-block retro-text text-xs hover:bg-yellow-400 transition">
          🔥 Check Out Our Partners 🔥
        </a>
      </div>
    </div>
    
    <div class="mt-4 pt-2 text-center retro-text text-[9px] md:text-xs">
      © {{ currentYear }} JOKI GARONG. ALL RIGHTS RESERVED.
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()
const currentYear = ref(new Date().getFullYear())
const smartlinkUrl = ref('https://www.profitablecpmratenetwork.com/iqei5thtf2?key=756b8249bbcc7a23b60e9b0f836f6478')
</script>