<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>
          <a class="cityName">Lublin</a>
          <a class="countryName">Poland</a>
        </span>
        <el-button class="button" text>Check 24/7</el-button>
      </div>
    </template>
    <div class="weather-info">
      <div class="weatherCode">
        Weather Code: {{ this.getCurrentWeather.current_weather?.weathercode }}
      </div>
      <div class="temperature">
        {{ this.getCurrentWeather.current_weather?.temperature }}°C
      </div>
      <div class="wind-info">
        <div>
          Wind Speed: {{ this.getCurrentWeather.current_weather?.windspeed }}
        </div>
        <div>
          Wind Direction: {{ this.getCurrentWeather.current_weather?.winddirection }}
        </div>
      </div>
    </div>
  </el-card>
</template>
  
<script>
import { useWeatherStore } from '@/pinia/weather';
export default {
  name: "WeatherCardComponent",
  data() {
    return {
        
    }
  },
  setup() {
    const weatherStore = useWeatherStore();
    return { weatherStore }
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
  
};
</script>
  
<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cityName{
  font-weight: bold;
  font-size: 20px;
}

.countryName{
  font-size: 15px;
  margin-left: 10px;
  opacity: 70%;
}
.weather-info {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 50px;
}
.wind-info{
  display: flex;
  flex-direction: column;
  gap:20px
}

.box-card {
  width: 390px;
  border-radius: 15px;
}
</style>