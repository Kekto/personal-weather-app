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
        <!-- ALL DAY WEATHER -->
        <div>
          <!-- PARTLY CLOUDY -->
          <div v-if="this.getCurrentWeather.current_weather?.weathercode === 2">
            <img class="icon" src="@/assets/2.svg"/>
          </div>
          <!-- OVERCAST -->
          <div v-if="this.getCurrentWeather.current_weather?.weathercode === 3">
            <img class="icon" src="@/assets/3.svg"/>
          </div>
        </div>
        <!-- DAY TIME WEATHER -->
        <div v-if="this.weatherStore.hour >=7 && this.weatherStore.hour <19">
          <!-- CLEAR -->
          <div v-if="this.getCurrentWeather.current_weather?.weathercode === 0">
            <img class="icon" src="@/assets/0d.svg"/>
          </div>
          <!-- MAINLY CLEAR -->
          <div v-if="this.getCurrentWeather.current_weather?.weathercode === 1">
            <img class="icon" src="@/assets/1d.svg"/>
          </div>
          <!-- FOG -->
          <div v-if="this.getCurrentWeather.current_weather?.weathercode === 45 && 
                    this.getCurrentWeather.current_weather?.weathercode === 48">
            <img class="icon" src="@/assets/45d.svg"/>
          </div>
          <!-- DRIZZLE -->
          <div v-if="this.getCurrentWeather.current_weather?.weathercode === 51 && 
                    this.getCurrentWeather.current_weather?.weathercode === 53 && 
                    this.getCurrentWeather.current_weather?.weathercode === 55">
            <img class="icon" src="@/assets/51d.svg"/>
          </div>
          <!-- FREEZING DRIZZLE -->
          <div v-if="this.getCurrentWeather.current_weather?.weathercode === 56 && 
                    this.getCurrentWeather.current_weather?.weathercode === 57">
            <img class="icon" src="@/assets/56d.svg"/>
          </div>
          <!-- RAIN -->
          <div v-if="this.getCurrentWeather.current_weather?.weathercode === 61 && 
                    this.getCurrentWeather.current_weather?.weathercode === 63 && 
                    this.getCurrentWeather.current_weather?.weathercode === 65">
            <img class="icon" src="@/assets/61d.svg"/>
          </div>
          <!-- FREEZING RAIN -->
          <div v-if="this.getCurrentWeather.current_weather?.weathercode === 66 && 
                    this.getCurrentWeather.current_weather?.weathercode === 67">
            <img class="icon" src="@/assets/66d.svg"/>
          </div>
          <!-- SNOWFALL & SNOWGRAINS -->
          <div v-if="this.getCurrentWeather.current_weather?.weathercode === 71 && 
                    this.getCurrentWeather.current_weather?.weathercode === 73 && 
                    this.getCurrentWeather.current_weather?.weathercode === 75 && 
                    this.getCurrentWeather.current_weather?.weathercode === 77">
            <img class="icon" src="@/assets/71d.svg"/>
          </div>
          <!-- RAIN SHOWERS -->
          <div v-if="this.getCurrentWeather.current_weather?.weathercode === 80 && 
                    this.getCurrentWeather.current_weather?.weathercode === 81 && 
                    this.getCurrentWeather.current_weather?.weathercode === 82">
            <img class="icon" src="@/assets/80d.svg"/>
          </div>
          <!-- SNOW SHOWERS -->
          <div v-if="this.getCurrentWeather.current_weather?.weathercode === 85 && 
                    this.getCurrentWeather.current_weather?.weathercode === 86">
            <img class="icon" src="@/assets/85d.svg"/>
          </div>
          <!-- THUNDERSTORM -->
          <div v-if="this.getCurrentWeather.current_weather?.weathercode === 95">
            <img class="icon" src="@/assets/95d.svg"/>
          </div>
          <!-- THUNDERSTORM & HAIL -->
          <div v-if="this.getCurrentWeather.current_weather?.weathercode === 96 && 
                    this.getCurrentWeather.current_weather?.weathercode === 99">
            <img class="icon" src="@/assets/96d.svg"/>
          </div>
        </div>
        <!-- NIGHT TIME WEATHER -->
        <div v-if="this.weatherStore.hour < 7 && this.weatherStore.hour >=19">
          <!-- CLEAR -->
          <div v-if="this.getCurrentWeather.current_weather?.weathercode === 0">
            <img class="icon" src="@/assets/0n.svg"/>
          </div>
          <!-- MAINLY CLEAR -->
          <div v-if="this.getCurrentWeather.current_weather?.weathercode === 1">
            <img class="icon" src="@/assets/1n.svg"/>
          </div>
          <!-- FOG -->
          <div v-if="this.getCurrentWeather.current_weather?.weathercode === 45 && 
                    this.getCurrentWeather.current_weather?.weathercode === 48">
            <img class="icon" src="@/assets/45n.svg"/>
          </div>
          <!-- DRIZZLE -->
          <div v-if="this.getCurrentWeather.current_weather?.weathercode === 51 && 
                    this.getCurrentWeather.current_weather?.weathercode === 53 && 
                    this.getCurrentWeather.current_weather?.weathercode === 55">
            <img class="icon" src="@/assets/51n.svg"/>
          </div>
          <!-- FREEZING DRIZZLE -->
          <div v-if="this.getCurrentWeather.current_weather?.weathercode === 56 && 
                    this.getCurrentWeather.current_weather?.weathercode === 57">
            <img class="icon" src="@/assets/56n.svg"/>
          </div>
          <!-- RAIN -->
          <div v-if="this.getCurrentWeather.current_weather?.weathercode === 61 && 
                    this.getCurrentWeather.current_weather?.weathercode === 63 && 
                    this.getCurrentWeather.current_weather?.weathercode === 65">
            <img class="icon" src="@/assets/61n.svg"/>
          </div>
          <!-- FREEZING RAIN -->
          <div v-if="this.getCurrentWeather.current_weather?.weathercode === 66 && 
                    this.getCurrentWeather.current_weather?.weathercode === 67">
            <img class="icon" src="@/assets/66n.svg"/>
          </div>
          <!-- SNOWFALL & SNOWGRAINS -->
          <div v-if="this.getCurrentWeather.current_weather?.weathercode === 71 && 
                    this.getCurrentWeather.current_weather?.weathercode === 73 && 
                    this.getCurrentWeather.current_weather?.weathercode === 75 && 
                    this.getCurrentWeather.current_weather?.weathercode === 77">
            <img class="icon" src="@/assets/71n.svg"/>
          </div>
          <!-- RAIN SHOWERS -->
          <div v-if="this.getCurrentWeather.current_weather?.weathercode === 80 && 
                    this.getCurrentWeather.current_weather?.weathercode === 81 && 
                    this.getCurrentWeather.current_weather?.weathercode === 82">
            <img class="icon" src="@/assets/80n.svg"/>
          </div>
          <!-- SNOW SHOWERS -->
          <div v-if="this.getCurrentWeather.current_weather?.weathercode === 85 && 
                    this.getCurrentWeather.current_weather?.weathercode === 86">
            <img class="icon" src="@/assets/85n.svg"/>
          </div>
          <!-- THUNDERSTORM -->
          <div v-if="this.getCurrentWeather.current_weather?.weathercode === 95">
            <img class="icon" src="@/assets/95n.svg"/>
          </div>
          <!-- THUNDERSTORM & HAIL -->
          <div v-if="this.getCurrentWeather.current_weather?.weathercode === 96 && 
                    this.getCurrentWeather.current_weather?.weathercode === 99">
            <img class="icon" src="@/assets/96n.svg"/>
          </div>
        </div>
      </div>
      <div class="temperature">
        {{ this.getCurrentWeather.current_weather?.temperature }}°C
      </div>
      <div class="wind-info">
        <div class="centered">
          <img style="width: 40px;
          height: 40px;" src="@/assets/windsock.svg" />
           {{ this.getCurrentWeather.current_weather?.windspeed }} km/h
        </div>
        <div class="centered">
          <img style="width: 40px;
          height: 40px;" src="@/assets/compass.svg" />
           {{ this.getCurrentWeather.current_weather?.winddirection }}°
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
  gap:10px
}
.centered{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-weight: bold;
}
.box-card {
  width: 390px;
  border-radius: 15px;
}
.icon{
  width: 100px;
  height: 100px
}
</style>