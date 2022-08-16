import {
  render, screen, fireEvent,
} from '@testing-library/vue';
import IncrementButtonAdvance from '@/components/generics/buttons/IncrementButtonAdvance.vue';

describe('IncrementButtonAdvance component', () => {
  test('renders a button', async () => {
    render(IncrementButtonAdvance);

    expect(screen.getByRole('button', { name: 'Increment' })).toBeTruthy();
  });

  test('renders a title indicating the number of clicks', async () => {
    render(IncrementButtonAdvance);

    expect(screen.getByText('Times clicked: 0')).toBeTruthy();
  });

  test('increments value on click', async () => {
    render(IncrementButtonAdvance);

    const button = screen.getByRole('button', { name: 'Increment' });

    // Click a couple of times.
    await fireEvent.click(button);
    await fireEvent.click(button);

    expect(screen.queryByText('Times clicked: 2')).toBeTruthy();
  });
});
