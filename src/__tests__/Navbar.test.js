import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Navbar from '../components/Navbar';

const mockStore = configureStore([]);

describe('Navbar', () => {
  test('Navbar rendered correctly', () => {
    const store = mockStore({
      missions: {
        missions: [
          {
            name: 'Test Mission',
            description: 'Test Description',
            reserved: false,
            id: 'test-id',
          },
        ],
        pending: false,
        error: false,
      },
    });
    const navbar = render(
      <Provider store={store}>
        <Router>
          <Navbar />
        </Router>
      </Provider>,
    );
    expect(navbar).toMatchSnapshot();
  });
});
