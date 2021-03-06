import { render, screen, cleanup } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import CatalogSort from './catalog-sort';
import { mockComments } from '../../const/mock';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { defaultSortType } from '../../const/sort';

const mockStore = configureMockStore();
const history = createMemoryHistory();

const mockGuitars = [
  {
    id: 2,
    name: 'High price',
    vendorCode: 'TK129049',
    type: 'electric',
    description: 'Эргономичность гитары и качество сборки являются, пожалуй, её главными преимуществами. Идеальное расположение в руках музыканта дополняется прочностью конструкции из клёна.',
    previewImg: 'img/guitar-8.jpg',
    stringCount: 7,
    rating: 3.5,
    price: 29500,
  },
  {
    id: 1,
    name: 'Medium Price',
    vendorCode: 'SO757575',
    type: 'electric',
    description: 'Замечательный малобюджетный вариант, созданный для новичков, которые отдают предпочтение мелодичным стилям. Прекрасно звучат блюз и баллады, исполненные на этой гитаре. Акустические свойства весьма высоки, в отличие от ее стоимости.',
    previewImg: 'img/guitar-1.jpg',
    stringCount: 7,
    rating: 4,
    price: 15000,
  },
  {
    id: 3,
    name: 'Low Price',
    vendorCode: 'RO111111',
    type: 'ukulele',
    description: 'Укулеле класса премиум от компании CURT, собравшая в себе все самые необходимые качесва: лёгкость корпуса, прочность струн и компактный размер.',
    previewImg: 'img/guitar-6.jpg',
    stringCount: 4,
    rating: 1,
    price: 6800,
  },
];

const store = mockStore({
  DATA: {
    isDataLoaded: true,
    isCommentsLoaded: true,
    guitars: mockGuitars,
    comments: mockComments,
    curPagination: 1,
    guitarNumber: 3,
    curGuitar: null,
    sortType: defaultSortType,
  },
  FILTER: {
    priceMin: '',
    priceMax: '',
    isActive: false,
    guitarType: {
      acoustic: false,
      electric: false,
      ukulele: false,
    },
    strings: {
      fourStrings: false,
      sixStrings: false,
      sevenStrings: false,
      twelveStrings: false,
    },
  },
});

const fakeApp = (
  <Provider store={store}>
    <Router history={history}>
      <CatalogSort />
    </Router>
  </Provider>);

afterEach(cleanup);

describe('Component: CatalogSort', () => {
  it('should render correctly', () => {
    render(fakeApp);

    expect(screen.getByText(/Сортировать/i)).toBeInTheDocument();
    expect(screen.getByLabelText('по цене')).toBeInTheDocument();
    expect(screen.getByLabelText('по популярности')).toBeInTheDocument();
    expect(screen.getByLabelText('По возрастанию')).toBeInTheDocument();
    expect(screen.getByLabelText('По убыванию')).toBeInTheDocument();
  });
});
