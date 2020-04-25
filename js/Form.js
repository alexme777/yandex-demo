'use strict';

class Form {
    constructor(formFields, options) {
        this.isValid = false;
        this.name = options.name;
        this.fields = formFields;
        this.className = options.class;
        this.textSubmit = options.textSubmit;
        this.classButton = options.classButton;
        this.submitCallback = options.submitCallback;
    }

    create = () => {
        const form = document.createElement('form');
        form.name = this.name;
        form.className = this.className;

        this.fields.forEach((field) => {
            const fieldNode = field.create();
            fieldNode.element.addEventListener('input', (event) => {
                field.value = event.target.value;
                this.validate();
            });
            form.appendChild(fieldNode.element);
        });

        const submit = new Submit({
            type: 'submit',
            class: this.classButton,
            text: this.textSubmit,
            value: true,
        });
        const submitNode = submit.create();

        form.appendChild(submitNode.element);

        form.addEventListener('submit', (event) => {
            this.__onSubmit(event);
        });

        this.element = form;

        return this;
    }

    validate() {
        const results = [];
        this.fields.forEach((input) => results.push(input.validate()));

        const errors = results.filter((field) =>
            field.isValid === false
        );

        if (errors.length > 0) {
            this.element.querySelector('.popup__button').classList.remove('popup__button_enable');
            this.isValid = false;
        } else {
            this.element.querySelector('.popup__button')
                .classList.add('popup__button_enable');
            this.isValid = true;
        }

        return this;
    }

    __onSubmit(event) {
        event.preventDefault();

        if (!this.isValid)
            return false;

        const values = this.fields.map((field) => {
            if (field.value)
                return field.value;
        });

        this.submitCallback(...values);
    }
}