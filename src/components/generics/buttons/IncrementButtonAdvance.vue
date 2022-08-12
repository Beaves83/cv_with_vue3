<template>
<div>
    <p>Times clicked: {{ state.count }}</p>
    <button @click="increment">Increment</button>
</div>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: 'IncrementButtonAdvnace',

  setup() {
    const state = reactive({ count: 0 });

    function increment() {
      state.count += 1;
    }

    return {
      state,
      increment,
    };
  },
};
</script>
