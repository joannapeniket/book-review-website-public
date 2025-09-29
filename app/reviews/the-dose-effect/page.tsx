import ReviewTemplate from '@/components/ReviewTemplate';
import { getBookBySlug } from '@/data/books';

export default function TheDoseEffectReview() {
  const book = getBookBySlug('the-dose-effect')!;
  return <ReviewTemplate book={book} />;
}