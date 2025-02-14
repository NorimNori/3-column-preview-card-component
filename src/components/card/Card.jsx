import Button from '../button'
import './card.scss'

const Card = ({icon, title, description}) => {
  return (
    <article  className={`card ${title}`} aria-labelledby={`card-${title}`}>
      <img 
      src={icon} 
      alt={title} 
      className='card__icon'
      />
      <h2 id={`card-${title}`} className='card__title'>{title}</h2>
      <p className='card__description'>{description}</p>
      <Button title={title}/>
    </article>

  )
}

export default Card