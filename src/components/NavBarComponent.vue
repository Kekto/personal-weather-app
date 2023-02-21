<template>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        text-color="#1e56a0"
        active-text-color="#163172">
  
      <el-menu-item 
      v-for="(element, index) in linkBase" 
      :key="index" 
      :index="`${index+1}`">
        <router-link class="router-link" :to="{name: element.link}">{{ element.label }}</router-link>
      </el-menu-item>
    </el-menu>
  
  </template>
  
<script>
    export default {
    name: "NavBarComponent",
    data() {
        return {
        activeIndex: "1",
        authorized: false,
        linkBase: [
            {label: 'Home', link: 'home'},
            {label: 'About', link: 'about'},
        ],
        };
    },
    methods: {
    },
    };
</script>
  
<style scoped>
.el-menu-demo{
    display: flex;
    justify-content: center;
}
a {
    text-decoration: none;
    display: flex;
    padding: 0 30px;
}
</style>
  