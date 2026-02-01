<script setup>
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-vue-next'

const events = [
  {
    title: 'Conferência de Mulheres 2026',
    date: '15-16 Fev',
    time: '19:00',
    location: 'Auditório Principal',
    description: 'Dois dias de ministração, louvor e comunhão para todas as mulheres.',
    image: 'https://images.unsplash.com/photo-1609234656388-0ff363383899?q=80&w=2071&auto=format&fit=crop',
    category: 'Conferência',
    featured: true
  },
  {
    title: 'Retiro de Jovens',
    date: '22-24 Mar',
    time: '08:00',
    location: 'Acampamento Vale da Bênção',
    description: 'Final de semana especial para jovens com muita aventura e palavra.',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop',
    category: 'Retiro',
    featured: false
  },
  {
    title: 'Workshop de Louvor',
    date: '08 Abr',
    time: '14:00',
    location: 'Sala de Música',
    description: 'Capacitação para músicos e cantores do ministério de louvor.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop',
    category: 'Workshop',
    featured: false
  }
]
</script>

<template>
  <section id="eventos" class="section-padding bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="flex flex-col md:flex-row md:items-end md:justify-between mb-16 reveal">
        <div>
          <div class="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <span class="w-2 h-2 bg-primary rounded-full"></span>
            <span class="text-sm font-medium text-primary">Eventos</span>
          </div>
          <h2 class="font-serif text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Próximos
            <span class="text-secondary">eventos</span>
          </h2>
          <p class="text-earth text-lg max-w-xl">
            Participe dos nossos eventos especiais e fortaleça sua fé em comunidade.
          </p>
        </div>
        <a 
          href="#" 
          class="mt-6 md:mt-0 inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors duration-300"
        >
          Ver todos os eventos
          <ArrowRight class="w-5 h-5" />
        </a>
      </div>

      <!-- Events Grid -->
      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Featured Event -->
        <div 
          v-if="events[0]"
          class="lg:col-span-2 lg:row-span-2 reveal group"
        >
          <div class="relative h-full bg-primary rounded-3xl overflow-hidden card-hover">
            <img 
              :src="events[0].image" 
              :alt="events[0].title"
              class="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
            />
            <div class="relative z-10 p-8 md:p-12 h-full flex flex-col justify-end min-h-[400px] lg:min-h-full">
              <span class="inline-block bg-secondary text-white text-sm font-semibold px-4 py-1 rounded-full mb-4 w-fit">
                {{ events[0].category }}
              </span>
              <h3 class="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
                {{ events[0].title }}
              </h3>
              <p class="text-white/80 mb-6 max-w-lg">
                {{ events[0].description }}
              </p>
              <div class="flex flex-wrap items-center gap-6 text-white/70">
                <div class="flex items-center gap-2">
                  <Calendar class="w-5 h-5" />
                  <span>{{ events[0].date }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <Clock class="w-5 h-5" />
                  <span>{{ events[0].time }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <MapPin class="w-5 h-5" />
                  <span>{{ events[0].location }}</span>
                </div>
              </div>
              <button class="mt-8 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-cream transition-colors duration-300 w-fit flex items-center gap-2 group-hover:shadow-lg">
                Inscreva-se
                <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        <!-- Other Events -->
        <div 
          v-for="(event, index) in events.slice(1)" 
          :key="index"
          class="reveal group"
        >
          <div class="bg-cream rounded-3xl overflow-hidden card-hover h-full">
            <div class="relative h-48 overflow-hidden">
              <img 
                :src="event.image" 
                :alt="event.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <span class="absolute top-4 left-4 bg-primary text-white text-sm font-semibold px-4 py-1 rounded-full">
                {{ event.category }}
              </span>
            </div>
            <div class="p-6">
              <h3 class="font-serif text-xl font-bold text-primary-dark mb-3 group-hover:text-primary transition-colors duration-300">
                {{ event.title }}
              </h3>
              <p class="text-earth text-sm mb-4">
                {{ event.description }}
              </p>
              <div class="flex flex-wrap items-center gap-4 text-earth/70 text-sm">
                <div class="flex items-center gap-1">
                  <Calendar class="w-4 h-4" />
                  <span>{{ event.date }}</span>
                </div>
                <div class="flex items-center gap-1">
                  <Clock class="w-4 h-4" />
                  <span>{{ event.time }}</span>
                </div>
              </div>
              <button class="mt-6 w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors duration-300 flex items-center justify-center gap-2">
                Saiba Mais
                <ArrowRight class="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
