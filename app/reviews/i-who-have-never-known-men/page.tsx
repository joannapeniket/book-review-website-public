import ReviewTemplate from '@/components/ReviewTemplate';
import { getBookBySlug } from '@/data/books';

export default function IWhoHaveNeverKnownMenReview() {
  const book = getBookBySlug('i-who-have-never-known-men')!;
  return <ReviewTemplate book={book} />;
}