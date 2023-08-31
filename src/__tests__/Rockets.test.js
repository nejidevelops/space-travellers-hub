import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Rockets from '../components/Rockets';

const mockStore = configureStore([]);

describe('Rockets', () => {
  test('Rockets are rendered succesfully', () => {
    const store = mockStore({
      rockets: {
        rockets: [{
          name: 'Test Mission',
          description: 'Test Description',
          reserved: false,
          id: 'test-id',
        }],
        pending: false,
        error: false,
      },
    });

    const myRockets = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(myRockets).toMatchSnapshot();
  });
});
