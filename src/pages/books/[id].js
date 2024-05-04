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
    return <span className="loading loading-dots loading-lg"></span>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {/* head */}
        <thead className="text-black">
          <tr>
            <th className=" hidden sm:table-cell"></th>
            <th>Title</th>
            <th>ISBN</th>
            <th>PageCount</th>
            <th>Authors</th>
          </tr>
        </thead>
        <tbody>
          {/* row */}
          <tr>
            <th className="hidden sm:table-cell">{book.id}</th>
            <td>{book.title}</td>
            <td>{book.isbn}</td>
            <td>{book.pageCount}</td>
            <td>{book.authors.join(', ')}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BookDetail;
