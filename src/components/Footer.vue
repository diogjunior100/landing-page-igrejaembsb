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
]

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/igrejaembrasilia/', name: 'Instagram' },
  { icon: Youtube, href: 'https://www.youtube.com/@IgrejaemBrasilia1', name: 'YouTube' }
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
              <img 
                src="/logo-igreja.png" 
                alt="Logo Igreja em Brasília"
                class="w-12 h-12 rounded-full object-cover"
              />
            </div>
            <div>
              <span class="font-serif text-xl font-bold">Igreja em Brasília</span>
            </div>
          </a>
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

    <!-- Bottom Bar -->
    <div class="border-t border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>
            {{ currentYear }} Igreja em Brasília. Todos os direitos reservados.
          </p>
          <p class="flex items-center gap-1">
            Jesus Cristo é o Senhor !
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
