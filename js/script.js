let popup = document.querySelector('.popup');
let popup_close = popup.querySelector('.btn_function_close');
let edit_button = document.querySelector('.profile__edit-button');
let popup_inputs =  popup.querySelectorAll('.popup__input');
let profile__name = document.querySelector('.profile__name');
let profile__prof = document.querySelector('.profile__prof');
edit_button.addEventListener('click', function(){
  popup.classList.add('popup_opened');
  popup_inputs[0].value = profile__name.textContent;
  popup_inputs[1].value = profile__prof.textContent;
});

popup_close.addEventListener('click', function(){
  popup.classList.remove('popup_opened');
})

function formSubmitHandler (evt) {
  evt.preventDefault(); 
  profile__name.textContent = popup_inputs[0].value;
  profile__prof.textContent = popup_inputs[1].value;
  popup.classList.remove('popup_opened');
}

popup.addEventListener('submit', formSubmitHandler);