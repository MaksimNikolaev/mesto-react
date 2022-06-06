function ImagePopup() {
  return (
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
  )
}