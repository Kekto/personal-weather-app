<template>
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
export default {
  components: {
      NavBarComponent
    }
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

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #1e56a0;
}

nav a.router-link-exact-active {
  color: #163172;
}
</style>
