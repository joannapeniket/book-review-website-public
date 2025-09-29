import ReviewTemplate from '@/components/ReviewTemplate';
import { getBookBySlug } from '@/data/books';

export default function AnAmericanMarriageReview() {
  const book = getBookBySlug('an-american-marriage')!;
  return <ReviewTemplate book={book} />;
}