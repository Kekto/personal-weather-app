<template>
    <div class="blackbox">
        <el-card class="box-card">
        <el-icon style="opacity: 20%;" size="80px"><CirclePlus /></el-icon>
        <div class="text">Add New Location</div>
    </el-card>
    </div>

  </template>
    
  <script>
  export default {
    name: "EmptyCardComponent",
    data() {
      return {
          
      }
    },
    methods: {

    },
    
  };
  </script>
    
  <style scoped> 
  .blackbox{
    background: black;
    border-radius: 15px;
    width: 390px;
    height: 159px;
  }
  .box-card {
    width: 390px;
    height: 159px;
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