<script setup>
import { ref, onMounted } from 'vue'
import { Play, Calendar, MapPin, Clock } from 'lucide-vue-next'

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <section id="inicio" class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop"
        alt="Igreja"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 hero-overlay"></div>
    </div>

    <!-- Decorative Elements -->
    <div class="absolute top-20 right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
    <div class="absolute bottom-20 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div 
          :class="[
            'text-white transition-all duration-1000 delay-200',
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          ]"
        >
          <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span class="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
            <span class="text-sm font-medium text-white/90">Bem-vindo à nossa comunidade</span>
          </div>

          <h1 class="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Igreja em
            <span class="block text-secondary">Brasília</span>
          </h1>

          <p class="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
            Uma comunidade de fé, amor e esperança no coração da capital federal. 
            Venha fazer parte desta família e transforme sua vida através da Palavra.
          </p>

          <div class="flex flex-col sm:flex-row gap-4">
            <a href="#cultos" class="btn-primary inline-flex items-center justify-center gap-2">
              Nossos Cultos
              <Calendar class="w-5 h-5" />
            </a>
            <a href="#sobre" class="btn-outline inline-flex items-center justify-center gap-2">
              Conheça-nos
              <Play class="w-5 h-5" />
            </a>
          </div>

          <!-- Quick Info -->
          <div class="mt-12 grid grid-cols-2 gap-6">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <MapPin class="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p class="text-white/60 text-sm">Localização</p>
                <p class="text-white font-medium">Asa Sul, Brasília</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Clock class="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p class="text-white/60 text-sm">Próximo Culto</p>
                <p class="text-white font-medium">Domingo, 10h</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Content - Stats Card -->
        <div 
          :class="[
            'hidden lg:block transition-all duration-1000 delay-500',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
        >
          <div class="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <h3 class="font-serif text-2xl text-white mb-6">Nossa Comunidade</h3>
            
            <div class="grid grid-cols-2 gap-6">
              <div class="text-center p-6 bg-white/10 rounded-2xl">
                <span class="block font-serif text-4xl font-bold text-secondary mb-2">25+</span>
                <span class="text-white/70 text-sm">Anos de história</span>
              </div>
              <div class="text-center p-6 bg-white/10 rounded-2xl">
                <span class="block font-serif text-4xl font-bold text-secondary mb-2">500+</span>
                <span class="text-white/70 text-sm">Membros ativos</span>
              </div>
              <div class="text-center p-6 bg-white/10 rounded-2xl">
                <span class="block font-serif text-4xl font-bold text-secondary mb-2">12</span>
                <span class="text-white/70 text-sm">Ministérios</span>
              </div>
              <div class="text-center p-6 bg-white/10 rounded-2xl">
                <span class="block font-serif text-4xl font-bold text-secondary mb-2">50+</span>
                <span class="text-white/70 text-sm">Projetos sociais</span>
              </div>
            </div>

            <div class="mt-6 pt-6 border-t border-white/20">
              <p class="text-white/80 text-center italic font-serif">
                "Porque onde estiverem dois ou três reunidos em meu nome, ali estou no meio deles."
              </p>
              <p class="text-secondary text-center text-sm mt-2">Mateus 18:20</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <div class="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
        <div class="w-1.5 h-3 bg-white/70 rounded-full animate-pulse"></div>
      </div>
    </div>
  </section>
</template>
