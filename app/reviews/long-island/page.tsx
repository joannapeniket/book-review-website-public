import ReviewTemplate from '@/components/ReviewTemplate';
import { getBookBySlug } from '@/data/books';

export default function LongIslandReview() {
  const book = getBookBySlug('long-island')!;
  return <ReviewTemplate book={book} />;
}