import ReviewTemplate from '@/components/ReviewTemplate';
import { getBookBySlug } from '@/data/books';

export default function BrooklynReview() {
  const book = getBookBySlug('brooklyn')!;
  return <ReviewTemplate book={book} />;
}