import './App.scss'
import Card from '@/components/card/index'
import { CAR_CATEGORIES } from './variables/variables'


function App() {

  return (
    <>
      <section>
        {CAR_CATEGORIES.map((car) => (
          <Card
            key={car.id}
            title={car.title}
            description={car.description}
            icon={car.icon}
          />
        ))}
      </section>

  
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </div>
    </>
  )
}

export default App
