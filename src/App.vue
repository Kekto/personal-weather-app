<template>
  <div v-if="this.weatherStore.hour >=7 && this.weatherStore.hour < 19">
    <img class="background-image" src="@/assets/pageBGDay.jpg"/>
  </div>
  <div v-else>
    <img class="background-image" src="@/assets/pageBGNight.jpg"/>
  </div>
  <div class="common-layout">
    <el-container>
      <el-header>
        <nav-bar-component/>
      </el-header>
      <el-container>
        <el-aside width="100px"></el-aside>
        <el-main>
          <router-view/>
        </el-main>
        <el-aside width="100px"></el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavBarComponent from './components/NavBarComponent.vue';
import { useWeatherStore } from './pinia/weather';

export default {
  components: {
      NavBarComponent
    },
    setup() {
        const weatherStore = useWeatherStore();
        return { weatherStore };
    },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1e56a0;
}
.background-image{
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
  opacity:50%;
  width: 100%;
}
nav {
  padding: 30px;
}

body::-webkit-scrollbar {
  display: none;
}

nav a {
  font-weight: bold;
  color: #1e56a0;
}

nav a.router-link-exact-active {
  color: #163172;
}
</style>
