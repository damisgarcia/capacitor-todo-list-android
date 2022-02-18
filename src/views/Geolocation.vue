<template>
  <div>
    <h1>Geolocation</h1>
    <p>Your location is:</p>
    <p>Latitude: {{ loc.lat }}</p>
    <p>Longitude: {{ loc.long }}</p>

    <button @click="getCurrentPosition">Get Current Location</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Geolocation } from "@capacitor/geolocation";
const loc = ref<{
  lat: null | number;
  long: null | number;
}>({
  lat: null,
  long: null,
});

async function getCurrentPosition() {
  const pos = await Geolocation.getCurrentPosition();
  loc.value = {
    lat: pos.coords.latitude,
    long: pos.coords.longitude,
  };
};
</script>
