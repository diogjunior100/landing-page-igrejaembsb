<script setup>
import { Heart, Users, BookOpen, Star } from 'lucide-vue-next'

const values = [
  {
    icon: Heart,
    title: 'Amor ao Próximo',
    description: 'Praticamos o amor genuíno em todas as nossas relações e ações comunitárias.'
  },
  {
    icon: Users,
    title: 'Comunhão',
    description: 'Valorizamos a união e o companheirismo entre todos os membros da nossa família.'
  },
  {
    icon: BookOpen,
    title: 'Palavra de Deus',
    description: 'A Bíblia é nosso guia fundamental para vida, fé e prática cristã.'
  },
  {
    icon: Star,
    title: 'Excelência',
    description: 'Buscamos a excelência em tudo que fazemos para a glória de Deus.'
  }
]
</script>

<template>
  <section id="sobre" class="section-padding bg-cream">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left - Images -->
        <div class="reveal relative">
          <div class="relative z-10">
            <img
              src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070&auto=format&fit=crop"
              alt="Comunidade em oração"
              class="w-full h-96 object-cover rounded-3xl shadow-2xl"
            />
          </div>
          <div class="absolute -bottom-8 -right-8 w-64 h-64 z-20 hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop"
              alt="Louvor"
              class="w-full h-full object-cover rounded-2xl shadow-xl border-4 border-cream"
            />
          </div>
          <div class="absolute -top-4 -left-4 w-24 h-24 bg-secondary rounded-full flex items-center justify-center shadow-lg z-30">
            <span class="font-serif text-2xl font-bold text-white">25+</span>
          </div>
          <!-- Decorative -->
          <div class="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 rounded-3xl transform rotate-6"></div>
        </div>

        <!-- Right - Content -->
        <div class="reveal">
          <div class="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <span class="w-2 h-2 bg-primary rounded-full"></span>
            <span class="text-sm font-medium text-primary">Sobre Nós</span>
          </div>

          <h2 class="font-serif text-4xl md:text-5xl font-bold text-primary-dark mb-6 leading-tight">
            Uma Igreja com propósito no
            <span class="text-secondary">coração de Brasília</span>
          </h2>

          <p class="text-earth text-lg leading-relaxed mb-6">
            Há mais de 25 anos, a Igreja em Brasília tem sido um farol de esperança na capital federal. 
            Nossa missão é proclamar o Evangelho de Jesus Cristo, formar discípulos comprometidos e 
            servir a comunidade com amor e dedicação.
          </p>

          <p class="text-earth leading-relaxed mb-8">
            Somos uma família diversa, acolhedora e comprometida com os valores do Reino de Deus. 
            Aqui, cada pessoa é valorizada e encontra um lugar para crescer espiritualmente e servir.
          </p>

          <!-- Values Grid -->
          <div class="grid sm:grid-cols-2 gap-4">
            <div
              v-for="value in values"
              :key="value.title"
              class="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <component :is="value.icon" class="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 class="font-semibold text-primary-dark mb-1">{{ value.title }}</h3>
                <p class="text-earth text-sm">{{ value.description }}</p>
              </div>
            </div>
          </div>

          <a 
            href="#contato" 
            class="inline-flex items-center gap-2 mt-8 text-primary font-semibold hover:text-primary-light transition-colors duration-300"
          >
            Conheça nossa história completa
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
