<template>
  <el-container>
    <el-aside width="50%" style="margin-top: 50px;">
      <el-input v-model="searchInput" class="input-bar" placeholder="Search location">
        <template #suffix>
          <img class="input-icon" :src="require(`@/assets/googleIcon.svg`)"/>
        </template>
      </el-input>
      <el-button color="#1e56a0" class="button" plain @click="this.fetchGeoSearch()">
        <span style="margin-right: 5px;">Search</span>
        <el-icon><Search /></el-icon>
      </el-button>
      <div class="location-card">
        <el-card class="box-card">
          <div class="card-info">
            <div>
              <span class="title">Country:</span>
              <span class="desc">{{ this.locationStore.getGoogleGeoCoordinates?.country }}</span>
            </div>
            <div>
              <span class="title">City:</span>
              <span class="desc">{{ this.locationStore.getGoogleGeoCoordinates?.city }}</span>
            </div>
            <div>
              <span class="title">Latitude:</span>
              <span class="desc">{{ this.locationStore.getGoogleGeoCoordinates?.latitude }}</span>
            </div>
            <div>
              <span class="title">Longitude:</span>
              <span class="desc">{{ this.locationStore.getGoogleGeoCoordinates?.longitude }}</span>
            </div>
          </div>
        </el-card>
        </div>
      <div>
        <el-button color="#1e56a0" class="button" style="margin-top: 20px;" round plain @click="this.addGoogleLocation()" >
          <span style="margin-right: 5px;">Add</span>
          <el-icon size="large"><Plus /></el-icon>
        </el-button>
      </div>
    </el-aside>
    <el-main>    
      <div class="column">
        <GMapMap
          :center="{lat: gmap.latitude, lng: gmap.longitude}"
          :zoom="8"
          style="width: 100%; height: 400px"
        />
      </div>
    </el-main>
  </el-container>
</template>

<script>
import { useLocationStore } from '@/pinia/location';

export default {
  name: "SearchLocationComponent",
  setup() {
      const locationStore = useLocationStore();
      return {locationStore}
  },
  data() {
    return {
      searchInput: '',
      gmap: {
        latitude: 0,
        longitude:0
      }
    }
  },
  computed:{
    getGoogleGeoCoordinates(){
      return this.locationStore.getGoogleGeoCoordinates;
    }
  },
  mounted() {
    this.getLocation()
  },
  methods: {
    fetchGeoSearch(){
      this.locationStore.fetchGoogleGeoCoordinates(this.searchInput);
      setTimeout(() => {
        this.gmap= {
          latitude: this.locationStore.getGoogleGeoCoordinates.latitude,
          longitude: this.locationStore.getGoogleGeoCoordinates.longitude
        }
        }, 250);
    },
    getLocation() {
      const successCallback = (position) => {
        this.gmap = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
          }
        }
        const errorCallback = (error) => {
            console.log(error);
        }
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    },
    addGoogleLocation(){
      let form = {
        id: this.locationStore.getAllLocations[this.locationStore.getAllLocations.length - 1].id + 1,
        country: this.locationStore.getGoogleGeoCoordinates?.country,
        city: this.locationStore.getGoogleGeoCoordinates?.city,
        latitude: this.locationStore.getGoogleGeoCoordinates?.latitude,
        longitude: this.locationStore.getGoogleGeoCoordinates?.longitude
      }
      this.locationStore.createCustomLocation(form).then(() => {
          this.locationStore.addLocation(form.id)
        }).then(() =>{
          this.locationStore.googleGeoCoordinates = []
        }).then(() =>{
          this.locationStore.fetchAllLocations();
          setTimeout(() => {
            this.locationStore.fetchCurrentLocations();
        }, 250)
      })
      console.log(form)
      
    }
  },
}
</script>

<style scoped>
.input-bar{
    height:40px;
    width: 75%;
    font-size: 20px;
    margin: 20px;
    margin-right: 0px;
}
.input-icon{
    width: 30px;
    opacity: 50%;
}
.button{
  height: 40px;
}
.location-card{
  display: flex;
  justify-content: center;
}
.box-card{
  margin-top: 20px;
  width: 75%;
  text-align: left;
}
.title{
  font-weight: bold;
  margin-right: 5px;
  font-size: 15px;
}
.desc{
  font-size: 14px;
}
</style>