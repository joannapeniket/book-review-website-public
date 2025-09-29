import ReviewTemplate from '@/components/ReviewTemplate';
import { getBookBySlug } from '@/data/books';

export default function TheArtistsWayReview() {
  const book = getBookBySlug('the-artists-way')!;
  return <ReviewTemplate book={book} />;
}