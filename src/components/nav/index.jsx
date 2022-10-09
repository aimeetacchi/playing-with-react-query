import NavStyles from './styles'

const Nav = ({setPage}) => {
  return (
    <NavStyles>
      <ul className='nav-list'>
         <li className='nav-list__item'>
          <button onClick={() => setPage('planets')}>Planets</button>
        </li>
        <li className='nav-list__item'>
          <button onClick={() => setPage('people')}>People</button>
        </li>
       
      </ul>
    </NavStyles>
  )
}

export default Nav