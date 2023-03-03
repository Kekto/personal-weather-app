<template>
    <div class="demo-collapse">
    <el-collapse
      v-for="day in this.getLongTermWeatherDaily"
      :key="day.id"
      >
      <el-collapse-item>
        <template #title>
          <div class="date">
            {{ day.time }}
          </div>
          <img class="icon" :src="require(`@/assets/`+ this.getWeatherIcons(day.weathercode)+`.svg`)" alt=""/>
          <div class="temperature">
            {{  }}
          </div>
        </template>
        <div class="hourly"
          v-for="hour in this.getLongTermWeatherHourly[this.getLongTermWeatherDaily.indexOf(day)]" 
          :key="hour">
          <div class="date-hourly">
            {{ hour.time.split('T')[1] }}
          </div>
          <img class="icon-hourly" :src="require(`@/assets/`+ this.getWeatherIcons(hour.weathercode)+`.svg`)" alt=""/>
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
    getWeatherIcons(weatherCode){
       return getWeatherIcon(weatherCode);
    },
    zeroPaddings(num, digit){
      return zeroPadding(num, digit);
    },
  },
  
};
</script>

<style scoped>
.icon{
  display:flex;
  width: 80px;
  padding-left: 25px;
}
.date{
  padding-left: 25px;
  font-size: 17px;
  font-weight: bold;
}
.hourly{
  display: flex;
  align-items: center;
  height: 60px;
}
.icon-hourly{
  height: 80px;
  padding-left: 25px;
}
.date-hourly{
  padding-left: 70px;
  font-size: 17px;
  font-weight: bold;
}
</style>
<style>
.el-collapse-item__header{
  height: 80px !important;
}
</style>