<template>
  <v-app>
      <FancyCard/>
      <router-view/>
  </v-app>
</template>

<script>
import FancyCard from '@/components/FancyCard'

export default {
  name: 'App',

  components: {
    FancyCard,
  },

  data: () => ({
    //
  }),
};
</script>
