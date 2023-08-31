import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Missions from '../components/Missions';
import thunk from 'redux-thunk';

const mockStore = configureStore([thunk]);

describe('Missions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      missions: {
        missions:[
          {
            name: 'Test Mission 1',
            description: 'Test Description',
            reserved: false,
            id: 'test-id',
          },
          {
            name: 'Test Mission 2',
            description: 'Test Description 2',
            reserved: true,
            id: 'test-id 2',
          },
        ],
        pending: false,
        error: false,
      },
    });
  });

  test('Missions are rendered correctly', () => {
    const myMissions = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(myMissions).toMatchSnapshot();
  });

  test('render missions components correctlu', async() => {
    const { getByText } = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(getByText('Test Mission 1')).toBeInTheDocument();
    expect(getByText('Test Mission 2')).toBeInTheDocument();
    
  });
});
