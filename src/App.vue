<template>
  <base-container title="Vuex">
    <h3>{{counter}}</h3>
    <button @click="addOne">Add 1</button>
    <button @click="increase">Increase</button>

  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';

export default {
  components: {
    BaseContainer,
  },
  computed: {
    counter() {
      return this.$store.getters.finalCounter;
    }
  },
  methods: {
    addOne() {
      this.$store.commit('increment');
    },
    increase() {
      // this.$store.commit('increase', {value: 5});
      
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>