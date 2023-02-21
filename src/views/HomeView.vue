<template>
  <div class="home">
    <h2>Hello! Here is the weather for today:</h2>
    <ClockComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import ClockComponent from '@/components/ClockComponent.vue';


export default {
  name: 'HomeView',
  components: {
    ClockComponent
    
  }
}
</script>
