<template>
  <div v-if="value == 0" class="title">Select Method</div>
  <div v-if="value == 0" class="button-menu">
    <div class="column">
      <el-button class="button" @click="value=1">
        <el-icon size="160px" color=white><List /></el-icon>
      </el-button>
      <span class="button-text">Pre-Registered Locations</span>
    </div>
    <div class="column">
      <el-button class="button" @click="value=2">
        <el-icon size="150px" color=white><DocumentAdd/></el-icon>
      </el-button>
      <span class="button-text">Custom Locations</span>
    </div>
    <div class="column">
      <el-button class="button" @click="value=3">
        <img class="icon" :src="require(`@/assets/googleIcon.svg`)"/>
      </el-button>
      <span class="button-text">Google Geolocation API</span>
    </div>
  </div>
  <el-container>
    <el-aside v-if="value != 0" width="50px">
      <el-button class="button-back" @click="value=0">
        <span class="text-back">Return</span>
      </el-button>
    </el-aside>
    <el-main style="min-width: 700px;">
      <AddPreRegisteredLocationComponent v-if="value == 1"/>
        <!-- DIVIDER -->
        <CreateCustomLocationComponent v-if="value == 2"/>
        <!-- DIVIDER -->
        <SearchLocationComponent v-if="value == 3"/>
    </el-main>
  </el-container>
</template>

<script>
import SearchLocationComponent from './AddLocationComponents/SearchLocationComponent.vue';
import CreateCustomLocationComponent from './AddLocationComponents/CreateCustomLocationComponent.vue';
import AddPreRegisteredLocationComponent from './AddLocationComponents/AddPreRegisteredLocationComponent.vue'

export default {
  name: "AddLocationComponent",
  components: { SearchLocationComponent,CreateCustomLocationComponent,AddPreRegisteredLocationComponent },
  data() {
      return {
        value: 0,
      };
  },
  methods: {
  },
};
</script>

<style scoped>
.title{
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 25px;
  color: #163172;
}
.button-menu{
  display: flex;
  width: auto;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
}
.button{
  width: 230px;
  height: 230px;
  background-color: #163172;
  border-radius: 0;
  margin-left: 0 !important;
}
.button:hover{
  background-color: #1e56a0;
  width: 260px;
  height: 260px;
}
.button:hover ~ .button-text{
  font-size: 20px;
  opacity: 100%;
}
.column{
  display: flex;
  flex-direction: column;
}
.button-text{
  font-weight: bold;
  color: #163172;
  font-size: 16px;
  padding-top: 20px;
  opacity: 70%;
}
.button-back{
  display: flex;
  height: 100%;
  width: 50px;
  background-color: #163172;
}.button-back:hover{
  background-color: #163172;
  opacity: 60%;
}
.text-back{
  writing-mode: vertical-rl;
  text-orientation: upright;
  font-weight: bold;
  color:white;
  font-size: 30px;
  margin-top: 25px;
  margin-bottom: 25px;
}
.icon{
  height: 200px;
  filter: invert();
}
</style>