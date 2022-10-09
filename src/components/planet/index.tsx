import dayjs, { Dayjs } from 'dayjs'
import PlanetStyles from './styles';


interface PlanetProps {
   planet: {
    name: String
    population: String
    gravity: String
    climate: String
    diameter: String
    created: string | number | Date | Dayjs | null | undefined
    terrain: String
    surface_water: String
    rotation_period: String
   }
}

function Planet({planet} : PlanetProps ) {
    const { name, population, gravity, climate, diameter, created, terrain, surface_water, rotation_period } = planet;
  return (
    <PlanetStyles>
        <div className="card">
            <div className="card__header">
                <h3>{name}</h3>
            </div>
            <div className="card__body">
                <div className="card__col">
                    <p>Population: {population}</p>
                    <p>Gravity: {gravity}</p>
                    <p>Climate: {climate}</p>
                </div>
                <div className="card__col">
                    <p>Diameter: {diameter}</p>
                    <p>Surface water: {surface_water}</p>
                    <p>Rotation period: {rotation_period}</p>
                    <p>Terrain: {terrain}</p>
                    <p>Created: {dayjs(created).format('DD/MM/YYYY')}</p>
                    </div>
            </div>
            
            
        </div>
    </PlanetStyles>
  )
}

export default Planet