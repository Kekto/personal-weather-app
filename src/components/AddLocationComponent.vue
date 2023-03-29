<template>
  <div v-if="value == 0" class="title">Select Method</div>
  <div v-if="value == 0" class="button-menu">
    <el-button class="button">
      <img class="icon" :src="require(`@/assets/googleIcon.svg`)" @click="value=1"/>
    </el-button>
    <el-button class="button">
      <img class="icon" :src="require(`@/assets/googleIcon.svg`)" @click="value=2"/>
    </el-button>
    <el-button class="button">
      <img class="icon" :src="require(`@/assets/googleIcon.svg`)" @click="value=3"/>
    </el-button>
  </div>
  <el-container>
    <el-aside v-if="value != 0" width="50px">
      <el-button class="button-back" @click="value=0">
        <span class="text-back">Return</span>
      </el-button>
    </el-aside>
    <el-main>
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
  gap: 15px;
}
.button{
  width: auto;
  height: auto;
  background-color: #163172;
}
.button:hover{
  background-color: #1e56a0;
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
}
.content{
  display: flex;
  flex-direction: row;
}
.icon{
  height: 200px;
  filter: invert();
}
</style>