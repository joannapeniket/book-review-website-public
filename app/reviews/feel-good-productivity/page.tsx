import ReviewTemplate from '@/components/ReviewTemplate';
import { getBookBySlug } from '@/data/books';

export default function FeelGoodProductivityReview() {
  const book = getBookBySlug('feel-good-productivity')!;
  return <ReviewTemplate book={book} />;
}