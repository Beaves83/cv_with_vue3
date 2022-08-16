<template>

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
                  {{ item.title }}
                </td>
                <td>
                  {{ item.studio }}
                </td>
                <td>
                  {{ item.year }}
                </td>
                <td>
                  {{ item.director }}
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
// import { ref } from "vue";

export default {
  name: 'GenericList',
  props: {
    elements: Object,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
</style>
