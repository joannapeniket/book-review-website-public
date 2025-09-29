import ReviewTemplate from '@/components/ReviewTemplate';
import { getBookBySlug } from '@/data/books';

export default function LullabyReview() {
  const book = getBookBySlug('lullaby')!;
  return <ReviewTemplate book={book} />;
}