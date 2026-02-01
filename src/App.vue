<script setup>
import { ref, onMounted } from 'vue'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Marquee from './components/Marquee.vue'
import About from './components/About.vue'
import Services from './components/Services.vue'
import Ministries from './components/Ministries.vue'
import Events from './components/Events.vue'
import News from './components/News.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

onMounted(() => {
  // Scroll reveal animation
  const revealElements = document.querySelectorAll('.reveal')
  
  const revealOnScroll = () => {
    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top
      const windowHeight = window.innerHeight
      
      if (elementTop < windowHeight - 100) {
        element.classList.add('active')
      }
    })
  }
  
  window.addEventListener('scroll', revealOnScroll)
  revealOnScroll() // Initial check
})
</script>

<template>
  <div class="min-h-screen bg-cream">
    <Header />
    <main>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Ministries />
      <Events />
      <News />
      <Contact />
    </main>
    <Footer />
  </div>
</template>
