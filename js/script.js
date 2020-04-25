'use strict';

const cardList = new CardList(initialCards);
const popupAddCard = new Popup({
    'portal': PageEnum.portal,
    'title': 'Новое место',
    'iconCloseButton': './images/close.svg',
    'altCloseButton': '',
    'type': 'content',
});
const popupEditProfile = new Popup({
    'portal': PageEnum.portal,
    'title': 'Редактировать профиль',
    'iconCloseButton': './images/close.svg',
    'altCloseButton': '',
    'type': 'content',
});
const popupCard = new Popup({
    'portal': PageEnum.portal,
    'title': '',
    'iconCloseButton': './images/close.svg',
    'altCloseButton': '',
    'type': 'image',
});

function addCard() {
    const form = new Form([
        new InputField(
            {
                type: 'text',
                value: '',
                name: 'name',
                class: 'popup__input popup__input_type_name',
                placeholder: 'Название',
                validator: Validator.validateString
            }
        ),
        new InputField(
            {
                type: 'text',
                value: '',
                name: 'link',
                class: 'popup__input popup__input_type_link-url',
                placeholder: 'Ссылка на картинку',
                validator: Validator.validateLink
            }
        ),
    ], {
        class: 'popup__form',
        textSubmit: '+',
        classButton: 'button popup__button',
        submitCallback: (name, url) => {
            cardList.addCard(name, url);
            popupAddCard.close();
        }
    });

    form.create();
    popupAddCard.open(form.element);
    form.validate();
}

function editProfile() {
    const nameValue = PageEnum.userInfoName.textContent;
    const postValue = PageEnum.userInfoJob.textContent;

    const form = new Form([
        new InputField({
            type: 'text',
            name: 'name',
            class: 'popup__input popup__input_type_name',
            value: nameValue,
            placeholder: 'Имя',
            validator: Validator.validateString,
        }),
        new InputField({
            type: 'text',
            name: 'job',
            class: 'popup__input popup__input_type_name',
            value: postValue,
            placeholder: '"О себе',
            validator: Validator.validateString,
        }),
    ], {
        class: 'popup__form',
        textSubmit: 'Сохранить',
        classButton: 'button popup__button popup__button_text18',
        submitCallback: (name, job) => {
            PageEnum.userInfoName.textContent = name;
            PageEnum.userInfoJob.textContent = job;
            popupEditProfile.close();
        }
    });

    form.create();
    popupEditProfile.open(form.element);
    form.validate();
}

cardList.render();

PageEnum.userInfoButton.addEventListener('click', addCard);
PageEnum.userEditButton.addEventListener('click', editProfile);
