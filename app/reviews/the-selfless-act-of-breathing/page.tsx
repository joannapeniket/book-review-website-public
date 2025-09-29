import ReviewTemplate from '@/components/ReviewTemplate';
import { getBookBySlug } from '@/data/books';

export default function TheSelflessActOfBreathingReview() {
  const book = getBookBySlug('the-selfless-act-of-breathing')!;
  return <ReviewTemplate book={book} />;
}