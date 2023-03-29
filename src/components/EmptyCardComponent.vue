<template>
  <div class="blackbox" @click="this.toggleDialogWindow">
      <el-card class="box-card">
      <el-icon style="opacity: 20%;" size="80px"><CirclePlus /></el-icon>
      <div class="text">Add New Location</div>
  </el-card>
  </div>
  <el-dialog
      v-model="this.dialogToggle"
      width="fit-content"
      style="border-radius: 10px;min-width:790px"
  >
  <AddLocationComponent/>
  </el-dialog>
</template>

<script>
import AddLocationComponent from './AddLocationComponent.vue';
import { useLocationStore } from '@/pinia/location';

  export default {
    name: "EmptyCardComponent",
    components:{
      AddLocationComponent
    },
    setup() {
        const locationStore = useLocationStore();
        return {locationStore}
    },
    data() {
      return {
          dialogToggle: false,
      }
    },
    methods: {
      toggleDialogWindow(){
        this.dialogToggle = true;
        this.locationStore.fetchAllLocations();
      }
    },
  };
</script>
    
  <style scoped> 
  .blackbox{
    background: black;
    border-radius: 15px;
    width: 390px;
    height: 170px;
  }
  .box-card {
    width: 390px;
    height: 170px;
    border-radius: 15px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: white;
  }
  .text{
    opacity: 35%;
    font-weight: bold;
    font-size: 20px;
  }
  .box-card:hover{
    opacity: 90%;
  }
  </style>