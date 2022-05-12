<template>
  <div id="app">
    <button @click="test">点击</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  methods: {
    test() {
      // const a = aaa;
      console.log(process.env);
      console.warn(process.env);
      console.error(process.env);
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  color: $test;
}
</style>
