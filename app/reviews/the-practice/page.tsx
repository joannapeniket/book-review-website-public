import ReviewTemplate from '@/components/ReviewTemplate';
import { getBookBySlug } from '@/data/books';

export default function ThePracticeReview() {
  const book = getBookBySlug('the-practice')!;
  return <ReviewTemplate book={book} />;
}