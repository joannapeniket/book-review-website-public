import ReviewTemplate from '@/components/ReviewTemplate';
import { getBookBySlug } from '@/data/books';

export default function QuitLikeAWomanReview() {
  const book = getBookBySlug('quit-like-a-woman')!;
  return <ReviewTemplate book={book} />;
}