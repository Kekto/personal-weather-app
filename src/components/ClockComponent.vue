<template>
<div class="clock">
    <div class="time">{{ clock.time }}</div>
    <div class="date">{{ clock.date }}</div>
</div>
</template>

<script>
import { useWeatherStore } from '@/pinia/weather';
import { useLocationStore } from '@/pinia/location';

export default {
    name: "ClockComponent",
    data() {
        return {
            clock:{
                time: '00:00:00',
                date: '00.00.0000',
            },
            tempHour: '',
        };
    },
    created(){
        setInterval(() => {
            this.updateTime();
        },1000);
    },
    setup() {
        const weatherStore = useWeatherStore();
        const locationStore = useLocationStore();
        return { weatherStore , locationStore }
    },
    methods: {
        updateTime(){
            var cd = new Date();
            this.clock.date = this.zeroPadding(cd.getDate(),2) + "." + this.zeroPadding(cd.getMonth()+1,2) + "." + cd.getFullYear()
            this.clock.time = this.zeroPadding(cd.getHours(),2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2);
            
            if(this.tempHour != this.zeroPadding(cd.getHours(),2)){
                this.tempHour = this.zeroPadding(cd.getHours(),2);
                this.weatherStore.hour = cd.getHours();
                setTimeout(()=>{
                    this.locationStore.fetchCurrentLocations();
                },5000)
            }
        },
        zeroPadding(num, digit) {
            var zero = '';
            for(var i = 0; i < digit; i++) {
                zero += '0';
            }
            return (zero + num).slice(-digit);
        }
    },
    };
</script>

<style>
.clock{
    font-weight: bold;
}
.date{
    font-size: 25px;
}
.time{
    font-size: 40px;
}
</style>