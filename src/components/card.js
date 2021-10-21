import { popupImage, cardTemplate, popupLabel, popupImg } from "./constants.js";
import { openPopup } from "./modal.js";
import { deleteCard, sendLike, deleteLike } from "./api.js";

function createCard(
  imgValue,
  nameValue,
  likeValue,
  user_id,
  card_id,
  likesArray
) {
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
  const cardImage = cardElement.querySelector(".element__image");
  const cardLike = cardElement.querySelector(".element__like-number");
  const buttonDelete = cardElement.querySelector(".element__delete");
  const buttonLike = cardElement.querySelector(".element__btn");
  cardLike.textContent = likeValue;
  cardImage.src = imgValue;
  cardImage.alt = nameValue;
  cardElement.querySelector(".element__name").textContent = nameValue;

  if (likeValue > 0) {
    likesArray.forEach((like) => {
      if (like._id === "6933cfbb3192ddb277b680f1") {
        buttonLike.classList.add("element__btn_active");
      }
    });
  } else {
    cardLike.textContent = 0;
  }
  if (user_id !== "6933cfbb3192ddb277b680f1") {
    buttonDelete.classList.add("element__delete_hidden");
  } else {
    buttonDelete.classList.remove("element__delete_hidden");
    buttonDelete.addEventListener("click", function (evt) {
      deleteCard(card_id)
        .then(() => {
          const cardDeleteBtn = evt.target;
          const cardElement = cardDeleteBtn.closest(".element");
          cardElement.remove();
        })
        .catch((err) => console.log(err));
    });
  }
  buttonLike.addEventListener("click", function (evt) {
    //Нажатие на кнопку лайк
    if (evt.target.classList.contains("element__btn_active")) {
      //есть ли у лайка активный класс т.е. закрашен в черный
      deleteLike(card_id) //Удаление лайка
        .then((res) => {
          evt.target.classList.remove("element__btn_active");
          cardLike.textContent = res.likes.length; //пытаюсь приствоить нужное кол-во лайков, после удаления лайков
        })
        .catch((err) => {
          console.log(err); // выводим ошибку в консоль
        });
    } else {
      sendLike(card_id) //поставить лайк
        .then((res) => {
          evt.target.classList.add("element__btn_active");
          cardLike.textContent = res.likes.length;
        })
        .catch((err) => {
          console.log(err); // выводим ошибку в консоль
        });
    }
  });

  cardImage.addEventListener("click", function (evt) {
    openPopup(popupImage);
    popupImg.src = evt.target.src;
    popupImg.alt = evt.target.alt;
    popupLabel.textContent = evt.target.alt;
  });
  return cardElement;
}

export { createCard };
