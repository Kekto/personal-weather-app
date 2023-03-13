import { defineStore } from "pinia";
import axios from "/src/axios.js";

export const useLocationStore = defineStore("location", {
	state: () => {
		return {
			locations: [],
			allLocations: [],
		};
	},
	actions: {
		async fetchCurrentLocations() {
			await axios
				.get(`http://localhost:3000/locations`)
				.then((res) => {
					this.locations = res.data;
					// console.log(res.data);
				})
				.catch((err) => {
					console.log(err);
				});
		},
		async fetchAllLocations() {
			await axios
				.get(`http://localhost:3000/allLocations`)
				.then((res) => {
					this.allLocations = res.data;
					// console.log(res.data);
				})
				.catch((err) => {
					console.log(err);
				});
		},
		async addLocation(id) {
			await axios
				.post(`http://localhost:3000/locations`, this.allLocations[id])
				.then((res) => {
					console.log(res);
				})
				.catch((err) => {
					console.log(err);
				});
		},
		async createCustomLocation(location) {
			await axios
				.post(`http://localhost:3000/allLocations`, location)
				.then((res) => {
					console.log(res);
				})
				.catch((err) => {
					console.log(err);
				});
		},
		async deleteLocation(id) {
			await axios
				.delete(`http://localhost:3000/locations/` + id)
				.then((res) => {
					console.log(res);
				})
				.catch((err) => {
					console.log(err);
				});
		},
	},
	getters: {
		getCurrentLocations() {
			return this.locations;
		},
		getAllLocations() {
			return this.allLocations;
		},
	},
});
