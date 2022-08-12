import { mount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

// We define what the test we are going to carry out is about
describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = mount(HelloWorld, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });

  // it( 'Check if the component is painted', () => {

  // });
});
