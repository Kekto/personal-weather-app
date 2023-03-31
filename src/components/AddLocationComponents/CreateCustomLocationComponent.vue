<template>
    <div class="tooltip">
    <h3>Create Custom Location</h3>
    <el-tooltip class="tooltip" placement="left">
        <template #content>
        <div class="tooltip-text">
            Custom Location Creator is designed to help you add locations
            which are not available from the Pre-Registered Locations list.
            Easiest way to do so, is to use Google Maps:
        </div>
        <img class="tooltip-image" src="@/assets/tooltip1.png"/>
        <div class="tooltip-text">
            After you found the location of your choosing, right click on it
            for the coordinates to show up. Then input those coordinates 
            into latitude and longitude (in that order) alongside 
            corresponding city and country information.
        </div>
        <img class="tooltip-image" src="@/assets/tooltip2.png"/>
        <div class="tooltip-text">
            Once you made sure all information is correct, you can add the
            location to your Pre-Registered Locations list, in which it should show up right 
            afterwards.
        </div>
        </template>
        <el-icon size="20px"><QuestionFilled /></el-icon>
    </el-tooltip>
    <el-button color="#1e56a0" plain circle @click="this.getLocation()">
        <el-icon><Location /></el-icon>
    </el-button>
    </div>
      <!-- LOCATION CREATION FORM -->
  <el-form :model="form" label-width="90px" style="margin-left: 5%;margin-right: 5%;">
    <el-form-item label="Country">
      <el-input v-model="form.country" />
    </el-form-item>
    <el-form-item label="City">
      <el-input v-model="form.city" />
    </el-form-item>
    <el-form-item label="Coordinates:">
      <el-col :span="12">
        <el-form-item label="Latitude">
          <el-input v-model="form.latitude" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="Longitude">
          <el-input v-model="form.longitude" />
        </el-form-item>
      </el-col>
    </el-form-item>
  </el-form>
  <div>
    <el-button color="#1e56a0" class="button" round plain @click="this.createCustomLocation()" :disabled="this.checkForm">
      <span style="margin-right: 5px;">Add</span>
      <el-icon size="large"><Plus /></el-icon>
    </el-button>
  </div>
</template>

<script>
import { useLocationStore } from '@/pinia/location';

export default {
    name: "CreateCustomLocationComponent",
    setup() {
        const locationStore = useLocationStore();
        return { locationStore };
    },
    data() {
        return {
            form: {
                id: "",
                city: "",
                country: "",
                latitude: "",
                longitude: "",
            }
        };
    },
    computed:{
      checkForm(){
        return (
         this.form.city == "" ||
          this.form.country == "" ||
           this.form.latitude == "" ||
            this.form.longitude == "")
      }
    },
    methods: {
        addLocation(id) {
            console.log(id);
            this.locationStore.addLocation(id);
            setTimeout(() => {
                this.locationStore.fetchCurrentLocations();
            }, 1000);
        },
        createCustomLocation() {
            this.form.id = this.locationStore.getAllLocations[this.locationStore.getAllLocations.length - 1].id + 1;
            this.locationStore.createCustomLocation(this.form).then(()=>{
              this.form = {
                id: "",
                city: "",
                country: "",
                latitude: "",
                longitude: "",
              }
            }).then(()=>{
              this.locationStore.fetchAllLocations();
            })
        },
        getLocation() {
            const successCallback = (position) => {
                this.form.latitude = position.coords.latitude;
                this.form.longitude = position.coords.longitude;
            };
            const errorCallback = (error) => {
                console.log(error);
            };
            navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
        }
    },
};
</script>

<style scoped>
.tooltip{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 10px;
  position: relative;
  left: 20px;
}
.tooltip-text{
  font-size: 14px;
  width:300px;
  text-align: justify;
  text-justify: auto;
}
.tooltip-image{
  width:300px;
}
.button{
  margin-top: 20px;
  width: 100px;
}
</style>