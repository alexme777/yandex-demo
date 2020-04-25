'use strict';

class Validator {

    static validateLenghtStr(str, min, max) {
        return (str.length===0) ? 0 : (str.length >= min && str.length <= max) ? 1 : 2;
    }

    static validateString(value) {
        let result = '';
        let isValid = true;
        switch (Validator.validateLenghtStr(value, 2, 30)) {
            case 0:
                result = 'Это обязательное поле';
                isValid = false;
                break;
            case 1:
                break;
            case 2:
                result = 'Должно быть от 2 до 30 символов';
                isValid = false;
                break;
        }

        return { isValid, result };
    }

    static validateLink(value) {
        console.log(value)
        let isValid = true;
        let result = '';
        if (!Validator.validURL(value)) {
            result = 'Здесь должна быть ссылка';
            isValid = false;
        }

        return { isValid, result };
    }

    static validURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
            '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return !!pattern.test(str);
    }

}