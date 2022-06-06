function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen}`} >
      <div className="popup__content">
        <button
          type="button"
          className="popup__close"
          aria-label="Закрыть попап"
          onClick={props.onClose}
        ></button>
        <h2 className="popup__title">{props.title}</h2>
        <form
          className="popup__form popup__form_data_edit"
          method="POST"
          name={props.name}
          noValidate
        >
          {props.children}
          <button type="submit" className="popup__button" disabled>
            Сохранить
          </button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm