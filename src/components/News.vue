<script setup>
import { Calendar, ArrowRight, User } from 'lucide-vue-next'

const news = [
  {
    title: 'Campanha de Arrecadação de Alimentos Bate Recorde',
    excerpt: 'Nossa comunidade se mobilizou e arrecadou mais de 5 toneladas de alimentos para famílias carentes.',
    date: '28 Jan 2026',
    author: 'Equipe de Comunicação',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop',
    category: 'Ação Social'
  },
  {
    title: 'Batismo nas Águas: 45 Novos Membros',
    excerpt: 'Celebramos o batismo de 45 pessoas que decidiram seguir a Jesus e fazer parte da nossa família.',
    date: '21 Jan 2026',
    author: 'Pr. Paulo Santos',
    image: 'https://images.unsplash.com/photo-1508963493744-76fce69379c0?q=80&w=2071&auto=format&fit=crop',
    category: 'Celebração'
  },
  {
    title: 'Inauguração da Nova Ala Infantil',
    excerpt: 'Um espaço totalmente renovado para receber nossas crianças com segurança e conforto.',
    date: '15 Jan 2026',
    author: 'Min. Infantil',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=2070&auto=format&fit=crop',
    category: 'Estrutura'
  },
  {
    title: 'Parceria com Abrigo Municipal Firmada',
    excerpt: 'Nossa igreja agora é parceira oficial do abrigo municipal, oferecendo apoio espiritual e material.',
    date: '10 Jan 2026',
    author: 'Min. Ação Social',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2074&auto=format&fit=crop',
    category: 'Parcerias'
  }
]
</script>

<template>
  <section id="noticias" class="section-padding bg-cream">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16 reveal">
        <div class="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
          <span class="w-2 h-2 bg-primary rounded-full"></span>
          <span class="text-sm font-medium text-primary">Notícias</span>
        </div>
        <h2 class="font-serif text-4xl md:text-5xl font-bold text-primary-dark mb-6">
          Fique por dentro das
          <span class="text-secondary">novidades</span>
        </h2>
        <p class="text-earth text-lg max-w-2xl mx-auto">
          Acompanhe as últimas notícias, eventos e acontecimentos da nossa comunidade.
        </p>
      </div>

      <!-- News Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <article
          v-for="(item, index) in news"
          :key="index"
          class="reveal group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 card-hover"
        >
          <!-- Image -->
          <div class="relative h-48 overflow-hidden">
            <img 
              :src="item.image" 
              :alt="item.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <span class="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
              {{ item.category }}
            </span>
          </div>

          <!-- Content -->
          <div class="p-6">
            <div class="flex items-center gap-4 text-earth/60 text-sm mb-3">
              <div class="flex items-center gap-1">
                <Calendar class="w-4 h-4" />
                <span>{{ item.date }}</span>
              </div>
            </div>

            <h3 class="font-serif text-lg font-bold text-primary-dark mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
              {{ item.title }}
            </h3>

            <p class="text-earth text-sm leading-relaxed mb-4 line-clamp-3">
              {{ item.excerpt }}
            </p>

            <div class="flex items-center justify-between pt-4 border-t border-cream">
              <div class="flex items-center gap-2 text-earth/60 text-sm">
                <User class="w-4 h-4" />
                <span>{{ item.author }}</span>
              </div>
              <button class="text-primary font-semibold text-sm flex items-center gap-1 hover:text-primary-light transition-colors duration-300 group-hover:gap-2">
                Ler mais
                <ArrowRight class="w-4 h-4" />
              </button>
            </div>
          </div>
        </article>
      </div>

      <!-- Load More -->
      <div class="mt-12 text-center reveal">
        <button class="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-dark transition-colors duration-300 hover:shadow-lg">
          Ver Todas as Notícias
          <ArrowRight class="w-5 h-5" />
        </button>
      </div>
    </div>
  </section>
</template>
