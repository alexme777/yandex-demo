'use strict';

const Card = function (props) {
    //формируем все элементы
    const oneCard = document.createElement('div');
    oneCard.classList.add('place-card');

    const imgCard = document.createElement('div');
    imgCard.classList.add('place-card__image');
    imgCard.style.backgroundImage = `url(${props.link})`;
    imgCard.onclick = props.onCardClick;

    const btnImgCard = document.createElement('button');
    btnImgCard.classList.add('place-card__delete-icon');
    btnImgCard.onclick = props.onRemove;

    const descCard = document.createElement('div');
    descCard.classList.add('place-card__description');

    const h3Card = document.createElement('h3');
    h3Card.classList.add('place-card__name');
    h3Card.textContent = props.name;

    const btnLike = document.createElement('button');
    btnLike.classList.add('place-card__like-icon');
    btnLike.onclick = props.onLiked;

    //сливаем их в один
    oneCard.appendChild(imgCard);
    imgCard.appendChild(btnImgCard);
    oneCard.appendChild(descCard);
    descCard.appendChild(h3Card);
    descCard.appendChild(btnLike);

    //добавляем карточку на страницу
    PageEnum.cards.appendChild(oneCard);
}