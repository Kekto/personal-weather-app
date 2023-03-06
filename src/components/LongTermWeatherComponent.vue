<template>
    <div class="demo-collapse">
    <el-collapse
      v-for="day in this.getLongTermWeatherDaily"
      :key="day.id"
      >
      <el-collapse-item>
        <template #title>
          <div class="daily">
            <div class="date">
            {{ day.time }}
            </div>
            <img class="icon" :src="require(`@/assets/`+ this.getWeatherIcons(day.weathercode,12)+`.svg`)" alt=""/>
            <div class="temperature">
              Maximum temperature:
              {{ day.temperature_2m_max }}°C
            </div>
            <div class="temperature">
              Minimum temperature:
              {{ day.temperature_2m_min }}°C
            </div>
          </div>
        </template>
        <div class="hourly"
          v-for="hour in this.getLongTermWeatherHourly[this.getLongTermWeatherDaily.indexOf(day)]" 
          :key="hour">
          <div class="date-hourly">
            {{ hour.time.split('T')[1] }}
          </div>
          <img class="icon-hourly" :src="require(`@/assets/`+ this.getWeatherIcons(hour.weathercode,hour.time.split('T')[1].split(':')[0])+`.svg`)" alt=""/>
          <div class="temperature-hourly">
            {{ hour?.temperature_2m }}°C
          </div>
          <div class="info">
          <img style="width: 40px; height: 40px;" src="@/assets/windsock.svg" />
           {{ hour?.windspeed_10m }} km/h
          </div>
          <div class="info">
            <img style="width: 40px;height: 40px;" src="@/assets/compass.svg" />
            {{ hour?.winddirection_10m }}°
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import { useWeatherStore } from '@/pinia/weather';
import { getWeatherIcon , zeroPadding } from '@/misc'

export default {
  name: "LongTermWeatherComponent",
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
  computed:{
    getLongTermWeatherDaily(){
      return this.weatherStore.getLongTermWeatherDaily;
    },
    getLongTermWeatherHourly(){
      return this.weatherStore.getLongTermWeatherHourly;
    },
    getCurrentWeatherIdByOrder(){
      return this.weatherStore.getCurrentWeatherIdByOrder;
    },
  },
  methods: {
    getWeatherIcons(weatherCode,hour){
       return getWeatherIcon(weatherCode,hour);
    },
    zeroPaddings(num, digit){
      return zeroPadding(num, digit);
    },
  },
  
};
</script>

<style scoped>
.daily{
  display: flex;
  align-items: center;
  width: 90%;
  justify-content: space-between; 
}
.date{
  font-size: 17px;
  font-weight: bold;
  width: 200px;
}
.icon{
  display:flex;
  width: 80px;
}
.temperature{
  width: 250px;
  font-weight: bold;
  font-size: 15px;
}
.hourly{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 40px;
}
.icon-hourly{
  height: 45px;
  padding-left: 20px;
}
.date-hourly{
  padding-left: 70px;
  font-size: 17px;
  font-weight: bold;
}
.temperature-hourly{
  width: 140px;
  font-weight: bold;
  font-size: 15px;
}
.info {
  display: flex;
  align-items: center;
  width: 140px;
  font-weight: bold;
}
</style>
<style>
.el-collapse-item__header{
  height: 70px !important;
}
</style>