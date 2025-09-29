import ReviewTemplate from '@/components/ReviewTemplate';
import { getBookBySlug } from '@/data/books';

export default function CreativeActReview() {
  const book = getBookBySlug('creative-act')!;
  return <ReviewTemplate book={book} />;
}