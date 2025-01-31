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

        // По моему, дескрипторы тут вообще ничего не дают. У нас приватное поле, изменять его надо, 
        // поэтому воткнуть writable: false нельзя. Даже этот написанный в кооперации с нейронкой кусочек с дескрипторами 
        // абсолютно никак не защищает переменную, которая уже и без того неприкосновенна извне. Все, что мы добавили - 
        // наверное, фундамент для будущей архитектуры, это никак не помогает.
        // Я оставлю это на всякий случай тк это необходимо по условию 2.4, но сомневаюсь, что это нужно
        // Object.defineProperty(this, 'isIssued', {
        //     get: () => this.#isIssued,
        //     set: (value) => {
        //         if (typeof value === 'boolean') {
        //             this.#isIssued = value;
        //         } else {
        //             throw new Error('isIssued должно быть boolean');
        //         }
        //     },
        //     configurable: false, 
        //     enumerable: true 
        // });
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