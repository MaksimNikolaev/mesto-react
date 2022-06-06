function Card(props) {
  return (
    <li className="elements__item">
        <div className="elements__cover">
          <div className="elements__photo-container">
            <img src={props.link} alt={props.name} className="elements__photo" />
          </div>
          <div className="elements__info">
            <h2 className="elements__title">{props.name}</h2>
            <div className="elements__group">
              <button type="button" className="elements__like"></button>
              <p className="elements__count-like">{props.likes}</p>
            </div>
          </div>
          <button type="button" className="elements__trash"></button>
        </div>
      </li>
  )
}

export default Card;