import ReviewTemplate from '@/components/ReviewTemplate';
import { getBookBySlug } from '@/data/books';

export default function BeforeTheCoffeeGetsColdReview() {
  const book = getBookBySlug('before-the-coffee-gets-cold')!;
  return <ReviewTemplate book={book} />;
}