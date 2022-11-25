<template>
  <div id="app">
    course list application
    <router-link :to="{name : 'course-list'}">course</router-link>
  </div>
</template>

<script>
  export default {
    name: "app",
    mounted() {
      console.log('app mounted successfully');
    }
  }
</script>