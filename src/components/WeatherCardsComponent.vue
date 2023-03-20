<template>
<div class="cards-view">
    <WeatherCardComponent
    v-for="location in this.getCurrentLocations" 
    :key="location.id"
    :location="location"
    />
    <EmptyCardComponent/>
</div>
</template>

<script>
import WeatherCardComponent from '@/components/WeatherCardComponent.vue';
import EmptyCardComponent from './EmptyCardComponent.vue';
import { useWeatherStore } from '@/pinia/weather';
import { useLocationStore } from '@/pinia/location';

export default {
    name: 'WeatherCardsComponent',
    components: {
        WeatherCardComponent,EmptyCardComponent
    },
    props:{
        locations: Object,
    },
    data() {
        return {

        }
    },
    setup() {
        const weatherStore = useWeatherStore();
        const locationStore = useLocationStore();
        return { weatherStore , locationStore}
    },
    computed:{
        getCurrentWeatherArray(){
            return this.weatherStore.getCurrentWeatherArray;
        },
        getCurrentLocations(){
            return this.locationStore.getCurrentLocations;
        }
    },
    mounted(){
        this.fetchCurrentLocations();

    },
    methods: {
        fetchCurrentLocations(){
            this.locationStore.fetchCurrentLocations();
        }
    }
}
</script>

<style scoped>
.cards-view{
    display: flex;
    flex-direction: row;
    background-color: #d6e4f0;
    padding: 30px;
    border-radius: 20px;
    gap: 10px;
    justify-content: left;
    flex-wrap: wrap;
    width: fit-content;
    box-shadow: rgba(50, 50, 93, 0.25) 0px -1px 100px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}
@media only screen and (max-width: 1126px) {
  .cards-view {
    justify-content: center;
  }
}
</style>
  