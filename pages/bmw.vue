<template>
    <div>
      <MainSection 
        :type="2"
        title="BMW M8 Grand Coupe"
      />
      <LatesModels />
      <CardSection :type="2" />
  
    </div>
  </template>
  
  <script>
  import MainSection from '@/components/MainSection.vue';
  import CardSection from '@/components/CardSection.vue';
  import LatesModels from '@/components/BMW/LatesModel.vue';
  export default {
    name: 'BMW',
    components: {
      MainSection,
      LatesModels,
      CardSection,
    },
  }
  </script>
  