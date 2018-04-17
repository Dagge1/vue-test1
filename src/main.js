// glavni kontrolni js fajl, sadrži App container sa 'router-view' router wrapperom koji će prikazivati route tj stranice unutar te template
import Vue from 'vue'
import App from './App.vue'  // container za prikaz stranica (routa)
import router from './router'  // index.js fajl sa routama (na se ne zove index.js trebalo bi napisati full path sa nazivom fajla)

export const bus = new Vue(); // Global event bus - za pohranu i razmjenu podataka u componentama

new Vue({
  el: '#app',
  router,
  components: {App},  // defaultna komponenta sa router-view wrapperom tj templatom bez sadržaja
  template: '<App></App>'
  /*
  render: function (createElement) { // shorthand je render: /h => h(App).. vidi moj .doc
    return createElement(App);    // vidi https://vuejs.org/v2/guide/render-function.html
  } */ 
});
