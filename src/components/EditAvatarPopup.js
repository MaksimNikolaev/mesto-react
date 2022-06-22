import { useRef, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar, isLoading}) {

  const avatarRef = useRef();

  useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  } 
  
  return (
    <PopupWithForm name="editAvatar" title="Обновить аватар" isOpen={isOpen} onClose={onClose} textButton={isLoading ? "Сохранение..." : "Сохранить"} onSubmit={handleSubmit} >
      <input
            type="url"
            id="avatar"
            className="popup__input popup__input_data_avatar"
            name="avatar"
            placeholder="Введите ссылку на фотографию"
            ref={avatarRef}
            required
          />
          <span id="avatar-error"></span>
      </PopupWithForm>
  )
}

export default EditAvatarPopup;
