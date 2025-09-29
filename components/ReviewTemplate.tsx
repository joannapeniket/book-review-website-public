'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Book } from '@/data/books';

interface ReviewTemplateProps {
  book: Book;
}

export default function ReviewTemplate({ book }: ReviewTemplateProps) {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getRatingText = (rating: number) => {
    if (rating === 5) return "Perfect Read";
    if (rating === 4) return "Great Read";
    if (rating === 3) return "Good Read";
    return "Decent Read";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-akaroa-50 via-akaroa-100 to-akaroa-200">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Book Cover */}
          <div className={`relative transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="relative">
              <Image
                src={book.cover}
                alt={book.title}
                width={320}
                height={480}
                className="w-80 h-auto mx-auto shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
              />
              {/* Floating elements */}
              <div className="absolute -top-8 -right-8 w-20 h-20 bg-akaroa-200 rounded-full opacity-60 animate-pulse" />
            </div>
          </div>

          {/* Title and Rating */}
          <div className={`space-y-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div>
              <h1 className="font-serif text-6xl lg:text-7xl font-light text-akaroa-900 leading-tight">
                {book.title}
              </h1>
              <p className="text-2xl text-akaroa-700 font-light mt-4">by {book.author}</p>
            </div>

            {/* Interactive Rating */}
            <div className="flex items-center space-x-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-3xl transition-all duration-300 delay-${i * 100} hover:scale-125 cursor-pointer ${
                      i < book.rating ? 'text-akaroa-700 animate-pulse' : 'text-akaroa-300'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-lg font-medium text-akaroa-800">{getRatingText(book.rating)}</span>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-akaroa-100/60 backdrop-blur-sm rounded-lg p-4">
                <span className="text-akaroa-600">Genre</span>
                <p className="font-medium text-akaroa-900">{book.genre}</p>
              </div>
              <div className="bg-akaroa-100/60 backdrop-blur-sm rounded-lg p-4">
                <span className="text-akaroa-600">Pages</span>
                <p className="font-medium text-akaroa-900">{book.pages}</p>
              </div>
              <div className="bg-akaroa-100/60 backdrop-blur-sm rounded-lg p-4">
                <span className="text-akaroa-600">Published</span>
                <p className="font-medium text-akaroa-900">{book.publishYear}</p>
              </div>
              <div className="bg-akaroa-100/60 backdrop-blur-sm rounded-lg p-4">
                <span className="text-akaroa-600">Read</span>
                <p className="font-medium text-akaroa-900">{book.readDate}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Review Content */}
      <div className="relative py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Review Sections */}
          <div className="space-y-16">
            {/* What It's About */}
            <section className="relative">
              <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-akaroa-500 to-akaroa-700 rounded-full" />
              <h2 className="font-serif text-3xl font-medium text-akaroa-900 mb-6">What It&apos;s About</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-akaroa-800 leading-relaxed">
                  {book.summary}
                </p>
              </div>
            </section>

            {/* Themes */}
            <section className="relative">
              <div className="absolute -right-8 top-0 w-1 h-full bg-gradient-to-b from-akaroa-500 to-akaroa-700 rounded-full" />
              <h2 className="font-serif text-3xl font-medium text-akaroa-900 mb-6">Themes</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {book.themes.map((theme, index) => (
                  <div key={index} className="bg-akaroa-100 rounded-lg p-4 shadow-sm border border-akaroa-200">
                    <span className={`font-medium ${
                      index % 3 === 0 ? 'text-akaroa-700' :
                      index % 3 === 1 ? 'text-akaroa-800' : 'text-akaroa-900'
                    }`}>
                      {theme}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* My Thoughts */}
            <section className="relative bg-gradient-to-r from-akaroa-100 to-akaroa-200 rounded-2xl p-8">
              <h2 className="font-serif text-3xl font-medium text-akaroa-900 mb-6">My Thoughts</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-akaroa-800 leading-relaxed">
                  {book.review}
                </p>
              </div>
            </section>

            {/* Who Should Read This */}
            <section className="relative">
              <div className="absolute -right-8 top-0 w-1 h-full bg-gradient-to-b from-akaroa-600 to-akaroa-800 rounded-full" />
              <h2 className="font-serif text-3xl font-medium text-akaroa-900 mb-6">Who Should Read This</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-akaroa-100 rounded-xl p-6 shadow-lg border border-akaroa-200">
                  <h3 className="font-medium text-akaroa-900 mb-3">Perfect If You Love</h3>
                  <ul className="space-y-2 text-akaroa-800">
                    {book.perfectFor.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-akaroa-100 rounded-xl p-6 shadow-lg border border-akaroa-200">
                  <h3 className="font-medium text-akaroa-900 mb-3">Might Not Be For You If</h3>
                  <ul className="space-y-2 text-akaroa-800">
                    {book.notFor.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

          </div>

          {/* Back to Reviews */}
          <div className="text-center mt-16">
            <Link
              href="/"
              className="inline-flex items-center text-akaroa-700 hover:text-akaroa-900 transition-colors font-medium"
            >
              ← Back to all reviews
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}