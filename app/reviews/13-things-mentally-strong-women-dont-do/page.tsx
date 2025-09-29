import ReviewTemplate from '@/components/ReviewTemplate';
import { getBookBySlug } from '@/data/books';

export default function ThirteenThingsMentallyStrongWomenDontDoReview() {
  const book = getBookBySlug('13-things-mentally-strong-women-dont-do')!;
  return <ReviewTemplate book={book} />;
}