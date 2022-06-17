import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from './modal';

describe('Component: Modal', () => {
  it('should render correctly', () => {
    const handleModalClose = jest.fn();
    render(
      <Modal isHiddenModal={false} modalClass={'test'} handleModalClose={handleModalClose} >
        <h1>This is modal content</h1>
      </Modal>);

    expect(screen.getByText(/This is modal content/i)).toBeInTheDocument();
    expect(screen.getByLabelText('Закрыть')).toBeInTheDocument();
  });

  it('should called handleModalClose when user keydown Escape', () => {
    const handleModalClose = jest.fn();
    render(
      <Modal isHiddenModal={false} modalClass={'test'} handleModalClose={handleModalClose} >
        <h1>This is modal content</h1>
      </Modal>);

    fireEvent.keyDown(window, {
      key: 'Escape',
      code: 'Escape',
      keyCode: 27,
      charCode: 27,
    });
    expect(handleModalClose).toBeCalledTimes(1);
  });

  it('should called handleModalClose when user click close button', () => {
    const handleModalClose = jest.fn();
    render(
      <Modal isHiddenModal={false} modalClass={'test'} handleModalClose={handleModalClose} >
        <h1>This is modal content</h1>
      </Modal>);

    userEvent.click(screen.getByLabelText('Закрыть'));
    expect(handleModalClose).toBeCalledTimes(1);
  });
});
