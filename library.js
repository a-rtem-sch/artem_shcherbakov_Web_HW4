export class Library {

    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    findBook(arg1, arg2) {
        switch (arguments.length) { // проверка аргументов, вместо некрасивого if-else лекций
            case 1: {
                const title = arg1;
                const book = this.books.find(b => b.title === title);
                if (book === undefined) {
                    throw new Error(`Книга с названием "${title}" не найдена`);
                }
                return book;
            }
            case 2: {
                const author = arg1;
                const year = arg2;
                const book = this.books.find(b => b.author === author && b.year === year);
                if (book === undefined) {
                    throw new Error(`Книга "${author}" "${year}" не найдена`);
                }
                return book;
            }
            default: {
                throw new Error('Неверное количество аргументов');
            }
        }
    }

    listAllBooks() {
        this.books.forEach(book => {
            console.log(`Название: ${book.title}, Автор: ${book.author}, Статус: ${book.isIssued ? 'Выдана' : 'Доступна'}`);
        });
    }
}