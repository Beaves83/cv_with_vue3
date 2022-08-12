<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Hello Bibi"/>
    <IncrementButton />

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import IncrementButton from '@/components/generics/buttons/IncrementButton.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    IncrementButton,
  },
};
</script>
