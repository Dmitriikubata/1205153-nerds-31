const link_popup = document.querySelector('.contacts-info_button');
const popup = document.querySelector('.popup-contact');
const close_popup = document.querySelector('.close-popup');
const popup_form = popup.querySelector('form');
const popup_name = popup.querySelector('[name=name]');
const popup_email = popup.querySelector('[name=email]');
const popup_message = popup.querySelector('[name=message]')
const storage_name = localStorage.getItem('namename');
const storage_email = localStorage.getItem('emailemail');

let isStorageSupport = true;
let storage = "";

try {
    storage = localStorage.getItem('namename');
} catch (err) {
    isStorageSupport = false;
}

try {
    storage = localStorage.getItem('emailemail');
} catch (err) {
    isStorageSupport = false;
}

link_popup.addEventListener('click', function(evt) {
    evt.preventDefault();
    popup.classList.remove('popup-contact_hidden');
    if (storage_name) {
        popup_name.value = storage_name;
        popup_email.focus();
    } else {
        popup_name.focus();
    }

    if (storage_email && storage_name) {
        popup_email.value = storage_email;
        popup_name.value = storage_name;
        popup_message.focus();
    } else {
        popup_name.focus();
    }

    if (storage_name) {
        popup_name.value = storage_name;
    }
    if (storage_email) {
        popup_email.value = storage_email;
    }
});

close_popup.addEventListener('click', function(evt) {
    evt.preventDefault();
    popup.classList.add('popup-contact_hidden');
});

popup_form.addEventListener('submit', function(evt) {
    if (!popup_name.value || !popup_email.value) {
        evt.preventDefault();
        console.log('Нужно ввести имя и email');
    } else {
        if (isStorageSupport) {
        localStorage.setItem('namename', popup_name.value);
        localStorage.setItem('emailemail', popup_email.value);
        }
    }
});

window.addEventListener ('keydown', function (evt) {
    if (evt.key === 'Esc' || evt.key === 'Escape') {
        if (popup.classList.contains('popup-contact_hidden') > -1) {
            evt.preventDefault();
            popup.classList.add('popup-contact_hidden');
        }
    }
})


