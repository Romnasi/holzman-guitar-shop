import { render, screen, fireEvent, within } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { mockComments } from '../../const/mock';
import SearchBar from './search-bar';
import { defaultSortType } from '../../const/sort';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

const mockStore = configureMockStore();
const history = createMemoryHistory();

const mockGuitars = [
  {
    id: 1,
    name: 'Bass',
    vendorCode: 'SO757575',
    type: 'electric',
    description: 'Замечательный малобюджетный вариант, созданный для новичков, которые отдают предпочтение мелодичным стилям. Прекрасно звучат блюз и баллады, исполненные на этой гитаре. Акустические свойства весьма высоки, в отличие от ее стоимости.',
    previewImg: 'img/guitar-1.jpg',
    stringCount: 7,
    rating: 4,
    price: 17500,
  },
  {
    id: 2,
    name: 'CURT',
    vendorCode: 'TK129049',
    type: 'electric',
    description: 'Эргономичность гитары и качество сборки являются, пожалуй, её главными преимуществами. Идеальное расположение в руках музыканта дополняется прочностью конструкции из клёна.',
    previewImg: 'img/guitar-8.jpg',
    stringCount: 7,
    rating: 3.5,
    price: 29500,
  },
  {
    id: 3,
    name: 'Roman',
    vendorCode: 'RO',
    type: 'ukulele',
    description: 'Укулеле класса премиум от компании CURT, собравшая в себе все самые необходимые качесва: лёгкость корпуса, прочность струн и компактный размер.',
    previewImg: 'img/guitar-6.jpg',
    stringCount: 4,
    rating: 4,
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
});

const fakeApp = (
  <Provider store={store}>
    <SearchBar />
  </Provider>);

describe('Component: SearchBar', () => {
  it('should render input correctly', () => {
    render(fakeApp);


    expect(screen.getByText('Начать поиск')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('что вы ищите?')).toBeInTheDocument();
  });

  it('should allow a value to be in the input when the value is changed', () => {
    render(fakeApp);

    const input = screen.getByPlaceholderText('что вы ищите?') as HTMLInputElement;
    fireEvent.change(input, {target: {value: 'test'}});
    expect(input.value).toBe('test');
  });

  it('should clear the field after click the button', () => {
    render(fakeApp);

    const input = screen.getByPlaceholderText('что вы ищите?') as HTMLInputElement;
    const buttonClose = screen.getByText('Сбросить поиск');
    expect(buttonClose).toBeInTheDocument();
    fireEvent.change(input, {target: {value: 'test'}});
    expect(input.value).toBe('test');
    fireEvent.click(buttonClose);
    expect(input.value).toBe('');
  });

  it('should render empty product name list with fallback text', () => {
    render(fakeApp);

    const input = screen.getByPlaceholderText('что вы ищите?') as HTMLInputElement;
    fireEvent.change(input, {target: {value: 'wrong value'}});
    const { getByText } = within(screen.getByRole('listitem'));
    expect(getByText('Не найдено')).toBeInTheDocument();
  });

  it('should render product name list with value', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <SearchBar />
        </Router>
      </Provider>);

    const input = screen.getByPlaceholderText('что вы ищите?') as HTMLInputElement;
    fireEvent.change(input, {target: {value: 'Bass'}});
    const { queryByText, getByText } = within(screen.getByRole('listitem'));
    expect(queryByText('Не найдено')).not.toBeInTheDocument();
    expect(getByText('Bass')).toBeInTheDocument();
  });
});
