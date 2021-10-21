export const setBtnLabel = (btn, isLoading, text) => {
  //Меняет текст пока грузится запрос
  if (isLoading) {
    btn.textContent = "Сохранение...";
  } else {
    btn.textContent = text;
  }
};
