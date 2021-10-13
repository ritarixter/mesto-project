import {popupImage,cardTemplate,popupLabel,popupImg} from "./constants.js"
import {openPopup, closePopup} from "./modal.js"

function createCard (imgValue,nameValue) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const cardImage = cardElement.querySelector('.element__image');
  cardImage.src=imgValue;
  cardImage.alt=nameValue;
  cardElement.querySelector('.element__name').textContent=nameValue;
  cardElement.querySelector('.element__btn').addEventListener('click', function(evt){
    evt.target.classList.toggle('element__btn_active');
  })
  cardElement.querySelector('.element__delete').addEventListener('click', function(evt){
    const cardDeleteBtn = evt.target
    const cardElement = cardDeleteBtn.closest('.element') 
    cardElement.remove();
  })

  cardImage.addEventListener('click', function(evt){
    openPopup(popupImage);
    popupImg.src=evt.target.src;
    popupImg.alt=evt.target.alt;
    popupLabel.textContent=evt.target.alt;
  })
  return cardElement
}

export {createCard};