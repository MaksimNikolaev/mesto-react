import Header from './Header';
import Main from './Main';
import Footer from './Footer';
//import './App.css';

function App() {
  return (
  <div className="page">
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
    <div className="popup popup_edit">
      <div className="popup__content">
        <button
          type="button"
          className="popup__close"
          aria-label="Закрыть попап"
        ></button>
        <h2 className="popup__title">Редактировать профиль</h2>
        <form
          className="popup__form popup__form_data_edit"
          method="POST"
          name="editForm"
          novalidate
        >
          <input
            type="text"
            id="name"
            className="popup__input popup__input_data_name"
            name="name"
            placeholder="Введите имя"
            minlength="2"
            maxlength="40"
            required
          />
          <span id="name-error"></span>
          <input
            type="text"
            id="about"
            className="popup__input popup__input_data_job"
            name="about"
            minlength="2"
            maxlength="200"
            placeholder="Введите информацию о себе"
            required
          />
          <span id="about-error"></span>
          <button type="submit" className="popup__button" disabled>
            Сохранить
          </button>
        </form>
      </div>
    </div>
    <div className="popup popup_updateAvatar">
      <div className="popup__content">
        <button
          type="button"
          className="popup__close"
          aria-label="Закрыть попап"
        ></button>
        <h2 className="popup__title">Обновить аватар</h2>
        <form
          className="popup__form popup__form_data_updateAvatar"
          method="POST"
          name="updateAvatarForm"
          novalidate
        >
          <input
            type="url"
            id="avatar"
            className="popup__input popup__input_data_avatar"
            name="avatar"
            placeholder="Введите ссылку на фотографию"
            required
          />
          <span id="avatar-error"></span>
          <button type="submit" className="popup__button" disabled>
            Сохранить
          </button>
        </form>
      </div>
    </div>
    <div className="popup popup_add">
      <div className="popup__content">
        <button
          type="button"
          className="popup__close"
          aria-label="Закрыть попап"
        ></button>
        <h2 className="popup__title">Новое место</h2>
        <form
          className="popup__form popup__form_data_add"
          method="POST"
          name="addForm"
          novalidate
        >
          <input
            type="text"
            id="place"
            className="popup__input popup__input_data_place"
            name="name"
            placeholder="Название"
            minlength="2"
            maxlength="30"
            required
          />
          <span id="place-error"></span>
          <input
            type="url"
            id="link"
            className="popup__input popup__input_data_link"
            name="link"
            placeholder="Ссылка на картинку"
            required
          />
          <span id="link-error"></span>
          <button type="submit" className="popup__button" disabled>Создать</button>
        </form>
      </div>
    </div>
    <div className="popup popup_photo">
      <div className="popup__galery">
        <button
          type="button"
          className="popup__close"
          aria-label="Закрыть попап"
        ></button>
        <figure className="popup__figure">
          <img className="popup__photo" src="#" alt="" />
          <figcaption className="popup__caption"></figcaption>
        </figure>
      </div>
    </div>
    <div className="popup popup_deleteCard">
      <div className="popup__content">
        <button
          type="button"
          className="popup__close"
          aria-label="Закрыть попап"
        ></button>
        <h2 className="popup__title">Вы уверены?</h2>
        <form
          className="popup__form popup__form_data_remove"
          method="POST"
          name="removeCardForm"
          novalidate
        >
          <button type="submit" className="popup__button popup__button_remove">
            Да
          </button>
        </form>
      </div>
    </div>
    <template className="cards-template">
      <li className="elements__item">
        <div className="elements__cover">
          <div className="elements__photo-container">
            <img src="#" alt="" className="elements__photo" />
          </div>
          <div className="elements__info">
            <h2 className="elements__title"></h2>
            <div className="elements__group">
              <button type="button" className="elements__like"></button>
              <p className="elements__count-like"></p>
            </div>
          </div>
          <button type="button" className="elements__trash"></button>
        </div>
      </li>
    </template>
    </div>
  );
}

export default App;
