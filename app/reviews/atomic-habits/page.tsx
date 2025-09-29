import ReviewTemplate from '@/components/ReviewTemplate';
import { getBookBySlug } from '@/data/books';

export default function AtomicHabitsReview() {
  const book = getBookBySlug('atomic-habits')!;
  return <ReviewTemplate book={book} />;
}