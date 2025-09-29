import ReviewTemplate from '@/components/ReviewTemplate';
import { getBookBySlug } from '@/data/books';

export default function MakeItOursReview() {
  const book = getBookBySlug('make-it-ours')!;
  return <ReviewTemplate book={book} />;
}