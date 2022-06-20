import ProductRate from './product-rate';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { mockGuitars, mockComments } from '../../const/mock';
import { CardType } from '../../const/rate';
import { getEvaluation } from '../../utils/rate';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore({
  DATA: {
    comments: mockComments,
  },
});

const testGuitarData = mockGuitars[0];

describe('Component: ProductRate', () => {
  it('should render correctly, if cardType = "CATALOG" render "ReviewCounter"', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <ProductRate
            rating={testGuitarData.rating}
            cardType={CardType.CATALOG}
            guitarId={testGuitarData.id}
          />
        </Router>
      </ Provider>);

    const evaluationText = screen.getByText(`Рейтинг: ${getEvaluation(testGuitarData.rating)}`);
    expect(evaluationText).toBeInTheDocument();
    expect(screen.getByText(/Всего оценок/i)).toBeInTheDocument();
  });
});
