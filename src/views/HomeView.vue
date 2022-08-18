<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <IncrementButton />
    <br />
    <br />
    <br />
    <GenericList :elements="films" :headers="headers" />
    <br />
    <br />
    <br />
    <ListFromAPI />
  </div>
</template>

<script>
import films from '@/json/films.json';
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import IncrementButton from '@/components/generics/buttons/IncrementButton.vue';
import GenericList from '@/components/generics/lists/GenericList.vue';
import ListFromAPI from '@/components/generics/lists/ListFromAPI.vue';

export default {
  name: 'HomeView',
  components: {
    IncrementButton,
    GenericList,
    ListFromAPI,

  },
  setup() {
    return {
      films,
      headers: ['Title', 'Company', 'Year', 'Director', 'Characters'],
    };
  },
};
</script>
