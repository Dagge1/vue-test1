<!-- defaultna komponenta, služi samo kao wrapper tj container za prikaz routa/stranica -->
<template>
  <div id="app">    <!-- id='app' ovdje treba -->
    <router-view/>  <!-- Vue router je kontejner koji služi za prikaz drugih routa (kao <div class="container>"-->
        
  </div>
</template>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
