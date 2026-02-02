<script setup>
import { ref } from 'vue'
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, Youtube } from 'lucide-vue-next'

const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

// Número do WhatsApp da igreja (com código do país e DDD)
const WHATSAPP_NUMBER = '5586999108399' // Substitua pelo número real

const subjectLabels = {
  visita: 'Quero visitar a igreja',
  oracao: 'Pedido de oração',
  ministerio: 'Participar de ministério',
  evento: 'Informações sobre eventos',
  outro: 'Outro assunto'
}

const handleSubmit = () => {
  // Formatar a mensagem pré-montada
  const mensagem = `*Formulário de Contato*

  *Nome:* ${form.value.name}
  *E-mail:* ${form.value.email}
  *Telefone:* ${form.value.phone}
  *Assunto:* ${subjectLabels[form.value.subject] || form.value.subject}

  *Mensagem:*
  ${form.value.message}`

  // Codificar a mensagem para URL
  const mensagemCodificada = encodeURIComponent(mensagem)

  // Redirecionar para WhatsApp
  const urlWhatsApp = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensagemCodificada}`
  window.open(urlWhatsApp, '_blank')

  // Limpar o formulário
  form.value = { name: '', email: '', phone: '', subject: '', message: '' }
}

const contactInfo = [
  {
    icon: MapPin,
    title: 'Endereço',
    details: ['SGAS 914, Conjunto A, Lote 62', 'Asa Sul, Brasília - DF', 'CEP: 70390-140']
  },
  {
    icon: Phone,
    title: 'Telefone',
    details: ['(61) 3345-6789', '(61) 99876-5432']
  },
  {
    icon: Mail,
    title: 'E-mail',
    details: ['contato@igrejabrasilia.org.br', 'secretaria@igrejabrasilia.org.br']
  },
]

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/igrejaembrasilia/', name: 'Instagram' },
  { icon: Youtube, href: 'https://www.youtube.com/@IgrejaemBrasilia1', name: 'YouTube' }
]
</script>

<template>
  <section id="contato" class="section-padding bg-primary relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Header -->
      <div class="text-center mb-16 reveal">
        <div class="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
          <span class="w-2 h-2 bg-secondary rounded-full"></span>
          <span class="text-sm font-medium text-white/90">Contato</span>
        </div>
        <h2 class="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
          Entre em
          <span class="text-secondary">contato</span>
        </h2>
        <p class="text-white/70 text-lg max-w-2xl mx-auto">
          Entre em contato conosco e teremos prazer em atendê-lo.
        </p>
      </div>

      <div class="grid lg:grid-cols-5 gap-12">
        <!-- Contact Info -->
        <div class="lg:col-span-2 reveal">
          <div class="space-y-6">
            <div
              v-for="info in contactInfo"
              :key="info.title"
              class="flex gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/15 transition-colors duration-300"
            >
              <div class="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                <component :is="info.icon" class="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 class="font-semibold text-white mb-1">{{ info.title }}</h3>
                <p 
                  v-for="detail in info.details" 
                  :key="detail" 
                  class="text-white/70 text-sm"
                >
                  {{ detail }}
                </p>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
            <h3 class="font-semibold text-white mb-4">Siga-nos nas redes sociais</h3>
            <div class="flex gap-4">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.href"
                :aria-label="social.name"
                class="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-secondary hover:scale-110 transition-all duration-300"
              >
                <component :is="social.icon" class="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="lg:col-span-3 reveal">
          <form @submit.prevent="handleSubmit" class="bg-white rounded-3xl p-8 shadow-2xl">
            <h3 class="font-serif text-2xl font-bold text-primary-dark mb-6">
              Envie sua mensagem
            </h3>

            <div class="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label class="block text-sm font-medium text-earth mb-2">Nome Completo</label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  placeholder="Seu nome"
                  class="w-full px-4 py-3 border border-cream-dark rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-earth mb-2">E-mail</label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="seu@email.com"
                  class="w-full px-4 py-3 border border-cream-dark rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300"
                />
              </div>
            </div>

            <div class="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label class="block text-sm font-medium text-earth mb-2">Telefone</label>
                <input
                  v-model="form.phone"
                  type="tel"
                  placeholder="(61) 99999-9999"
                  class="w-full px-4 py-3 border border-cream-dark rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-earth mb-2">Assunto</label>
                <select
                  v-model="form.subject"
                  required
                  class="w-full px-4 py-3 border border-cream-dark rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300 bg-white"
                >
                  <option value="" disabled>Selecione um assunto</option>
                  <option value="visita">Quero visitar a igreja</option>
                  <option value="oracao">Pedido de oração</option>
                  <option value="ministerio">Participar de ministério</option>
                  <option value="evento">Informações sobre eventos</option>
                  <option value="outro">Outro assunto</option>
                </select>
              </div>
            </div>

            <div class="mb-6">
              <label class="block text-sm font-medium text-earth mb-2">Mensagem</label>
              <textarea
                v-model="form.message"
                required
                rows="5"
                placeholder="Escreva sua mensagem aqui..."
                class="w-full px-4 py-3 border border-cream-dark rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full bg-primary text-white py-4 rounded-xl font-semibold hover:bg-primary-dark transition-colors duration-300 flex items-center justify-center gap-2 hover:shadow-lg"
            >
              Enviar Mensagem
              <Send class="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>

      <!-- Map -->
      <div class="mt-16 reveal">
        <div class="bg-white/10 backdrop-blur-sm rounded-3xl p-4 overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d980.9143384185865!2d-47.89477927130885!3d-15.820681075581943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a25420578aff3%3A0xb942dcba673ca07a!2sIgreja!5e0!3m2!1sen!2sbr!4v1769911652778!5m2!1sen!2sbr"
            width="100%"
            height="400"
            style="border:0; border-radius: 1rem;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Localização da Igreja em Brasília"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>
