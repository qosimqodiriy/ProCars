<template>
  <div>
    <MainSection />
    <ModelSection />
    <PartnersSection />

  </div>
</template>

<script>
import MainSection from '@/components/IndexPage/MainSection.vue';
import ModelSection from '@/components/IndexPage/ModelSection.vue';
import PartnersSection from '@/components/IndexPage/PartnersSection.vue';
export default {
  name: 'IndexPage',
  components: {
    MainSection,
    ModelSection,
    PartnersSection,
  }
}
</script>
