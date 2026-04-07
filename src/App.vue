<template>
  <div class="min-h-screen bg-retro-pattern">
    <Header />
    <main class="container mx-auto px-4 py-6 md:py-10 space-y-12 md:space-y-16">
      <Hero />
      <Services />
      <Testimonials />
      <CTA />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Services from './components/Services.vue'
import Testimonials from './components/Testimonials.vue'
import CTA from './components/CTA.vue'
import Footer from './components/Footer.vue'
</script>