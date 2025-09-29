'use client';

import Image from 'next/image';
import { fictionBooks, nonFictionBooks, Book } from '@/data/books';

export default function Home() {

  const BookScrollSection = ({ title, books }: { title: string; books: Book[] }) => {
    return (
      <section className="mb-20 md:mb-28">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-akaroa-900 mb-10 md:mb-12 tracking-wide">{title}</h2>
        <div className="relative">
          <div
            className="flex overflow-x-auto gap-6 md:gap-8 pb-6 scrollbar-hide snap-x snap-mandatory scroll-smooth"
            style={{ paddingLeft: 'calc(50vw - 3rem)', paddingRight: 'calc(50vw - 3rem)' }}
          >
            {books.map((book) => (
              <div
                key={book.slug}
                className="flex-none w-44 md:w-52 group snap-start"
              >
                <div className="relative mb-4 overflow-hidden">
                  <Image
                    src={book.cover}
                    alt={`Cover of ${book.title}`}
                    width={300}
                    height={450}
                    className="w-full h-60 md:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-akaroa-50/90 backdrop-blur-sm rounded-full px-2 py-1">
                    <div className="flex text-akaroa-700 text-xs">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < book.rating ? "text-akaroa-700" : "text-akaroa-300"}>
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-lg md:text-xl font-medium text-akaroa-900 line-clamp-2 leading-tight">
                    {book.title}
                  </h3>
                  <p className="text-akaroa-600 text-sm font-light">by {book.author}</p>
                  <a
                    href={`/reviews/${book.slug}`}
                    className="inline-block text-akaroa-900 text-sm font-medium border-b border-akaroa-900 hover:border-akaroa-600 transition-colors duration-300 mt-3"
                  >
                    Read Review
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-akaroa-50 via-akaroa-100 to-akaroa-200">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <header className="text-center mb-20 md:mb-28">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-akaroa-900 mb-6 tracking-wide">
            Joanna&apos;s Book Reviews
          </h1>
          <p className="text-lg md:text-xl text-akaroa-700 max-w-3xl mx-auto font-light leading-relaxed">
            Welcome to my reading corner. Here I share thoughts on books I&apos;ve read,
            from page-turners to life-changers. Discover your next great read.
          </p>
        </header>

        <BookScrollSection title="Fiction" books={fictionBooks} />
        <BookScrollSection title="Non-Fiction" books={nonFictionBooks} />

        <section className="border-t border-akaroa-300 pt-16 md:pt-20 mt-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-akaroa-900 mb-8 tracking-wide">About My Reviews</h2>
            <p className="text-lg md:text-xl text-akaroa-700 leading-relaxed font-light">
              I&apos;m passionate about books across all genres — from literary fiction to self-help,
              thrillers to memoirs. My reviews focus on what made each book memorable (or forgettable),
              who might enjoy it, and the key takeaways that stuck with me. I believe every book
              has something to teach us, even if it&apos;s just what we don&apos;t like.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
