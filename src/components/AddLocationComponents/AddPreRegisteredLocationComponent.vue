<template>
<h3>Add Pre-Registered Location</h3>
  <el-select v-if="this.getAllLocations" v-model="value" filterable placeholder="Select">
    <el-option 
      v-for="location in this.filteredLocations"
      :key="location.id"
      :label="location.city +' '+ location.country"
      :value="location.id"
    >
      <span style="float: left">
        {{ location.city }}
        <span style="font-size: 13px;opacity: 50%;">
          {{ location.country }}
        </span>
      </span>
    </el-option>
  </el-select>
  <div>
    <el-button color="#1e56a0" clearable class="button" round plain @click="this.addLocation(this.value)" :disabled="value.length==0">
      <span style="margin-right: 5px;">Add</span>
      <el-icon size="large"><Plus /></el-icon>
    </el-button>
  </div>
</template>

<script>
import { useLocationStore } from '@/pinia/location';
export default {
  name: "AddPreRegisteredLocationComponent",
  setup() {
      const locationStore = useLocationStore();
      return { locationStore };
  },
  data() {
      return {
          value: "",
          cities: [],
      };
  },
  computed: {
    getAllLocations() {
      return this.locationStore.getAllLocations;
    },
    filteredLocations() {
      return this.locationStore.getAllLocations.filter((loc) => {
        return (!this.locationStore.getCurrentLocations.some(function (e) {
          return (e.id == loc.id);
        }));
      });
    },
  },
  methods: {
    addLocation(id) {
      console.log(id);
      this.locationStore.addLocation(id);
      this.value = "";
      setTimeout(() => {
          this.locationStore.fetchCurrentLocations();
      }, 1000);
    },
  },
};
</script>

<style scoped>
.button{
  margin-top: 20px;
  width: 100px;
}
</style>