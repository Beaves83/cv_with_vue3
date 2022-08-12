<template>
<div>
    <p>Times clicked: {{ count }}</p>
    <button @click="count++">Increment</button>
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
