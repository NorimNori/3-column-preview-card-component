import './button.scss'

const Button = ({title}) => {
  return (
    <button 
    className={`card__button ${title}-button`} 
    aria-label={`Learn more about ${title}`}
    type='button'
    >Learn More</button>
  )
}

export default Button