import ReviewTemplate from '@/components/ReviewTemplate';
import { getBookBySlug } from '@/data/books';

export default function TheLetThemTheoryReview() {
  const book = getBookBySlug('the-let-them-theory')!;
  return <ReviewTemplate book={book} />;
}