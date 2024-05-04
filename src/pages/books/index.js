// // pages/books/index.js

// import Link from 'next/link';

// const BooksPage = ({ books }) => {
//   return (
//     <div>
//       <h1>Books</h1>
//       <ul>
//         {books.map((book) => (
//           <li key={book.id}>
//             <Link href={`/books/${book.id}`}>
//               {book.title}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export async function getStaticProps() {
//   try {
//     // Fetch books data from API
//     const res = await fetch('https://softwium.com/api/books');
//     const books = await res.json();

//     return {
//       props: {
//         books,
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching books:', error);
//     return {
//       props: {
//         books: [],
//       },
//     };
//   }
// }

// export default BooksPage;


// pages/books/index.js

// pages/books/index.js

import Link from 'next/link';

const BooksPage = ({ books }) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Books Title</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book.id} className={index % 2 === 0 ? 'bg-base-200' : ''}>
                <th>{index + 1}</th>
                <td>
                  <Link href={`/books/${book.id}`} className='link link-primary'>
                    {book.title}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  try {
    // Fetch books data from API
    const res = await fetch('https://softwium.com/api/books');
    const books = await res.json();

    return {
      props: {
        books,
      },
    };
  } catch (error) {
    console.error('Error fetching books:', error);
    return {
      props: {
        books: [],
      },
    };
  }
}

export default BooksPage;
