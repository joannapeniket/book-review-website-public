import ReviewTemplate from '@/components/ReviewTemplate';
import { getBookBySlug } from '@/data/books';

export default function WhyHasNobodyToldMeThisBeforeReview() {
  const book = getBookBySlug('why-has-nobody-told-me-this-before')!;
  return <ReviewTemplate book={book} />;
}