const link_popup = document.querySelector('.contacts-info-button');
const popup = document.querySelector('.popup-contact');
const close_popup = document.querySelector('.close-popup');
const popup_form = popup.querySelector('form');
const popup_name = popup.querySelector('[name=name]');
const popup_email = popup.querySelector('[name=email]');
const popup_message = popup.querySelector('[name=message]')


let isStorageSupport = true;
let storage_name = '';
let storage_email = '';

try {
    storage_name = localStorage.getItem('namename');
    storage_email = localStorage.getItem('emailemail');
} catch (err) {
    isStorageSupport = false;
}

link_popup.addEventListener('click', function(evt) {
    evt.preventDefault();
    popup.classList.remove('popup-contact-hidden');
    console.log('button work');
    popup_name.focus();   
    if (storage_email && storage_name) {
        popup_email.value = storage_email;
        popup_name.value = storage_name;
        popup_message.focus();
    } else if (storage_name) {
        popup_name.value = storage_name;
        popup_email.focus();
    } else if (storage_email) {
        popup_email.value = storage_email;
        popup_name.focus();       
    }
});

close_popup.addEventListener('click', function(evt) {
    evt.preventDefault();
    popup.classList.add('popup-contact-hidden');
    popup.classList.remove("modal-error");
});

popup_form.addEventListener('submit', function(evt) {
    if (!popup_name.value || !popup_email.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
        localStorage.setItem('namename', popup_name.value);
        localStorage.setItem('emailemail', popup_email.value);
        }
    }
});

window.addEventListener ('keydown', function (evt) {
    if (evt.key === 'Esc' || evt.key === 'Escape') {
        if (popup.classList.contains('popup-contact-hidden') > -1) {
            evt.preventDefault();
            popup.classList.add('popup-contact-hidden');
            popup.classList.remove("modal-error");
        }
    }
})


