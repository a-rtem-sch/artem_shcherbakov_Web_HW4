import { Book } from './book.js';
import { EBook } from './ebook.js';
import { Library } from './library.js';

const library = new Library();

let book1, ebook1;

try {
    book1 = new Book('TestValue1', 'TestAuthor1', 2010);
    book1.toggleIssue();
} catch (error) {
    console.log(error.message + ":: Неверно задана книга book1");
}

try {
    ebook1 = new EBook('TestValue2', 'TestAuthor2', 2000, 1, 'pdf'); 
} catch (error) {
    console.log(error.message + ":: Неверно задана книга ebook1");
}


if (book1) {
    library.addBook(book1);
}

if (ebook1) {
    library.addBook(ebook1);
}

library.listAllBooks();


try {
    const foundBook = library.findBook('TestValue1');
    console.log(`Найдена книга: ${foundBook.title}`);
} catch (error) {
    console.error(error.message);
}


try {
    const foundBook = library.findBook('TestAuthor2', 2000);
    console.log(`Найдена книга: ${foundBook.title}`);
} catch (error) {
    console.error(error.message);
}

try {
    const foundBook = library.findBook('TestAuthor2', 1900);
    console.log(`Найдена книга: ${foundBook.title}`);
} catch (error) {
    console.error(error.message);
}