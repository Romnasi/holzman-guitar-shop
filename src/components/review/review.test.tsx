import { render, screen } from '@testing-library/react';
import Review from './review';
import { mockComments } from '../../const/mock';
import { getFormattedDate } from '../../utils/date';

describe('Component: Review', () => {
  const testCommentData = mockComments[0];
  it('should render correctly', () => {
    render(<Review {...testCommentData} />);

    expect(screen.getByText(testCommentData.userName)).toBeInTheDocument();
    expect(screen.getByText(getFormattedDate(testCommentData.createAt))).toBeInTheDocument();
    expect(screen.getByText(testCommentData.advantage)).toBeInTheDocument();
    expect(screen.getByText(testCommentData.disadvantage)).toBeInTheDocument();
    expect(screen.getByText(testCommentData.comment)).toBeInTheDocument();
  });
});
