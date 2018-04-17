<template>
  <div>
      <p>This is Help page</p>
      <div>{{ tekst }}</div>
      <router-link to="/">Back</router-link>
  </div>
</template>

<script>
import Main from './Main';
import {bus} from '../main';

export default {
    data() {
        return {
            tekst: ''
        };
    },
    created() {
        bus.$on('maindata', (data) => {
            this.tekst = data;
        }); 
    }
}


</script>

