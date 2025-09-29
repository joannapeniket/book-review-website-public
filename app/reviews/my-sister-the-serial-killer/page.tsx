import ReviewTemplate from '@/components/ReviewTemplate';
import { getBookBySlug } from '@/data/books';

export default function MySisterTheSerialKillerReview() {
  const book = getBookBySlug('my-sister-the-serial-killer')!;
  return <ReviewTemplate book={book} />;
}