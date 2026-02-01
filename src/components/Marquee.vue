<script setup>
const items = [
  'Fé', 'Amor', 'Esperança', 'Comunhão', 'Adoração', 'Louvor', 'Graça', 'Paz', 
  'Família', 'União', 'Palavra', 'Oração'
]
</script>

<template>
  <div class="bg-primary py-4 overflow-hidden">
    <div class="flex animate-marquee">
      <div 
        v-for="(item, index) in [...items, ...items]" 
        :key="index"
        class="flex items-center gap-8 mx-8 whitespace-nowrap"
      >
        <span class="text-white font-serif text-lg md:text-xl tracking-wide">{{ item }}</span>
        <span class="text-secondary">✦</span>
      </div>
    </div>
  </div>
</template>
