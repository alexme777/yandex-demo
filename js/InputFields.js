'use strict';

class InputField {
    constructor(options) {
        this.id = options.id;
        this.__containerId = '';
        this.type = options.type;
        this.name = options.name;
        this.value = options.value;
        this.className = options.class;
        this.validator = options.validator;
        this.placeholder = options.placeholder;
    }

    create() {
        const container = document.createElement('div');
        this.__containerId = this.__generateContainerId();
        container.id = this.__containerId;

        const input  = document.createElement('input');
        input.id = this.id;
        input.type = this.type;
        input.name = this.name;
        input.value = this.value;
        input.className = this.className;
        input.placeholder = this.placeholder;

        input.addEventListener('input', (event) => {
            this.value = event.target.value;
            this.validate();
        });

        container.appendChild(input);

        const nodeError = document.createElement('div');
        nodeError.className = 'popup__input-error';
        container.appendChild(nodeError);

        this.element = container;

        return this;
    }

    validate() {
        const result = this.validator(this.value);
        const container = document.querySelector('#' + this.__containerId + ' .popup__input-error');
        container.textContent = (!result.isValid) ? result.result : '';
        this.isValid = result.isValid;

        return this;
    }

    __generateContainerId() {
        return 'container_' + Math.random().toString(36).substr(2, 9);
    }
}