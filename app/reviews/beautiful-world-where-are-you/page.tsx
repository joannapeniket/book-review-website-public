import ReviewTemplate from '@/components/ReviewTemplate';
import { getBookBySlug } from '@/data/books';

export default function BeautifulWorldWhereAreYouReview() {
  const book = getBookBySlug('beautiful-world-where-are-you')!;
  return <ReviewTemplate book={book} />;
}