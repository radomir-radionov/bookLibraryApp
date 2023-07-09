import { TBook } from 'types/book';
import { TCategory, TExtendedCategory } from 'types/categories';

export const createCategories = (books: TBook[], categories: TCategory[]) => {
  const quantity = {} as { [key: string]: number };

  books.forEach((book) => {
    book.categories &&
      book.categories.forEach((category) => {
        if (quantity[category]) {
          quantity[category] += 1;
        } else {
          quantity[category] = 1;
        }
      });
  });

  const extendedCategories = [] as TExtendedCategory[];

  categories.forEach((category, index) => {
    return index === 0
      ? extendedCategories.push(
          { id: 0, name: 'Все книги', path: 'all' },
          { ...category, quantity: quantity[category.name] }
        )
      : extendedCategories.push({ ...category, quantity: quantity[category.name] });
  });

  extendedCategories.map((category) => {
    if (category.name === 'Все книги') {
      return category.quantity;
    }

    return category.quantity === undefined && category.name === 'Другое'
      ? (category.quantity = 0)
      : category.quantity === undefined && category.name
      ? (category.quantity = 0)
      : (category.quantity = category.quantity);
  });

  return extendedCategories;
};

export const getСurrentCategory = (category: string, categories: TCategory[], books: TBook[]) => {
  const navCategories = createCategories(books, categories);

  return navCategories.filter((item) => item.path === category)[0]?.name;
};
