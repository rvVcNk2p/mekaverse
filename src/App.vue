<template>
  <div id="app">
    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
/** App Component */
export default class App extends Vue {
  /** Before create */
  beforeCreate() {
    document.title = import.meta.env.VITE_APP_TITLE;
  }
}
</script>

<style lang="scss">
@import './assets/styles/variables.scss';

body {
  margin: 0;
  padding: 0;
  font-family: $global__font-family;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
