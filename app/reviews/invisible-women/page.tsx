import ReviewTemplate from '@/components/ReviewTemplate';
import { getBookBySlug } from '@/data/books';

export default function InvisibleWomenReview() {
  const book = getBookBySlug('invisible-women')!;
  return <ReviewTemplate book={book} />;
}