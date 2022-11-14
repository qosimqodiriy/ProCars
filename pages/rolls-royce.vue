<template>
    <div>
      <MainSection 
        :type="4"
        title="Rolls Royce Cullinan"
      />
      <LatesModels />
      <CardSection :type="4" />
  
    </div>
  </template>
  
  <script>
  import MainSection from '@/components/MainSection.vue';
  import CardSection from '@/components/CardSection.vue';
  import LatesModels from '@/components/RollsRoyce/LatesModel.vue';
  export default {
    name: 'Rolls-Royce',
    components: {
      MainSection,
      LatesModels,
      CardSection
    },
  }
  </script>
  