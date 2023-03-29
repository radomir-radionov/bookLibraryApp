import { BookProps } from 'types/book';

const getFilteredBooks = (booksData: BookProps[], enteredText: string, isRating: boolean, category: string) => {
  let filteredBooks: BookProps[] = [];

  filteredBooks = booksData.filter(({ title }) => {
    return title.toLowerCase().includes(enteredText.toLowerCase());
  });

  if (isRating) {
    filteredBooks = filteredBooks.sort((book1: BookProps, book2: BookProps) => {
      return (book2.rating ?? 0) - (book1.rating ?? 0);
    });
  }

  filteredBooks = filteredBooks.filter((elem) => {
    if (category !== 'Все книги') {
      return elem.title.toLowerCase().includes(enteredText.toLowerCase()) && elem.categories?.includes(category);
    }

    return elem.title.toLowerCase().includes(enteredText.toLowerCase());
  });

  return filteredBooks;
};

export default getFilteredBooks;
