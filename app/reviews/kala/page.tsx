import ReviewTemplate from '@/components/ReviewTemplate';
import { getBookBySlug } from '@/data/books';

export default function KalaReview() {
  const book = getBookBySlug('kala')!;
  return <ReviewTemplate book={book} />;
}