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
        <!-- CLEAR SKY DAY/NIGHT-->
        {{this.getCurrentWeather.current_weather?.weathercode  }}
        <div v-if="
          this.getCurrentWeather.current_weather?.weathercode === 0 &&
          this.weatherStore.hour >=7 && this.weatherStore.hour <19"
        >
          <el-icon size="60px"><Sunny /></el-icon>
        </div>
        <div v-if="
          this.getCurrentWeather.current_weather?.weathercode === 0 &&
          this.weatherStore.hour < 7 && this.weatherStore.hour >=19"
        >
          <el-icon size="60px"><Moon /></el-icon>
        </div>
        <!-- CLOUDY -->
        <div v-if="
          this.getCurrentWeather.current_weather?.weathercode === 1 "
        >
          <el-icon size="60px"><PartlyCloudy /></el-icon>
        </div>
        <div v-if="
          this.getCurrentWeather.current_weather?.weathercode === 2 "
        >
          <el-icon size="60px"><MostlyCloudy /></el-icon>
        </div>
        <div v-if="
          this.getCurrentWeather.current_weather?.weathercode === 3 "
        >
          <el-icon size="60px"><Cloudy /></el-icon>
        </div>
        <!-- FOG -->
        <div v-if="
          this.getCurrentWeather.current_weather?.weathercode === 45 ||
          this.getCurrentWeather.current_weather?.weathercode === 48 "
        >
   
        </div>
        <!-- DRIZZLING -->
        <div v-if="
          this.getCurrentWeather.current_weather?.weathercode === 56 ||
          this.getCurrentWeather.current_weather?.weathercode === 57 "
        >
        <el-icon size="60px"><Drizzling /></el-icon>
        </div>
        <!-- RAINING -->
        <div v-if="
          this.getCurrentWeather.current_weather?.weathercode === 61 ||
          this.getCurrentWeather.current_weather?.weathercode === 62 ||
          this.getCurrentWeather.current_weather?.weathercode === 63"
        >
          <el-icon size="60px"><Pouring /></el-icon>
        </div>
        <!-- FREEZING RAIN-->
        <div v-if="
          this.getCurrentWeather.current_weather?.weathercode === 66 ||
          this.getCurrentWeather.current_weather?.weathercode === 67"
        >
   
        </div>
        <!-- SNOWFALL -->
        <div v-if="
          this.getCurrentWeather.current_weather?.weathercode === 71 ||
          this.getCurrentWeather.current_weather?.weathercode === 73 ||
          this.getCurrentWeather.current_weather?.weathercode === 75 ||
          this.getCurrentWeather.current_weather?.weathercode === 77"
        >
        
        </div>
        <!-- RAIN SHOWERS -->
        <!-- SNOW SHOWERS -->
        <!-- THUNDERSTORMS -->
        <div v-if="
          this.getCurrentWeather.current_weather?.weathercode === 95"
        >
          <el-icon size="60px"><Lightning /></el-icon>
        </div>
        <!-- HAILS -->
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
  components:{
  },
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
.temperature{
  font-size: 30px;
  font-weight: bold;
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