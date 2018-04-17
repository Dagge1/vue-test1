<template>
  <div> <!-- ovdje ne treba id="app" jer već je u App koji je wrapper za sve druge stranice i komponente -->
      <h3 v-on:click="sendEvent">Default main page - click to emit event</h3>
      <p>{{ word }}</p>
      <router-link to="/help">Help page</router-link> <!-- ovako stavljaj route linkove, može i ovako.. target="_blank" -->
  
  </div>
</template>

<script>
import {bus} from '../main';

export default {
    methods: {
        sendEvent() {
            bus.$emit('maindata', 'This is data from Main.vue')
        }
    },
    data() {
        return {
            word: ''
        }
    },
    created() {
        bus.$on('maindata', give => {
            this.word = give;
        });
    } 
}
</script> 



<!-- <style> uzima defaultni css iz App.vue, ako želiš css samo za tu komponentu stavi <style scoped>..</style> -->