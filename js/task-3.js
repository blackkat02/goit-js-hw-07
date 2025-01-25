class StringBuilder {
    #value;

    constructor(initialValue) {
        this.#value = initialValue;
    }

    getValue() {
        return this.#value;
    }

    padEnd(str) {
        this.#value = str + this.#value;
    }

    padStart(str) {
        this.#value += str;
    }

    padBoth(str) {
        this.#value = this.#value + str + this.#value;
    }

    // removeItem(itemToRemove) {
    //   const indexItemToRemove = this.#items.indexOf(itemToRemove);
    //   if (indexItemToRemove !== -1) {
    //     this.#items.splice(indexItemToRemove, 1);
    //   }
    // }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
