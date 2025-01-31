export class Book {
    #title;
    #author;
    #year;
    #isIssued;

    constructor(title, author, year) {
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