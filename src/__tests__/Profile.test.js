import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import MyProfile from '../components/Profile';

const mockStore = configureStore([]);

describe('Profile', () => {
  let store;
  beforeEach(()=> {
    store = mockStore({
      missions: {
        missions:[
          {
            name: 'Test Mission',
            description: 'Test Description',
            reserved: false,
            id: 'test-id',
          },
          {
            name: 'Test Mission 2',
            description: 'Test Description 2',
            reserved: true,
            id: 'test-id 2',
          }
        ],
        pending: false,
        error: false,
      },
      rockets: {
        rockets: [
          {
            name: 'Test Rocket 1',
            description: 'Test Description 1',
            reserved: true,
            id: 'test-id 1',
          },
          {
            name: 'Test Rocket 2',
            description: 'Test Description 2',
            reserved: false,
            id: 'test-id 2',
          }
        ],
        pending: false,
        error: false,
      }
    });
  })

  test('MissionCard rendered correctly', () => {
    const myProfile = render(
      <Provider store={store}>
        <MyProfile/>
      </Provider>,
    );
    expect(myProfile).toMatchSnapshot();
  });

  test('Only display reserved rockets and missions', ()=> {
    const { getByText } = render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );
  
    expect(getByText('Test Mission 2')).toBeInTheDocument();
    expect(getByText('Test Rocket 1')).toBeInTheDocument();
  });
});
