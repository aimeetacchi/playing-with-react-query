import PersonStyles from './styles';

interface PersonProps {
   person: {
    name: String
    gender: String
    birth_year: String
    hair_color: String
    height: String
    mass: String
    skin_color: String
    eye_color: String
   }
}

function Person({person} : PersonProps ) {
    const { name, gender, birth_year, hair_color, height, mass, skin_color, eye_color, } = person;
  return (
    <PersonStyles>
        <div className="card">
            <div className="card__header">
                <h3>{name}</h3>
                <p>Gender: {gender}</p>
                <p>Birth year: {birth_year}</p>
            </div>
            <div className="card__body">
                <div className="card__col">
                    <p>Skin color: {skin_color}</p>
                    <p>Hair color: {hair_color}</p>
                    <p>Eye color: {eye_color}</p>
                   
                </div>
                <div className="card__col">
                    <p>Height: {height}</p>
                    <p>Mass: {mass}</p>
                </div>
            </div>

        </div>
    </PersonStyles>
  )
}

export default Person