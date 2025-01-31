import { Book } from './book.js'

export class EBook extends Book {
    #fileSize
    #format

    constructor(title, author, year, fileSize, format) {
        super(title, author, year);

        if (typeof fileSize !== 'number' || fileSize <= 0) {
            throw new Error('fileSize должен быть положительным');
        }
        const validFormats = ['epub', 'pdf', 'mobi'];
        if (!validFormats.includes(format)) {
            throw new Error(`Неверный формат: '${format}'. Допустимые форматы: ${validFormats.join(', ')}`);
        }

        this.#fileSize = fileSize;
        this.#format = format;
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
            throw new Error(
                `Неверный формат: '${value}'. Допустимые форматы: ${valid.join(', ')}`
            );
        }
    }

    get fileSize() {
        return this.#fileSize;
    }

    get format() {
        return this.#format;
    }

    toggleIssue() {
        console.log('Электронные книги всегда доступны.');
    }
}
