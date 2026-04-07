<template>
  <div class="min-h-screen bg-retro-pattern">
    <!-- Social Bar - Top -->
    <div class="social-bar-container">
      <div id="social-bar-script">
        <script src="https://pl29085677.profitablecpmratenetwork.com/db/f8/0f/dbf80fb09758877704c539cc5f8653b6.js"></script>
      </div>
    </div>

    <Header />
    
    <div class="flex flex-col lg:flex-row gap-6 container mx-auto px-4 py-6 md:py-10">
      <!-- Left Sidebar - Banner 160x600 -->
      <aside class="lg:w-[160px] flex-shrink-0 hidden lg:block">
        <div class="sticky top-24">
          <div class="pixel-border bg-white p-1">
            <div id="banner-160x600">
              <script>
                atOptions = {
                  'key' : '66e14b32d3206101aacf41466999c464',
                  'format' : 'iframe',
                  'height' : 600,
                  'width' : 160,
                  'params' : {}
                };
              </script>
              <script src="https://www.highperformanceformat.com/66e14b32d3206101aacf41466999c464/invoke.js"></script>
            </div>
          </div>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 space-y-12 md:space-y-16">
        <Hero />
        <Services />
        <Testimonials />
        <CTA />
      </main>

      <!-- Right Sidebar - Native Banner -->
      <aside class="lg:w-[300px] flex-shrink-0">
        <div class="sticky top-24 space-y-6">
          <!-- Native Banner -->
          <div class="pixel-border bg-white p-3 pixel-shadow">
            <h3 class="retro-text text-xs mb-2 text-center">Sponsored</h3>
            <div id="container-e4dbd67f8863b6a73d9edbe6ae7facee"></div>
            <script async="async" data-cfasync="false" src="https://pl29085675.profitablecpmratenetwork.com/e4dbd67f8863b6a73d9edbe6ae7facee/invoke.js"></script>
          </div>

          <!-- Mobile Banner 160x600 (tampil di mobile) -->
          <div class="lg:hidden">
            <div class="pixel-border bg-white p-1">
              <div id="mobile-banner-160x600">
                <script>
                  atOptions = {
                    'key' : '66e14b32d3206101aacf41466999c464',
                    'format' : 'iframe',
                    'height' : 600,
                    'width' : 160,
                    'params' : {}
                  };
                </script>
                <script src="https://www.highperformanceformat.com/66e14b32d3206101aacf41466999c464/invoke.js"></script>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>

    <Footer />

    <!-- Smartlink Modal / Popup -->
    <div id="smartlink-modal" class="hidden fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
      <div class="relative bg-white pixel-border-thick p-6 max-w-md mx-4">
        <button @click="closeSmartlink" class="absolute top-2 right-2 pixel-border bg-red-500 text-white w-8 h-8 flex items-center justify-center hover:bg-red-600">✕</button>
        <h3 class="retro-text text-lg mb-4">Special Offer!</h3>
        <p class="mb-4 text-sm">Click below to get exclusive deals and bonuses!</p>
        <a :href="smartlinkUrl" target="_blank" class="pixel-border-thick bg-green-400 px-6 py-3 inline-block retro-text text-sm hover:bg-green-500 transition text-center w-full">
          Claim Now →
        </a>
        <button @click="closeSmartlink" class="mt-3 text-xs underline">Close</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Services from './components/Services.vue'
import Testimonials from './components/Testimonials.vue'
import CTA from './components/CTA.vue'
import Footer from './components/Footer.vue'

const smartlinkUrl = ref('https://www.profitablecpmratenetwork.com/iqei5thtf2?key=756b8249bbcc7a23b60e9b0f836f6478')
const showSmartlink = ref(false)

const closeSmartlink = () => {
  document.getElementById('smartlink-modal').classList.add('hidden')
  showSmartlink.value = false
}

// Show smartlink after 10 seconds
onMounted(() => {
  setTimeout(() => {
    if (!showSmartlink.value) {
      document.getElementById('smartlink-modal').classList.remove('hidden')
      showSmartlink.value = true
    }
  }, 10000)
})
</script>

<style scoped>
.retro-text {
  font-family: 'Press Start 2P', monospace;
}

.social-bar-container {
  position: relative;
  z-index: 40;
}
</style>