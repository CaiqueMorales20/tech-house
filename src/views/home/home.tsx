import { NavLink } from 'react-router-dom'

// Functional Component
export function Home() {
  // Rendering
  return (
    <div>
      Home
      <NavLink to={'/cart'}>go to cart</NavLink>
    </div>
  )
}
