<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>
          <a class="cityName">{{this.location?.city}}</a>
          <a class="countryName">{{this.location?.country}}</a>
        </span>
        <el-button class="button" text @click="this.toggleDialogWindow()">
          Check next 14 Days
        </el-button>
      </div>
    </template>
    <div class="weather-info">
      <div v-if="this.getCurrentWeatherArray[this.getCurrentWeatherIdByOrder.indexOf(this.location.id)]?.current_weather" class="weatherCode">
        <img class="icon" :src="require(`@/assets/`+ this.getWeatherIcons(this.getCurrentWeatherArray[this.getCurrentWeatherIdByOrder.indexOf(this.location.id)].current_weather?.weathercode,new Date().getHours())+`.svg`)" alt=""/>
      </div>
      <div class="temperature">
        {{ this.getCurrentWeatherArray[this.getCurrentWeatherIdByOrder.indexOf(this.location.id)]?.current_weather?.temperature }}°C
      </div>
      <div class="wind-info">
        <div class="centered">
          <img style="width: 40px;
          height: 40px;" src="@/assets/windsock.svg" />
           {{ this.getCurrentWeatherArray[this.getCurrentWeatherIdByOrder.indexOf(this.location.id)]?.current_weather?.windspeed }} km/h
        </div>
        <div class="centered">
          <img style="width: 40px;
          height: 40px;" src="@/assets/compass.svg" />
           {{ this.getCurrentWeatherArray[this.getCurrentWeatherIdByOrder.indexOf(this.location.id)]?.current_weather?.winddirection }}°
        </div>
      </div>
    </div>
  </el-card>
  <el-dialog
      v-model="this.dialogToggle"
      title="14 Days Weather"
      width="90%"
      style="border-radius: 10px"
  >
    <LongTermWeatherComponent />
  </el-dialog>
</template>
  
<script>
import LongTermWeatherComponent from './LongTermWeatherComponent.vue';
import { useWeatherStore } from '@/pinia/weather';
import { getWeatherIcon , zeroPadding } from '@/misc'
export default {
  name: "WeatherCardComponent",
  components:{
    LongTermWeatherComponent
  },
  props:{
    location:Object,
  },
  data() {
    return {
      dialogToggle: false,
    }
  },
  created(){
        setInterval(() => {
            this.updateWeather();
        },1000);
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
    getCurrentWeatherIdByOrder(){
      return this.weatherStore.getCurrentWeatherIdByOrder;
    }
  },
  methods: {
    fetchCurrentWeatherFromLocation(location){
      this.weatherStore.fetchCurrentWeatherFromLocation(location?.latitude,location?.longitude,location.id);
    },
    fetchLongTermWeather(location){
      this.weatherStore.fetchLongTermReport(location?.latitude,location?.longitude);
    },
    getWeatherIcons(weatherCode,hour){
       return getWeatherIcon(weatherCode,hour);
    },
    zeroPaddings(num, digit){
      return zeroPadding(num, digit);
    },
    updateWeather(){
      var cd = new Date();
      if(this.weatherStore.locationHours[this.location.id] != this.zeroPaddings(cd.getHours(),2)){
        this.weatherStore.locationHours[this.location.id] = this.zeroPaddings(cd.getHours(),2);
          setTimeout(()=>{
            this.fetchCurrentWeatherFromLocation(this.location);
          },2000)
      }
    },
    toggleDialogWindow(){
      this.dialogToggle = true;
      this.fetchLongTermWeather(this.location);
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
  color: #1e56a0 !important;
}

.countryName{
  font-size: 15px;
  margin-left: 10px;
  opacity: 70%;
  color: #163172 !important;
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
.button{
  font-weight: bold;
  color: #1e56a0 !important;
}
.icon{
  width: 100px;
  height: 100px
}
</style>