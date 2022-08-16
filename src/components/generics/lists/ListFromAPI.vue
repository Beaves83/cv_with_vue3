<template>
 <h1>Vue 3 and Fetch Example</h1>

 <ul v-if="!loading && data && data.length">
    <!-- <li v-for="post of data">
      <p><strong></strong></p>
      <p></p>
    </li> -->
    {{data}}
  </ul>

  <p v-if="loading">
   Still loading..
  </p>
  <p v-if="error">

  </p>
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th>
                  Title
                </th>
                <th>
                  Studio
                </th>
                <th>
                  Year
                </th>
                <th>
                  Director
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in elements" v-bind:key="index">
                <td>
                  {{  }}
                </td>
                <td>
                  {{ }}
                </td>
                <td>
                  {{  }}
                </td>
                <td>
                  {{  }}
                </td>
                <!-- <td>
                  <a href="#">
                    Edit
                  </a>
                </td>
                <td>
                  <a href="#">
                    Delete
                  </a>
                </td> -->
              </tr>
            </tbody>
          </table>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'ListFromAPI',
  setup() {
    const data = ref(null);
    const loading = ref(true);
    const error = ref(null);

    function fetchData() {
      loading.value = true;
      debugger;
      // I prefer to use fetch
      // you can use use axios as an alternative
      return fetch('http://jsonplaceholder.typicode.com/posts', {
        method: 'get',
        headers: {
          'content-type': 'application/json',
        },
      })
        .then((res) => {
          // a non-200 response code
          debugger;
          if (!res.ok) {
            // create error instance with HTTP status text
            const error2 = new Error(res.statusText);
            error2.json = res.json();
            throw error2;
          }

          return res.json();
        })
        .then((json) => {
          // set the response data
          debugger;
          data.value = json.data;
        })
        .catch((err) => {
          debugger;
          error.value = err;
          // In case a custom JSON error response was provided
          if (err.json) {
            // return err.json.then((json) => {
            //   // set the JSON response message
            //   error.value.message = json.message;
            // });
          }
        })
        .then(() => {
          loading.value = false;
        });
    }

    onMounted(() => {
      fetchData();
    });

    return {
      data,
      loading,
      error,
    };
  },
};
</script>

<style scoped>
</style>
