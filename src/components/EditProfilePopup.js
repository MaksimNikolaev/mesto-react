import { useState, useContext, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
  const [name, setName] = useState(' ');
  const [description, setDescription] = useState(' ');
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]); 
  
  function handleChangeName(e) {
    setName(e.target.value);
  }
  
  function handleChangeDescription(e) {
    setDescription(e.target.value);
  } 

  function handleSubmit(e) {
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
    name,
    about: description,
    });
  }

  return (
    <PopupWithForm name="editProfile" title="Редактировать профиль" isOpen={isOpen} onClose={onClose} textButton="Сохранить" onSubmit={handleSubmit}>
      <input
            type="text"
            id="name"
            className="popup__input popup__input_data_name"
            name="name"
            placeholder="Введите имя"
            minLength={2}
            maxLength={40}
            value={name || ""}
            onChange={handleChangeName}
            required
          />
          <span id="name-error"></span>
          <input
            type="text"
            id="about"
            className="popup__input popup__input_data_job"
            name="about"
            minLength={2}
            maxLength={200}
            placeholder="Введите информацию о себе"
            value={description || ""}
            onChange={handleChangeDescription}
            required
          />
          <span id="about-error"></span>
      </PopupWithForm>
  )
}

export default EditProfilePopup;