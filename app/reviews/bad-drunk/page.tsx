import ReviewTemplate from '@/components/ReviewTemplate';
import { getBookBySlug } from '@/data/books';

export default function BadDrunkReview() {
  const book = getBookBySlug('bad-drunk')!;
  return <ReviewTemplate book={book} />;
}