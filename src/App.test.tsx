import { render, screen } from './test/test-utils';

import App from './App';

describe('<App/>', () => {
  it('renders the app', () => {
    render(<App />);
    expect(screen.getByText('Hello Template')).toBeInTheDocument();
  });
});
