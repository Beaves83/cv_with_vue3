<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Hello Bibi"/> -->
    <IncrementButton />
    <IncrementButtonAdvance />
    <ListsOfElements />

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import IncrementButton from '@/components/generics/buttons/IncrementButton.vue';
import IncrementButtonAdvance from '@/components/generics/buttons/IncrementButtonAdvance.vue';
import ListsOfElements from '@/components/generics/nothingImportant/ListOfElements.vue';

export default {
  name: 'HomeView',
  components: {
    // HelloWorld,
    IncrementButton,
    IncrementButtonAdvance,
    ListsOfElements,

  },
};
</script>
