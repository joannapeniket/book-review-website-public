import ReviewTemplate from '@/components/ReviewTemplate';
import { getBookBySlug } from '@/data/books';

export default function NotesOnHeartbreakReview() {
  const book = getBookBySlug('notes-on-heartbreak')!;
  return <ReviewTemplate book={book} />;
}