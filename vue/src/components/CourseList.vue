<template>
  <div>
    welcome to course list {{ helloworld }}
  </div>
</template>

<script>
export default {
  name: 'course-list'
  ,data() {
    return {
      helloworld: 'Hello world'
    }
  }
  ,mounted() {
    console.log('course list successfully mounted');
    console.log(this.helloworld);
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
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
