import {
  render, screen,
} from '@testing-library/vue';
import GenericList from '@/components/generics/lists/GenericList.vue';

describe('IncrementButton component', () => {
  test('renders a button', async () => {
    render(GenericList);

    expect(screen.getByRole('table')).toBeTruthy();
  });
});
