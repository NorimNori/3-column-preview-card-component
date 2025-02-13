import './App.scss'
import Card from '@/components/card/index'
import { CAR_CATEGORIES } from './variables/variables'


function App() {

  return (
    <>
      <main aria-labelledby="car-categories">
      <h2 id="car-categories" className="sr-only">Categorías de coches</h2>
        {CAR_CATEGORIES.map((car) => (
          <Card
            key={car.id}
            title={car.title}
            description={car.description}
            icon={car.icon}
            aria-labelledby={`card-${car.id}`}
          />
        ))}
      </main>

      <footer className="footer" role="contentinfo">
        <p className="footer__text">
        Challenge by <a className="footer__link" href="https://www.frontendmentor.io?ref=challenge" target="_blank" title="Visit Frontend Mentor">Frontend Mentor</a>. 
        Coded by <a className="footer__link" href="https://www.frontendmentor.io/profile/NorimNori" title="Visit Gloria Rangel's profile">Gloria Rangel</a>.
        </p>
      </footer>
    </>
  )
}

export default App
