<template>
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-gray-50">
      <tr>
        <th v-for="(header, index) in headers" :key="index">
            {{header}}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in elements" :key="index">
        <td v-for="(subItem, index) in item" :key="index">
          {{ subItem }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>

export default {
  name: 'GenericList',
  props: {
    elements: Object,
    headers: Object,
  },
};
</script>

<style scoped>
</style>
