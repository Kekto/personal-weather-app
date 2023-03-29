<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span style="width: 100px;height: 40px;">
          <a class="cityName">{{this.location?.city}}</a>
          <br/>
          <a class="countryName">{{this.location?.country}}</a>
        </span>
        <el-button plain color="#1e56a0" style="font-weight: bold;" @click="this.toggleDialogWindow()">
          Check next 14 Days
        </el-button>
        <el-button plain type='danger' style="font-weight: bold;" @click="this.toggleDelete()">
          <el-icon><Delete /></el-icon>
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
      width="70%"
      style="border-radius: 10px"
      destroy-on-close
  >
  <div class="longterm-title">
    <a class="longterm-city">{{this.location?.city}}</a>
    <a class="longterm-country">{{this.location?.country}}</a>
  </div>
    <LongTermWeatherComponent />
  </el-dialog>
  <el-dialog
      v-model="this.deleteToggle"
      width="500px"
      style="border-radius: 10px;"
      destroy-on-close  
  >
    <a>Are you sure you want to delete entry:</a>
    <div style="margin-top: 15px;margin-bottom: 15px;">    
      <a class="longterm-city">{{this.location?.city}}</a>
      <a class="longterm-country">{{this.location?.country}}</a>
    </div>
    <el-button plain type='danger' style="font-weight: bold;width: 100px;" @click="this.deleteLocation(location.id)">
      <el-icon><Delete /></el-icon>
    </el-button>
  </el-dialog>
</template>
  
<script>
import LongTermWeatherComponent from './LongTermWeatherComponent.vue';
import { useWeatherStore } from '@/pinia/weather';
import { useLocationStore } from '@/pinia/location';
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
      deleteToggle: false,
    }
  },
  created(){
        setInterval(() => {
            this.updateWeather();
        },1000);
    },
  setup() {
    const weatherStore = useWeatherStore();
    const locationStore = useLocationStore();
    return { weatherStore ,locationStore }
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
            console.log("Test")
          },2000)
      }
    },
    toggleDialogWindow(){
      this.dialogToggle = true;
      this.fetchLongTermWeather(this.location);
    },
    toggleDelete(){
      this.deleteToggle = true;
    },
    deleteLocation(id){
      this.locationStore.deleteLocation(id)
      this.deleteToggle = false;
      setTimeout(()=>{
        this.locationStore.fetchCurrentLocations();
      },1000)
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
  font-size: 16px;
  color: #1e56a0 !important;
}

.countryName{
  font-size: 15px;
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
.icon{
  width: 100px;
  height: 100px
}
.longterm-title{
  display: flex;
  align-items: baseline;
  padding-left: 5%;
  padding-bottom: 10px;
}
.longterm-city{
  font-weight: bold;
  font-size: 40px;
  color: #1e56a0 !important;
}
.longterm-country{
  font-size: 30px;
  margin-left: 10px;
  opacity: 70%;
  color: #163172 !important;
}
</style>