import ReviewTemplate from '@/components/ReviewTemplate';
import { getBookBySlug } from '@/data/books';

export default function SevenDaysInJuneReview() {
  const book = getBookBySlug('seven-days-in-june')!;
  return <ReviewTemplate book={book} />;
}