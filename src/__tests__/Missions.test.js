import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Missions from '../components/Missions';

const mockStore = configureStore([]);

describe('Missions', () => {
  test('Missions are rendered correctly', () => {
    const store = mockStore({
      missions: {
        missions:[{
          name: 'Test Mission',
          description: 'Test Description',
          reserved: false,
          id: 'test-id',
        }],
        pending: false,
        error: false,
      },
    });

    const myMissions = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(myMissions).toMatchSnapshot();
  });
});
