import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';

const store = createStore({
  state () {
    return {
      counter: 0
    }
  },
  mutations: {
    increment(state) {
        state.counter+=3;
    },
    increase(state, payload) {
        state.counter+=payload.value;
    }
  },
  getters: {
        finalCounter(state) {
            return state.counter;
        }
    },
    actions: {
        increase(context,payload) {
            context.commit('increase', payload)
        }
    }
})

const app = createApp(App);
app.use(store);
app.mount('#app');
