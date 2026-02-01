<script setup>
import { Clock, MapPin, Users, Music } from 'lucide-vue-next'

const services = [
  {
    day: 'Segunda-Feira',
    time: '19:00',
    title: 'Homens de Oração',
    description: 'Momento especial de adoração, louvor e ministração da Palavra para toda a família.',
    icon: Music,
    featured: true
  },
  {
    day: 'Terça-Feira',
    time: '20:00',
    title: 'Roda de Leitura',
    description: 'Culto de adoração e estudo bíblico aprofundado para encerrar a semana.',
    icon: Users,
    featured: false
  },
  {
    day: 'Sexta-Feira à Domingo',
    time: '19:30',
    title: 'Casa de Adolescentes',
    description: 'Reunião dedicada à intercessão, comunhão e busca pela presença de Deus.',
    icon: Clock,
    featured: false
  },
  {
    day: 'Sábado',
    time: '19:30',
    title: 'Palavra Ministerial',
    description: 'Encontro vibrante para jovens com louvor contemporâneo e mensagens relevantes.',
    icon: Users,
    featured: false
  },
  {
    day: 'Domingo',
    time: '09:30',
    title: 'Mesa do Senhor',
    description: 'Encontro vibrante para jovens com louvor contemporâneo e mensagens relevantes.',
    icon: Users,
    featured: false
  }
]
</script>

<template>
  <section id="cultos" class="section-padding bg-primary relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Header -->
      <div class="text-center mb-16 reveal">
        <div class="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
          <span class="w-2 h-2 bg-secondary rounded-full"></span>
          <span class="text-sm font-medium text-white/90">Nossos Cultos</span>
        </div>
        <h2 class="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
          Reuniões Semanais
        </h2>
        <p class="text-white/70 text-lg max-w-2xl mx-auto">
          Participe das nossss reuniões semanais e experimente os milagres da Palavra Profética em sua vida. </br>
          Todos são bem-vindos!
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(service, index) in services"
          :key="index"
          :class="[
            'reveal group relative rounded-3xl p-6 transition-all duration-500 card-hover',
            service.featured 
              ? 'bg-secondary text-white lg:scale-105 shadow-2xl' 
              : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20'
          ]"
        >
          <!-- Featured Badge -->
          <div 
            v-if="service.featured"
            class="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-primary text-xs font-bold px-4 py-1 rounded-full shadow-lg"
          >
            Destaque
          </div>

          <!-- Icon -->
          <div 
            :class="[
              'w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110',
              service.featured ? 'bg-white/20' : 'bg-white/10'
            ]"
          >
            <component :is="service.icon" class="w-7 h-7" />
          </div>

          <!-- Day & Time -->
          <div class="flex items-center gap-2 mb-3">
            <span 
              :class="[
                'text-sm font-semibold px-3 py-1 rounded-full',
                service.featured ? 'bg-white/20' : 'bg-primary-light/30'
              ]"
            >
              {{ service.day }}
            </span>
            <span class="flex items-center gap-1 text-sm opacity-80">
              <Clock class="w-4 h-4" />
              {{ service.time }}
            </span>
          </div>

          <!-- Title -->
          <h3 class="font-serif text-xl font-bold mb-3">{{ service.title }}</h3>

          <!-- Description -->
          <p :class="service.featured ? 'text-white/80' : 'text-white/70'" class="text-sm leading-relaxed">
            {{ service.description }}
          </p>

          <!-- Arrow -->
          <div class="mt-4 flex justify-end">
            <div 
              :class="[
                'w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-1',
                service.featured ? 'bg-white/20' : 'bg-white/10'
              ]"
            >
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Location Info -->
      <div class="mt-16 reveal">
        <div class="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div class="flex items-center gap-6">
            <div class="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center">
              <MapPin class="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 class="font-serif text-2xl font-bold text-white mb-2">Nossa Localização</h3>
              <p class="text-white/70">SGAS II SGAS 607 Conjunto C Módulo 48 - Asa Sul, Brasília - DF</p>
            </div>
          </div>
          <a 
            href="https://maps.app.goo.gl/kgkxRA3H2MnpoixX7" 
            target="_blank"
            class="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-cream transition-colors duration-300 flex items-center gap-2"
          >
            Ver no Mapa
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
