<template>
  <section id="testimonials">
    <div class="text-center mb-6">
      <h2 class="text-2xl md:text-4xl font-black pixel-border bg-white inline-block px-5 py-2 pixel-shadow retro-title">{{ t('testimonials-title') }}</h2>
    </div>
    <div class="grid md:grid-cols-3 gap-5">
      <div v-for="(testimonial, idx) in testimonials" :key="idx" class="pixel-border p-4 pixel-shadow" :class="testimonial.bgClass">
        <div class="flex items-center gap-3 mb-3">
          <div class="pixel-border rounded-full flex items-center justify-center retro-text w-12 h-12" :class="testimonial.avatarClass">
            {{ testimonial.emoji }}
          </div>
          <div>
            <h3 class="font-bold retro-text text-sm">{{ testimonial.name }}</h3>
            <p class="text-xs">{{ t(testimonial.jobKey) }}</p>
          </div>
        </div>
        <p class="italic text-sm">"{{ t(testimonial.textKey) }}"</p>
      </div>
    </div>
    <p class="text-[9px] md:text-[10px] retro-text mt-3 text-center" v-html="t('testimonials-note')"></p>
  </section>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const testimonials = [
  {
    name: 'JHO KO WOIEE',
    emoji: ':)',
    bgClass: 'bg-amber-100',
    avatarClass: 'bg-red-300',
    jobKey: 'testimonial1-job',
    textKey: 'testimonial1-text'
  },
  {
    name: 'SARI ROWTEA',
    emoji: ';)',
    bgClass: 'bg-green-100',
    avatarClass: 'bg-blue-300',
    jobKey: 'testimonial2-job',
    textKey: 'testimonial2-text'
  },
  {
    name: 'BUDIONO SIREGAR',
    emoji: ':D',
    bgClass: 'bg-purple-100',
    avatarClass: 'bg-pink-300',
    jobKey: 'testimonial3-job',
    textKey: 'testimonial3-text'
  }
]
</script>