import ReviewTemplate from '@/components/ReviewTemplate';
import { getBookBySlug } from '@/data/books';

export default function ManifestReview() {
  const book = getBookBySlug('manifest')!;
  return <ReviewTemplate book={book} />;
}