import Button from '../button'
import './card.scss'

const Card = ({ icon, title, description }) => {
  return (
    <article  className={`card ${title}`}>
      <img 
      src={icon} 
      alt={title} 
      className='card__icon'
      />
      <h2 className='card__title'>{title}</h2>
      <p className='card__description'>{description}</p>
      <Button />
    </article>

  )
}

export default Card