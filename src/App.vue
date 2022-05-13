<template>
  <!-- <router-link to="/">Videos</router-link>
  <router-link to="/Contact">Contact</router-link> -->
  <router-view></router-view>
  <!-- <TaskIndex :data="data" /> -->
</template>

<script>
// import HelloWorldVue from './components/HelloWorld.vue';
// import TaskIndex from "./components/TaskIndex.vue";
// import VueRouter from 'vue-router'

export default {
  name: "App",
  
  components: {
    // TaskIndex,
  },
};
</script>

<style>
@import "./assets/css/style.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
