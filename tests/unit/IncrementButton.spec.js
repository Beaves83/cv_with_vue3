
import {
  render, screen, fireEvent,
} from '@testing-library/vue';
import IncrementButton from '@/components/generics/buttons/IncrementButton.vue';

describe('IncrementButton component', () => {
  test('renders a button', async () => {
    render(IncrementButton);

    expect(screen.getByRole('button', { name: 'Increment' })).toBeTruthy();
  });

  test('renders a title indicating the number of clicks', async () => {
    render(IncrementButton);

    expect(screen.getByText('Times clicked: 0')).toBeTruthy();
  });

  test('increments value on click', async () => {
    render(IncrementButton);

    const button = screen.getByRole('button', { name: 'Increment' });

    // Click a couple of times.
    await fireEvent.click(button);
    await fireEvent.click(button);

    expect(screen.getByText('Times clicked: 2')).toBeTruthy();
  });

  test('renders a congrat message if the user increments the value 3 or more times', async () => {
    render(IncrementButton);

    const button = screen.getByRole('button', { name: 'Increment' });

    await fireEvent.click(button);
    await fireEvent.click(button);
    await fireEvent.click(button);

    expect(screen.getByText('Congrats! You clicked 3 times in a row!')).toBeTruthy();

    await fireEvent.click(button);

    expect(screen.getByText('Congrats! You clicked 4 times in a row!')).toBeTruthy();
  });

  test('does not render a congrat message if the user increments the value fewer than 3 times', async () => {
    render(IncrementButton);

    const button = screen.getByRole('button', { name: 'Increment' });

    await fireEvent.click(button);

    expect(screen.queryByText(/Congrats! You/)).not.toBeTruthy();
  });
});
