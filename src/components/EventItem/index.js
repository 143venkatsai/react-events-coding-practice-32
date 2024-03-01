import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEventId, isActive} = props
  const {imageUrl, name, location, id} = eventDetails
  const activeImgClassName = isActive ? 'event-image active' : 'event-image'

  const onClickButton = () => {
    setActiveEventId(id)
  }

  return (
    <li className="event-item">
      <button type="button" className="event-button" onClick={onClickButton}>
        <img src={imageUrl} className={activeImgClassName} alt="event" />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
