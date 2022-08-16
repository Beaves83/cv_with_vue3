<template>
<div>
    <p>Times clicked: {{ count }}</p>
    <button @click="count++">Increment</button>
    <p v-if="count >= 3">Congrats! You clicked {{ count }} times in a row! </p>
</div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'IncrementButton',

  setup() {
    const count = ref(0);

    return {
      count,
    };
  },
};
</script>
