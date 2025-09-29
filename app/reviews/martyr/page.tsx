import ReviewTemplate from '@/components/ReviewTemplate';
import { getBookBySlug } from '@/data/books';

export default function MartyrReview() {
  const book = getBookBySlug('martyr')!;
  return <ReviewTemplate book={book} />;
}