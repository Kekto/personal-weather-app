<template>
  <div class="home">
    <ClockComponent/>
    <h2>Hello! Here is the weather for today:</h2>
    <WeatherCardsComponent/>
  </div>
</template>

<script>
import ClockComponent from '@/components/ClockComponent.vue';
import WeatherCardsComponent from '@/components/WeatherCardsComponent.vue';

export default {
  name: 'HomeView',
  components: {
    ClockComponent,
    WeatherCardsComponent
  },
  data() {
    return {
    }
  },
}
</script>
