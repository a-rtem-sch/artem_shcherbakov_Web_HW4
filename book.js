export class Book {
    #title;
    #author;
    #year;
    #isIssued;

    constructor(title, author, year) {
        if (typeof title !== 'string' || title.trim() === '') {
            throw new Error('Title must be a non-empty string');
        }
        if (typeof author !== 'string' || author.trim() === '') {
            throw new Error('Author must be a non-empty string');
        }
        if (typeof year !== 'number' || year < 0) {
            throw new Error('Year must be a positive number');
        }

        this.#title = title;
        this.#author = author;
        this.#year = year;
        this.#isIssued = false;
    }

    get title() {
        return this.#title;
    }

    get author() {
        return this.#author;
    }

    get year() {
        return this.#year;
    }

    get isIssued() {
        return this.#isIssued;
    }

    toggleIssue() {
        this.#isIssued = !this.#isIssued;
    }
}
