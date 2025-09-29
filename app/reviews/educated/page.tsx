import ReviewTemplate from '@/components/ReviewTemplate';
import { getBookBySlug } from '@/data/books';

export default function EducatedReview() {
  const book = getBookBySlug('educated')!;
  return <ReviewTemplate book={book} />;
}