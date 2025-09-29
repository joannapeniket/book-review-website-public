import ReviewTemplate from '@/components/ReviewTemplate';
import { getBookBySlug } from '@/data/books';

export default function ConfidenceReview() {
  const book = getBookBySlug('confidence')!;
  return <ReviewTemplate book={book} />;
}