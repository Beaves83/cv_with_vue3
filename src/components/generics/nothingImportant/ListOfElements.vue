<template>
<div>
    <p>The author is : <strong>{{ fullName }} </strong></p>
    <p>Has published books:</p>
    <span>{{ publishedBooksMessage }}</span>
    <h2>The date now is: <small>{{now}}</small></h2>
</div>
</template>

<script>
import { reactive, computed, ref } from 'vue';

export default {
  name: 'IncrementButtonAdvnace',

  setup() {
    const firstName = ref('John');
    const lastName = ref('Doe');

    const author = reactive({
      name: 'John Doe',
      books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery',
      ],
    });

    const now = computed(() => Date.now());

    const publishedBooksMessage = computed(() => (author.books.length > 0 ? 'Yes' : 'No'));

    const fullName = computed({
      get() {
        return `${firstName.value} ${lastName.value}`;
      },

      set(newValue) {
        // Note: we are using destructuring assignment syntax here.
        [firstName.value, lastName.value] = newValue.split(' ');
      },
    });

    return {
      publishedBooksMessage,
      now,
      fullName,
    };
  },
};
</script>
