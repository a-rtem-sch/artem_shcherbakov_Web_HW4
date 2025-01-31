import { Book } from './book.js';

export class EBook extends Book {
    #fileSize;
    #format;

    constructor(title, author, year, fileSize, format) {
        super(title, author, year);
        // через сеттер для проверки
        this.fileSize = fileSize;
        this.format = format; 
    }

    set fileSize(value) {
        if (typeof value === 'number' && value > 0) {
            this.#fileSize = value;
        } else {
            throw new Error('fileSize должен быть положительным');
        }
    }

    set format(value) {
        const valid = ['epub', 'pdf', 'mobi'];
        if (valid.includes(value)) {
            this.#format = value;
        } else {
            throw new Error(`Неверный формат: "${value}". Допустимые форматы: ${validFormats.join(', ')}`);
        }
    }



    get fileSize() {
        return this.#fileSize;
    }

    get format() {
        return this.#format;
    }

    toggleIssue() {
        console.log("Электронные книги всегда доступны.");
    }
}