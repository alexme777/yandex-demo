'use strict';

class CardList {
    constructor(cardList) {
        this.cardList = cardList;
    }

    /**
     * Щёлкнули по лайку
     * @param event
     */
    like(event) {
        if (event.target.classList.contains("place-card__like-icon")) {
            event.target.classList.toggle("place-card__like-icon_liked");
        }
    }

    /**
     * Щёлкнули по иконке удаления
     * @param event
     */
    remove(event) {
        if (event.target.classList.contains("place-card__delete-icon")) {
            PageEnum.cards.removeChild(event.path[2]);
        }
    }

    addCard(name, link) {
        Card({
            'name': name, 'link': link,
            'onLiked': this.like, 'onRemove': this.remove,
            'onCardClick': this.clickOnCard
        })
    }

    /**
     * Щёлкнули по картинке
     * @param event
     */
    clickOnCard(event) {
        if (event.target.classList.contains("place-card__image")) {
            const image = document.createElement('img');
            image.src = event.target.style.backgroundImage.slice(5, -2);
            popupCard.open(image);
        }
    }

    render() {
        this.cardList.forEach((item) => {
            this.addCard(item.name, item.link);
        });
    }
}