<template>
  <base-container title="Vuex">
    <h3>{{finalCounter}}</h3>
    <button @click="addOne">Add 1</button>
    <button @click="increase10">Increase</button>

  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import {mapGetters, mapActions} from 'vuex'

export default {
  components: {
    BaseContainer,
  },
  computed: {
    // counter() {
    //   return this.$store.getters.finalCounter;
    // },
    ...mapGetters(['finalCounter'])
  },
  methods: {
    addOne() {
      this.$store.commit('increment');
    },
    increase10() {
      this.increase({value: 55})
    },
    ...mapActions(['increase'])
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