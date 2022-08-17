<template>
 <h1 >Vue 3 and Fetch Example</h1>
 <table v-if="!loading && data && data.length">
  <thead>
    <tr>
      <th> ID </th>
      <th> name </th>
      <th> email </th>
      <th> city </th>
      <th> address </th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item, index) of data" v-bind:key="index">
      <td><strong>{{item.id}}</strong></td>
      <td>{{item.name}}</td>
      <td>{{item.email}}</td>
      <td>{{item.address.city}}</td>
      <td>{{item.address.street}} {{item.address.suite}}</td>
    </tr>
  </tbody>
  </table>
  <p v-if="loading && !error">
   Still loading..
  </p>
  <p v-if="error">
    Error while we are getting the data.
  </p>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'ListFromAPI',
  setup() {
    const data = ref(null);
    const loading = ref(true);
    const error = ref(null);

    const headers = {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };

    function fetchData() {
      loading.value = true;
      fetch('https://jsonplaceholder.typicode.com/users/', {
        method: 'get',
        headers,
      })
        .then((res) => res.json())
        .then((res) => {
          if (!res.ok) {
            error.value = new Error(res.statusText);
          }
          data.value = res;
        })
        .then(() => { loading.value = false; });
    }

    onMounted(() => {
      fetchData();
    });

    return {
      data,
      loading,
      error,
      fetchData,
    };
  },
};
</script>

<style scoped>
</style>
