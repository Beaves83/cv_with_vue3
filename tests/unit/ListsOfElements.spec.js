import {
  render, screen,
} from '@testing-library/vue';
import ListOfElements from '@/components/generics/nothingImportant/ListOfElements.vue';

test('increments value on click', async () => {
  render(ListOfElements);

  expect(screen.queryByText('The author is :')).toBeTruthy();

  expect(screen.queryByText('Has published books:')).toBeTruthy();

  expect(screen.queryByText('The date now is:')).toBeTruthy();

  //Tengo que chequear después de que se hayan ejecutados las computadas
});
