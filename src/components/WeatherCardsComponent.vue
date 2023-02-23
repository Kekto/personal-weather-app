<template>
<div class="cards-view">
    <WeatherCardComponent/>
    <WeatherCardComponent/>
    <WeatherCardComponent/>
    <WeatherCardComponent/>
    <WeatherCardComponent/>
    <EmptyCardComponent/>
</div>
</template>

<script>
import WeatherCardComponent from '@/components/WeatherCardComponent.vue';
import EmptyCardComponent from './EmptyCardComponent.vue';

export default {
    name: 'WeatherCardsComponent',
    components: {
        WeatherCardComponent,EmptyCardComponent
    },
    data() {
        return {

        }
    },
}
</script>

<style>
.cards-view{
    display: flex;
    flex-direction: row;
    background-color: #d6e4f0;
    padding: 30px;
    border-radius: 20px;
    gap: 10px;
    justify-content: left;
    flex-wrap: wrap;
    box-shadow: rgba(50, 50, 93, 0.25) 0px -1px 100px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}
</style>
  