import Button from '../button'
import './card.scss'

const Card = ({ icon, title, description }) => {
  return (
    <article >
      <img src={icon} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <Button />
    </article>

  )
}

export default Card