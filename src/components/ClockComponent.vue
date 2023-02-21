<template>
<div class="clock">
    <p class="date">{{ clock.date }}</p>
    <p class="time">{{ clock.time }}</p>
</div>
</template>

<script>
    export default {
    name: "ClockComponent",
    data() {
        return {
            clock:{
                time: '00:00:00',
                date: '',
            },
        };
    },
    created(){
        setInterval(() => {
            this.updateTime();
        },1000);
    },
    methods: {
        updateTime(){
            var cd = new Date();
            this.clock.time = this.zeroPadding(cd.getHours()) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2);
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
    font-size: 50px;
    font-weight: bold;
}
</style>