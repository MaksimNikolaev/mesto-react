import PopupWithForm from './PopupWithForm';
import { useRef, useEffect } from 'react';

function AddPlacePopup({isOpen, onClose, onAddPlace}) {

  const cardNameRef = useRef();
  const cardLinkRef = useRef();

  useEffect(() => {
    cardNameRef.current.value = "";
    cardLinkRef.current.value = "";
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: cardNameRef.current.value,
      link: cardLinkRef.current.value,
    });
  } 

  return (
    <PopupWithForm name="addPlace" title="Новое место" isOpen={isOpen} onClose={onClose} textButton="Создать" onSubmit={handleSubmit}>
      <input
            type="text"
            id="place"
            className="popup__input popup__input_data_place"
            name="name"
            placeholder="Название"
            minLength={2}
            maxLength={30}
            ref={cardNameRef}
            required
          />
          <span id="place-error"></span>
          <input
            type="url"
            id="link"
            className="popup__input popup__input_data_link"
            name="link"
            placeholder="Ссылка на картинку"
            ref={cardLinkRef}
            required
          />
          <span id="link-error"></span>
      </PopupWithForm>
  )
}

export default AddPlacePopup;