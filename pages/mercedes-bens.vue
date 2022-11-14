<template>
    <div>
      <MainSection 
        :type="3"
        title="Mercedes-AMG GT 63 S"
        text="You are deserved to the best"
      />
      <LatesModels />
      <CardSection :type="3" />
  
    </div>
  </template>
  
  <script>
  import MainSection from '@/components/MainSection.vue';
  import CardSection from '@/components/CardSection.vue';
  import LatesModels from '@/components/Mercedes/LatesModel.vue';
  export default {
    name: 'Mercedes-Bens',
    components: {
      MainSection,
      LatesModels,
      CardSection
    },
  }
  </script>
  