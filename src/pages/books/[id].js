// book/[id].js

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const BookDetail = () => {
  const router = useRouter();
  const { id } = router.query; // Get the book ID from the URL query parameters
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetail = async () => {
      try {
        const res = await fetch(`https://softwium.com/api/books/${id}`);
        const data = await res.json();
        setBook(data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    if (id) {
      fetchBookDetail();
    }
  }, [id]);

  if (!book) {
    return <span className="loading loading-dots loading-lg"></span>
  }

  return (
    <div>
      <h1>Book Details</h1>
      <div>Title: {book.title}</div>
      <div>ISBN: {book.isbn}</div>
      <div>PageCount: {book.pageCount}</div>
      <div>Authors: {book.authors.join(', ')}</div>
    </div>
  );
};

export default BookDetail;
