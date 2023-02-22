<template>
<div class="clock">
    <div class="time">{{ clock.time }}</div>
    <div class="date">{{ clock.date }}</div>
</div>
</template>

<script>
    export default {
    name: "ClockComponent",
    data() {
        return {
            clock:{
                time: '00:00:00',
                date: '00.00.0000',
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
            this.clock.date = this.zeroPadding(cd.getDate(),2) + "." + this.zeroPadding(cd.getMonth(),2) + "." + cd.getFullYear()
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
    font-weight: bold;
}
.date{
    font-size: 25px;
}
.time{
    font-size: 40px;
}
</style>