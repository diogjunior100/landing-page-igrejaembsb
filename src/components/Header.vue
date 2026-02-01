<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X, ChevronDown } from 'lucide-vue-next'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const navLinks = [
  { name: 'Início', href: '#inicio' },
  { name: 'Sobre Nós', href: '#sobre' },
  { name: 'Cultos', href: '#cultos' },
  { name: 'Ministérios', href: '#ministerios' },
  { name: 'Eventos', href: '#eventos' },
  { name: 'Notícias', href: '#noticias' },
  { name: 'Contato', href: '#contato' },
]
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <a href="#inicio" class="flex items-center gap-3">
          <img 
            src="/logo-igreja.png" 
            alt="Logo Igreja em Brasília"
            class="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <span 
              :class="[
                'font-serif text-xl font-bold transition-colors duration-300',
                isScrolled ? 'text-primary' : 'text-white'
              ]"
            >
              Igreja em Brasília
            </span>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-1">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            :class="[
              'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-white/10',
              isScrolled 
                ? 'text-earth hover:text-primary hover:bg-primary/10' 
                : 'text-white/90 hover:text-white hover:bg-white/20'
            ]"
          >
            {{ link.name }}
          </a>
        </nav>

        <!-- CTA Button -->
        <div class="hidden lg:flex items-center gap-4">
          <a
            href="#contato"
            :class="[
              'px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:-translate-y-0.5',
              isScrolled 
                ? 'bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg' 
                : 'bg-white text-primary hover:bg-cream'
            ]"
          >
            Visite-nos
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMenu"
          class="lg:hidden p-2 rounded-lg transition-colors duration-300"
          :class="isScrolled ? 'text-primary' : 'text-white'"
        >
          <Menu v-if="!isMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isMenuOpen"
        class="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-cream-dark"
      >
        <nav class="max-w-7xl mx-auto px-4 py-6 space-y-2">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            @click="isMenuOpen = false"
            class="block px-4 py-3 rounded-xl text-earth hover:text-primary hover:bg-cream transition-colors duration-200"
          >
            {{ link.name }}
          </a>
          <a
            href="#contato"
            @click="isMenuOpen = false"
            class="block mt-4 px-4 py-3 bg-primary text-white text-center rounded-full font-semibold hover:bg-primary-dark transition-colors duration-200"
          >
            Visite-nos
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>
