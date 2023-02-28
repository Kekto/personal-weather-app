<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>
          <a class="cityName">{{this.location?.city}}</a>
          <a class="countryName">{{this.location?.country}}</a>
        </span>
        <el-button class="button" text>Check 24/7</el-button>
      </div>
    </template>
    <div class="weather-info">
      <div v-if="this.getCurrentWeatherArray[0]?.current_weather" class="weatherCode">
        <img class="icon" :src="require(`@/assets/`+ this.getWeatherIcons(this.getCurrentWeatherArray[0].current_weather?.weathercode)+`.svg`)" alt=""/>
      </div>
      <div class="temperature">
        {{ this.getCurrentWeatherArray[0]?.current_weather?.temperature }}°C
      </div>
      <div class="wind-info">
        <div class="centered">
          <img style="width: 40px;
          height: 40px;" src="@/assets/windsock.svg" />
           {{ this.getCurrentWeatherArray[0]?.current_weather?.windspeed }} km/h
        </div>
        <div class="centered">
          <img style="width: 40px;
          height: 40px;" src="@/assets/compass.svg" />
           {{ this.getCurrentWeatherArray[0]?.current_weather?.winddirection }}°
        </div>
      </div>
    </div>
  </el-card>
</template>
  
<script>
import { useWeatherStore } from '@/pinia/weather';
import { getWeatherIcon } from '@/misc'
export default {
  name: "WeatherCardComponent",
  components:{
  },
  props:{
    location:Object,
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
    this.fetchCurrentWeatherFromLocation(this.location);
  },
  computed:{
    getCurrentWeatherArray(){
      return this.weatherStore.getCurrentWeatherArray;
    },
  },
  methods: {
    fetchCurrentWeatherFromLocation(location){
      this.weatherStore.fetchCurrentWeatherFromLocation(location?.latitude,location?.longitude);
    },
    getWeatherIcons(weatherCode){
       return getWeatherIcon(weatherCode);
    },
    getIndexOfCity(location){
      for(let i=0;i<this.weatherStore.getCurrentWeatherArray.size();i++){
        if(location.latitude == this.weatherStore.getCurrentWeatherArray[i].latitude && location.longitude == this.weatherStore.getCurrentWeatherArray[i].longitude){
          return i
        }
      }

    }
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