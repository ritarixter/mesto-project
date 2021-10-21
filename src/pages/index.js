import './index.css'
import {editButton,popupProfile,popupProfileName,popupProfileProf,profileName,profileProf,addButton,popupCloseProfile,popupCloseCard,popupCard,popupImage,variablesValidation,popupCloseImage,cards,popupCardName,popupCardLink,profileAvatar,popupAvatar,popupCloseAvatar,editAvatarButton,popupAvatarLink,popupAvatarSave,popupCardSave,popupProfileSave} from '../components/constants.js';
import {openPopup,closePopup,closePopupOverlay} from "../components/modal.js";
import {createCard} from "../components/card.js";
import enableValidation from "../components/validate.js"
import {userInformation,cardsLoad,profileChange,addCard,changeAvatar} from "../components/api.js"
import {setBtnLabel} from "../components/utils.js"

function handleCardFormSubmit(){
  setBtnLabel(popupCardSave, true);
  addCard(popupCardLink.value,popupCardName.value)
  .then((item)=>{
    cards.prepend(createCard(item.link,item.name,item.likes.length,item.owner._id,item._id, item.likes));  
    closePopup(popupCard);
    popupCardName.value='';
    popupCardLink.value='';
  })
  .catch((err) => {
    console.log(err); // выводим ошибку в консоль
  })
  .finally(() => setBtnLabel(popupCardSave, false, 'Сохранить')) 
}

function handleProfileFormSubmit () {
  setBtnLabel(popupProfileSave, true);
  profileChange(popupProfileName.value,popupProfileProf.value)
  .then(()=>{
    profileName.textContent = popupProfileName.value;
    profileProf.textContent = popupProfileProf.value;
    closePopup(popupProfile);
  })
  .catch((err) => {
    console.log(err); // выводим ошибку в консоль
  })
  .finally(() => setBtnLabel(popupProfileSave, false, 'Сохранить')) 
}

function handleAvatarFormSubmit () {
  const link = popupAvatarLink.value; 
 setBtnLabel(popupAvatarSave, true);
  changeAvatar(link)
  .then((res)=>{
    profileAvatar.src = link;
    closePopup(popupAvatar)
   
})
  .catch(err => {
  console.log(err); 
})
  .finally(() => setBtnLabel(popupAvatarSave, false, 'Сохранить'));
  
}

editButton.addEventListener('click', function(){
  openPopup(popupProfile);
  popupProfileName.value = profileName.textContent;
  popupProfileProf.value = profileProf.textContent;
});

addButton.addEventListener('click', function(){
  openPopup(popupCard);
});

editAvatarButton.addEventListener('click', function(){
  openPopup(popupAvatar);
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

popupCloseAvatar.addEventListener('click', function(){
  closePopup(popupAvatar);
})


popupProfile.addEventListener('submit', handleProfileFormSubmit);
popupCard.addEventListener('submit',handleCardFormSubmit);
popupAvatar.addEventListener('submit',handleAvatarFormSubmit);

popupProfile.addEventListener('click',closePopupOverlay);
popupCard.addEventListener('click',closePopupOverlay);
popupImage.addEventListener('click',closePopupOverlay);
popupAvatar.addEventListener('click',closePopupOverlay);

enableValidation(variablesValidation);

userInformation()
.then((res)=>{
  profileName.textContent = res.name;
  profileProf.textContent = res.about;
  profileAvatar.src = res.avatar;
})
.catch((err) => {
  console.log(err); // выводим ошибку в консоль
}); 

cardsLoad()//Загружаю информацию о всех карточках с сервера
.then((res)=>{
  res.forEach(item => {
    cards.prepend(createCard(item.link,item.name,item.likes.length,item.owner._id,item._id, item.likes));//Создаю по карточке   
  })
})
.catch((err) => {
  console.log(err); // выводим ошибку в консоль
}); 



