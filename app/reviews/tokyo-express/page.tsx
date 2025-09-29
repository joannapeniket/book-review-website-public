import ReviewTemplate from '@/components/ReviewTemplate';
import { getBookBySlug } from '@/data/books';

export default function TokyoExpressReview() {
  const book = getBookBySlug('tokyo-express')!;
  return <ReviewTemplate book={book} />;
}