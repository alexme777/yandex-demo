'use strict';

class Submit {
    constructor(options) {
        this.id = options.id;
        this.text = options.text;
        this.type = options.type;
        this.name = options.name;
        this.value = options.value;
        this.className = options.class;
    }

    create() {
        const input = document.createElement('button');
        input.id = this.id;
        input.type = this.type;
        input.name = this.name;
        input.value = this.value;
        input.textContent = this.text;
        input.className = this.className;

        this.element = input;

        return this;
    }
}