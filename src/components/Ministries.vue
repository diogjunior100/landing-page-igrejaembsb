<script setup>
import { Music, Users, Heart, Baby, Briefcase, BookOpen, Mic2, Handshake } from 'lucide-vue-next'

const ministries = [
  {
    icon: Music,
    name: 'Louvor',
    description: 'Conduzindo a igreja à presença de Deus através da música e adoração.',
    color: 'bg-primary'
  },
  {
    icon: Users,
    name: 'Jovens',
    description: 'Alcançando e discipulando a próxima geração com mensagens relevantes.',
    color: 'bg-secondary'
  },
  {
    icon: Baby,
    name: 'Infantil',
    description: 'Ensinando as crianças a amar a Deus de forma criativa e divertida.',
    color: 'bg-earth'
  },
  {
    icon: Heart,
    name: 'Casais',
    description: 'Fortalecendo famílias e casamentos através da Palavra de Deus.',
    color: 'bg-primary-light'
  },
  {
    icon: Briefcase,
    name: 'Homens',
    description: 'Formando homens de Deus para liderança na família e sociedade.',
    color: 'bg-earth-dark'
  },
  {
    icon: Heart,
    name: 'Mulheres',
    description: 'Capacitando mulheres a viverem seu chamado com excelência.',
    color: 'bg-secondary-dark'
  },
  {
    icon: BookOpen,
    name: 'Escola Bíblica',
    description: 'Estudo sistemático das Escrituras para crescimento espiritual.',
    color: 'bg-primary-dark'
  },
]
</script>

<template>
  <section id="ministerios" class="section-padding bg-cream-light">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16 reveal">
        <div class="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
          <span class="w-2 h-2 bg-primary rounded-full"></span>
          <span class="text-sm font-medium text-primary">Ministérios</span>
        </div>
        <h2 class="font-serif text-4xl md:text-5xl font-bold text-primary-dark mb-6">
          Encontre seu lugar de
          <span class="text-secondary">serviço</span>
        </h2>
        <p class="text-earth text-lg max-w-2xl mx-auto">
          Cada membro tem dons únicos para servir. Descubra onde você pode contribuir 
          para o crescimento do Reino de Deus.
        </p>
      </div>

      <!-- Ministries Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(ministry, index) in ministries"
          :key="index"
          class="reveal group bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 card-hover cursor-pointer"
        >
          <!-- Icon -->
          <div 
            :class="[
              'w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110',
              ministry.color
            ]"
          >
            <component :is="ministry.icon" class="w-7 h-7 text-white" />
          </div>

          <!-- Content -->
          <h3 class="font-serif text-xl font-bold text-primary-dark mb-2 group-hover:text-primary transition-colors duration-300">
            {{ ministry.name }}
          </h3>
          <p class="text-earth text-sm leading-relaxed mb-4">
            {{ ministry.description }}
          </p>

          <!-- Members Badge -->
          <div class="flex items-center justify-between">
            <div class="w-8 h-8 rounded-full bg-cream flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-16 text-center reveal">
        <div class="bg-white rounded-3xl p-8 md:p-12 shadow-lg inline-block">
          <h3 class="font-serif text-2xl font-bold text-primary-dark mb-4">
            Quer fazer parte de um ministério?
          </h3>
          <p class="text-earth mb-6 max-w-md mx-auto">
            Entre em contato conosco e descubra como você pode servir de acordo com seus dons e talentos.
          </p>
          <a href="#contato" class="btn-primary inline-block">
            Quero Participar
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
