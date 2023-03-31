import { defineStore } from "pinia";
import axios from "/src/axios.js";

export const useLocationStore = defineStore("location", {
	state: () => {
		return {
			locations: [],
			allLocations: [],
			googleGeoCoordinates: [],
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
					this.fetchAllLocations();
				})
				.catch((err) => {
					console.log(err);
				});
		},
		async fetchGoogleGeoCoordinates(address) {
			await axios
				.get(
					`https://maps.googleapis.com/maps/api/geocode/json?address=` +
						address +
						`&key=AIzaSyD4vD_jiEOYTc0sq7_3gJ0xWG1YqSn2aJc&language=en`
				)
				.then((res) => {
					console.log(res);
					if (res.data.status == "ZERO_RESULTS") {
						console.log("NO RESULTS WERE FOUND");
					} else {
						this.googleGeoCoordinates = {
							country: res.data.results[0].formatted_address.split(",")[1],
							city: res.data.results[0].formatted_address.split(",")[0],
							latitude: res.data.results[0].geometry.location.lat,
							longitude: res.data.results[0].geometry.location.lng,
						};
					}
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
		getGoogleGeoCoordinates() {
			return this.googleGeoCoordinates;
		},
	},
});
