import './index.css'
import {editButton,popupProfile,popupProfileName,popupProfileProf,profileName,profileProf,addButton,popupCloseProfile,popupCloseCard,popupCard,popupImage,popupOverlay,variablesValidation,popupCloseImage,cards,popupCardName,popupCardLink} from '../components/constants.js';
import {initialCards} from "../components/initial-сards.js";
import {openPopup,closePopup,closePopupOverlay} from "../components/modal.js";
import {createCard} from "../components/card.js";
import enableValidation from "../components/validate.js"

function handleCardFormSubmit(evt){
  evt.preventDefault(); 
  cards.prepend(createCard(popupCardLink.value,popupCardName.value));
  popupCardName.value='';
  popupCardLink.value='';
  closePopup(popupCard);
}

function handleProfileFormSubmit (evt) {
  evt.preventDefault(); 
  profileName.textContent = popupProfileName.value;
  profileProf.textContent = popupProfileProf.value;
  closePopup(popupProfile);
}

editButton.addEventListener('click', function(){
  openPopup(popupProfile);
  popupProfileName.value = profileName.textContent;
  popupProfileProf.value = profileProf.textContent;
});

addButton.addEventListener('click', function(){
  openPopup(popupCard);
});

popupCloseProfile.addEventListener('click', function(){
  closePopup(popupProfile);
})

popupCloseCard.addEventListener('click', function(){
  closePopup(popupCard);
})

popupCloseImage.addEventListener('click', function(){
  closePopup(popupImage);
})


popupProfile.addEventListener('submit', handleProfileFormSubmit);
popupCard.addEventListener('submit',handleCardFormSubmit);

popupProfile.addEventListener('click',closePopupOverlay);
popupCard.addEventListener('click',closePopupOverlay);
popupImage.addEventListener('click',closePopupOverlay);

initialCards.forEach(item => {
  cards.prepend(createCard(item.link,item.name));
})

enableValidation(variablesValidation);