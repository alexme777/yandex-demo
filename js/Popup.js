class Popup {
    constructor(popup) {
        this.popup = popup;
    }

    open(el) {
        if (this.popup.type === 'content') {
            this.__renderPopupContent(el);
        } else if (this.popup.type === 'image') {
            this.__renderPopupImage(el);
        }
    }

    __renderPopupContent(el) {
        const container = this.__buildContainer();

        const content = document.createElement('div');
        content.classList.add('popup__content');

        const closeButton = this.__buildCloseButton();

        const titleNode = document.createElement('h3');
        titleNode.className = 'popup__title';
        titleNode.textContent = this.popup.title;

        content.appendChild(closeButton);
        content.appendChild(titleNode);
        content.appendChild(el);

        container.appendChild(content);
        this.popup.portal.appendChild(container);

        this.popup.portal.addEventListener('click', this.__handleClick);
    }

    __renderPopupImage(el) {
        const container = this.__buildContainer();

        const content = document.createElement('div');
        content.classList.add('popup__content-image');

        const closeButton = this.__buildCloseButton();

        content.appendChild(closeButton);
        content.appendChild(el);

        container.appendChild(content);
        this.popup.portal.appendChild(container);

        this.popup.portal.addEventListener('click', this.__handleClick);
    }

    __destroyPopup() {
        this.popup.portal.removeEventListener('click', this.__handleClick);
        this.popup.portal.querySelector('.popup').remove();
    }

    __handleClick = (event) => {
        if (event.target.classList.contains('popup__close'))
            this.close();
    }

    __buildContainer() {
        const container = document.createElement('div');
        container.classList.add('popup', 'popup_is-opened');

        return container
    }

    __buildCloseButton() {
        const closeButton = document.body.appendChild(document.createElement('img'));
        closeButton.src = this.popup.iconCloseButton;
        closeButton.alt = this.popup.altCloseButton;
        closeButton.classList.add('popup__close');

        return closeButton;
    }

    close() {
        this.__destroyPopup();
    }
}