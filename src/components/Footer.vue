<script setup>
import { Heart, Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-vue-next'

const currentYear = new Date().getFullYear()

const quickLinks = [
  { name: 'Início', href: '#inicio' },
  { name: 'Sobre Nós', href: '#sobre' },
  { name: 'Cultos', href: '#cultos' },
  { name: 'Ministérios', href: '#ministerios' },
  { name: 'Eventos', href: '#eventos' },
  { name: 'Contato', href: '#contato' }
]

const ministryLinks = [
  { name: 'Louvor', href: '#ministerios' },
  { name: 'Jovens', href: '#ministerios' },
  { name: 'Infantil', href: '#ministerios' },
  { name: 'Casais', href: '#ministerios' },
  { name: 'Ação Social', href: '#ministerios' }
]

const socialLinks = [
  { icon: Instagram, href: '#', name: 'Instagram' },
  { icon: Facebook, href: '#', name: 'Facebook' },
  { icon: Youtube, href: '#', name: 'YouTube' }
]
</script>

<template>
  <footer class="bg-primary-dark text-white">
    <!-- Main Footer -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Brand -->
        <div class="lg:col-span-1">
          <a href="#inicio" class="flex items-center gap-3 mb-6">
            <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
              <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none">
                <path 
                  d="M12 2L12 8M12 8L8 12M12 8L16 12M4 22H20M6 22V14L12 10L18 14V22" 
                  stroke="white" 
                  stroke-width="2" 
                  stroke-linecap="round" 
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>
              <span class="font-serif text-xl font-bold">Igreja em Brasília</span>
            </div>
          </a>
          <p class="text-white/70 leading-relaxed mb-6">
            Uma comunidade dedicada a proclamar o amor de Deus e transformar vidas através da fé, 
            esperança e amor no coração da capital federal.
          </p>
          <div class="flex gap-3">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              :aria-label="social.name"
              class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300"
            >
              <component :is="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="font-serif text-lg font-bold mb-6">Links Rápidos</h3>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.name">
              <a 
                :href="link.href"
                class="text-white/70 hover:text-secondary transition-colors duration-300 flex items-center gap-2"
              >
                <span class="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Ministries -->
        <div>
          <h3 class="font-serif text-lg font-bold mb-6">Ministérios</h3>
          <ul class="space-y-3">
            <li v-for="link in ministryLinks" :key="link.name">
              <a 
                :href="link.href"
                class="text-white/70 hover:text-secondary transition-colors duration-300 flex items-center gap-2"
              >
                <span class="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="font-serif text-lg font-bold mb-6">Contato</h3>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <MapPin class="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
              <span class="text-white/70 text-sm">
                SGAS 914, Conjunto A, Lote 62<br />
                Asa Sul, Brasília - DF
              </span>
            </li>
            <li class="flex items-center gap-3">
              <Phone class="w-5 h-5 text-secondary" />
              <span class="text-white/70 text-sm">(61) 3345-6789</span>
            </li>
            <li class="flex items-center gap-3">
              <Mail class="w-5 h-5 text-secondary" />
              <span class="text-white/70 text-sm">contato@igrejabrasilia.org.br</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Newsletter -->
    <div class="border-t border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 class="font-serif text-lg font-bold mb-1">Receba nossas novidades</h3>
            <p class="text-white/60 text-sm">Cadastre-se para receber informações sobre eventos e cultos.</p>
          </div>
          <form @submit.prevent class="flex w-full md:w-auto gap-3">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              class="flex-1 md:w-72 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <button
              type="submit"
              class="bg-secondary text-white px-6 py-3 rounded-xl font-semibold hover:bg-secondary-light transition-colors duration-300 whitespace-nowrap"
            >
              Inscrever-se
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>
            {{ currentYear }} Igreja em Brasília. Todos os direitos reservados.
          </p>
          <p class="flex items-center gap-1">
            Feito com <Heart class="w-4 h-4 text-secondary fill-secondary" /> para a glória de Deus
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
