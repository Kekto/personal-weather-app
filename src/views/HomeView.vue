<template>
  <div class="home">
    <ClockComponent/>
    <h2>Hello! Here is the weather for today:</h2>
    <div>
      Poland, Lublin, {{this.getCurrentWeather.latitude }} , {{ this.getCurrentWeather.longitude }}
      <div>
        Temperature: {{ this.getCurrentWeather.current_weather?.temperature }}°C
      </div>
      <div>
        Weather Code: {{ this.getCurrentWeather.current_weather?.weathercode }}
      </div>
      <div>
        Wind Speed: {{ this.getCurrentWeather.current_weather?.windspeed }}
      </div>
      <div>
        Time: {{ this.getCurrentWeather.current_weather?.time }}
      </div>

    </div>
  </div>
</template>

<script>
import ClockComponent from '@/components/ClockComponent.vue';
import { useWeatherStore } from '@/pinia/weather';

export default {
  name: 'HomeView',
  components: {
    ClockComponent
  },
  setup() {
    const weatherStore = useWeatherStore();
    return { weatherStore }
  },
  data() {
    return {
      currentWeather: [],
    }
  },
  mounted() {
    this.fetchCurrentWeather();
  },
  computed:{
    getCurrentWeather(){
      return this.weatherStore.getCurrentWeather;
    }
  },
  methods: {
    fetchCurrentWeather(){
      this.weatherStore.fetchCurrentWeather();
    },
  },
}
</script>
