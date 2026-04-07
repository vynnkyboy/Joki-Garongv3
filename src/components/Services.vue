<template>
  <section id="services">
    <div class="text-center mb-6">
      <h2 class="text-2xl md:text-4xl font-black pixel-border bg-white inline-block px-5 py-2 pixel-shadow retro-title">{{ t('services-title') }}</h2>
    </div>
    <div class="grid md:grid-cols-3 gap-5">
      <!-- Service Card 1 -->
      <div class="pixel-border bg-purple-100 p-5 pixel-shadow crt-effect hover-pixel-lift transition-all">
        <div class="flex items-center gap-3 mb-4">
          <div class="pixel-border bg-purple-300 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"><span class="retro-text text-sm">◉</span></div>
          <h3 class="retro-text text-lg md:text-xl font-bold">{{ t('service1-title') }}</h3>
        </div>
        <p class="text-sm md:text-base mb-3">{{ t('service1-desc') }}</p>
        <div class="mb-3">
          <p class="font-bold retro-text text-xs mb-2">{{ t('service1-lang-title') }}</p>
          <div class="flex flex-wrap gap-2">
            <div v-for="lang in programmingLangs" :key="lang.name" class="flex items-center gap-1 pixel-border bg-white px-2 py-1 pixel-shadow text-xs">
              <img :src="lang.icon" class="pixel-icon w-5 h-5" :alt="lang.name" loading="lazy">
              {{ lang.name }}
            </div>
          </div>
        </div>
        <div>
          <p class="font-bold retro-text text-xs mb-2">{{ t('service1-example-title') }}</p>
          <ul class="list-disc pl-5 text-xs md:text-sm space-y-0.5">
            <li v-for="example in examples" :key="example">{{ t(example) }}</li>
          </ul>
        </div>
      </div>

      <!-- Service Card 2 -->
      <div class="pixel-border bg-green-100 p-5 pixel-shadow crt-effect hover-pixel-lift">
        <div class="flex items-center gap-3 mb-4">
          <div class="pixel-border bg-green-300 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"><span class="retro-text text-sm">◼</span></div>
          <h3 class="retro-text text-lg md:text-xl font-bold">{{ t('service2-title') }}</h3>
        </div>
        <p class="text-sm mb-3">{{ t('service2-desc') }}</p>
        <div>
          <p class="font-bold retro-text text-xs mb-2">{{ t('service2-package-title') }}</p>
          <ul class="space-y-2">
            <li v-for="pkg in thesisPackages" :key="pkg" class="pixel-border bg-white px-3 py-2 pixel-shadow text-xs hover:bg-green-50 transition cursor-pointer">{{ t(pkg) }}</li>
          </ul>
        </div>
      </div>

      <!-- Service Card 3 -->
      <div class="pixel-border bg-yellow-100 p-5 pixel-shadow crt-effect hover-pixel-lift">
        <div class="flex items-center gap-3 mb-4">
          <div class="pixel-border bg-yellow-300 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"><span class="retro-text text-sm">★</span></div>
          <h3 class="retro-text text-lg md:text-xl font-bold">{{ t('service3-title') }}</h3>
        </div>
        <p class="text-sm mb-3">{{ t('service3-desc') }}</p>
        <div>
          <p class="font-bold retro-text text-xs mb-2">{{ t('service3-package-title') }}</p>
          <ul class="space-y-2">
            <li v-for="journal in journalPackages" :key="journal" class="pixel-border bg-white px-3 py-2 pixel-shadow text-xs hover:bg-yellow-50 transition cursor-pointer">{{ t(journal) }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const programmingLangs = [
  { name: 'Python', icon: 'https://krnqkczrwoyhwezbldqv.supabase.co/storage/v1/object/public/Asset/python.png' },
  { name: 'PHP', icon: 'https://krnqkczrwoyhwezbldqv.supabase.co/storage/v1/object/public/Asset/web.png' },
  { name: 'JavaScript', icon: 'https://krnqkczrwoyhwezbldqv.supabase.co/storage/v1/object/public/Asset/js.png' },
  { name: 'Java', icon: 'https://krnqkczrwoyhwezbldqv.supabase.co/storage/v1/object/public/Asset/java.png' },
  { name: 'Dart', icon: 'https://krnqkczrwoyhwezbldqv.supabase.co/storage/v1/object/public/Asset/icons8-dart-480.png' }
]

const examples = [
  'service1-example-ecommerce',
  'service1-example-company',
  'service1-example-inventory',
  'service1-example-sia',
  'service1-example-other'
]

const thesisPackages = [
  'service2-package-1',
  'service2-package-2',
  'service2-package-full'
]

const journalPackages = [
  'service3-package-national',
  'service3-package-international',
  'service3-package-sinta',
  'service3-package-scopus'
]
</script>

<style scoped>
.retro-text {
  font-family: 'Press Start 2P', monospace;
}
</style>