<template>
    <div>
      <MainSection 
        :type="1"
        title="Lamborghini VENATUS 2020"
      />
      <LatesModels />
      <CardSection :type="1" />
  
    </div>
  </template>
  
  <script>
  import MainSection from '@/components/MainSection.vue';
  import CardSection from '@/components/CardSection.vue';
  import LatesModels from '@/components/Lamborghini/LatesModel.vue';
  export default {
    name: 'Lamborghini',
    components: {
      MainSection,
      LatesModels,
      CardSection
    },
  }
  </script>
  