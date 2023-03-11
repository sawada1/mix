<template>
  <nav>
    <router-link to="/">wheather</router-link>
    <router-link to="/movies">movies</router-link>
    <router-link to="/incometracker">income</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
}
body{
  overflow-x: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  
}

nav {
  z-index: 111111;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 30px;
  background-color: skyblue;
  a {
    font-weight: bold;
    color: #fff;
   font-size: 20px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}


</style>
