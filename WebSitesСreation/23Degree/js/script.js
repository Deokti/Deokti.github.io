function serialize(form) {
    if (!form || form.nodeName !== "FORM") {
        return false;
    }
    var i, j, q = [];
    for (i = form.elements.length - 1; i >= 0; i = i - 1) {
        if (form.elements[i].name === "") {
            continue;
        }
        switch (form.elements[i].nodeName) {
            case 'INPUT':
                switch (form.elements[i].type) {
                    case 'text':
                    case 'tel':
                    case 'email':
                    case 'hidden':
                    case 'password':
                    case 'button':
                    case 'reset':
                    case 'color':
                    case 'data':
                    case 'range':   
                    case 'submit':
                        q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                        break;
                    case 'checkbox':
                    case 'radio':
                        if (form.elements[i].checked) {
                            q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                        }
                        break;
                }
                break;
            case 'file':
                break;
            case 'TEXTAREA':
                q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                break;
            case 'SELECT':
                switch (form.elements[i].type) {
                    case 'select-one':
                        q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                        break;
                    case 'select-multiple':
                        for (j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {
                            if (form.elements[i].options[j].selected) {
                                q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].options[j].value));
                            }
                        }
                        break;
                }
                break;
            case 'BUTTON':
                switch (form.elements[i].type) {
                    case 'reset':
                    case 'submit':
                    case 'button':
                        q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                        break;
                }
                break;
        }
    }
    return q.join("&");
}



//получаем форму и отклчаем перезагрузку страницы
document.querySelector('.button_header').addEventListener('click', function(event) {
    let headerForm = document.querySelector('.header-form');
    event.preventDefault();
    console.log(serialize(headerForm));
    
    //при нажатии input очищается
    let clearForm = document.querySelectorAll('.header-promo__application-enter');
    for (let i = 0; i < clearForm.length; i++) {
        clearForm[i].value = '';
    }
});

/* Пеервый пакет - Light */
document.querySelector('.calculate-left__choose-package_one').addEventListener('mousemove', function(event) {
    let appearanceDescriptionOne = document.querySelector('.calculate-left__list-description_one');
    setTimeout(function() {
        appearanceDescriptionOne.style.opacity = '1';
    }, 300);
});
document.querySelector('.calculate-left__choose-package_one').addEventListener('mouseout', function(event) {
    let appearanceDescriptionOne = document.querySelector('.calculate-left__list-description_one');
    setTimeout(function() {
        appearanceDescriptionOne.style.opacity = '0';
    }, 300);
});
/* /.Первый пакет - Light */

/* Второй пакет - Medium */
document.querySelector('.calculate-left__choose-package_two').addEventListener('mousemove', function(event) {
    let appearanceDescriptionTwo = document.querySelector('.calculate-left__list-description_two');
    setTimeout(function() {
        appearanceDescriptionTwo.style.opacity = '1';
    }, 300);
});
document.querySelector('.calculate-left__choose-package_two').addEventListener('mouseout', function(event) {
    let appearanceDescriptionTwo = document.querySelector('.calculate-left__list-description_two');
    setTimeout(function() {
        appearanceDescriptionTwo.style.opacity = '0';
    }, 300);
});
/* /.Второй пакет - Medium */

/* Третий пакет - Full */
document.querySelector('.calculate-left__choose-package_three').addEventListener('mousemove', function(event) {
    let appearanceDescriptionThree = document.querySelector('.calculate-left__list-description_three');
    setTimeout(function() {
        appearanceDescriptionThree.style.opacity = '1';
    }, 300);
});
document.querySelector('.calculate-left__choose-package_three').addEventListener('mouseout', function(event) {
    let appearanceDescriptionThree = document.querySelector('.calculate-left__list-description_three');
    setTimeout(function() {
        appearanceDescriptionThree.style.opacity = '0';
    }, 300);
});
/* ./.Третий пакет - Full */





