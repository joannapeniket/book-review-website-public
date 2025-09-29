import ReviewTemplate from '@/components/ReviewTemplate';
import { getBookBySlug } from '@/data/books';

export default function SorrowAndBlissReview() {
  const book = getBookBySlug('sorrow-and-bliss')!;
  return <ReviewTemplate book={book} />;
}