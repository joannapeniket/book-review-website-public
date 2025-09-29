import ReviewTemplate from '@/components/ReviewTemplate';
import { getBookBySlug } from '@/data/books';

export default function DeepWorkReview() {
  const book = getBookBySlug('deep-work')!;
  return <ReviewTemplate book={book} />;
}